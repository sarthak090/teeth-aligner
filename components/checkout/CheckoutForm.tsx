'use client'

import { useState, useEffect } from 'react'
import { useStripe, useElements, PaymentElement, Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { CartItem } from '@/store/cartStore'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutFormProps {
  items: CartItem[]
  total: number
  onSuccess: () => void
  paymentIntentId?: string
}

function CheckoutFormContent({ items, total, onSuccess, paymentIntentId }: CheckoutFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
    country: 'CA'
  })
  const router = useRouter()

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const updateWooCommerceOrder = async (orderId: number, status: string) => {
    if (!orderId || orderId <= 0) {
      console.error('Invalid order ID:', orderId)
      return
    }

    try {
      const response = await fetch(`/api/update-woocommerce-order/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          orderId: orderId,
          status: status 
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `Failed to update order status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('Error updating order status:', error)
      throw error
    }
  }

  const createWooCommerceOrder = async (): Promise<number> => {
    const orderData = {
      payment_method: 'stripe',
      payment_method_title: 'Credit Card (Stripe)',
      billing: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        address_1: formData.address,
        city: formData.city,
        state: formData.province,
        postcode: formData.postalCode,
        country: formData.country,
        email: formData.email,
        phone: formData.phone
      },
      shipping: {
        first_name: formData.firstName,
        last_name: formData.lastName,
        address_1: formData.address,
        city: formData.city,
        state: formData.province,
        postcode: formData.postalCode,
        country: formData.country
      },
      line_items: items.map(item => ({
        product_id: item.id,
        quantity: item.quantity,
        name: item.name,
        price: item.price
      })),
      total: total.toString()
    }

    const response = await fetch('/api/create-woocommerce-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.error || `Failed to create order: ${response.status}`)
    }

    const result = await response.json()
    
    if (!result.success || !result.order || !result.order.id) {
      throw new Error('Invalid response from order creation API')
    }

    return result.order.id
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setLoading(true)

    try {
      // Validate form data
      if (!formData.firstName || !formData.lastName || !formData.email) {
        toast.error('Please fill in all required fields')
        return
      }

      // Step 1: Create WooCommerce order first
      const newOrderId = await createWooCommerceOrder()
      setOrderId(newOrderId)
      console.log(`Created WooCommerce order: ${newOrderId}`)

      // Step 2: Update the existing payment intent with the order ID for webhook tracking
      if (paymentIntentId) {
        const updatePaymentIntentResponse = await fetch('/api/update-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            orderId: newOrderId,
            paymentIntentId: paymentIntentId
          }),
        })

        if (!updatePaymentIntentResponse.ok) {
          console.warn('Failed to update payment intent metadata, but continuing with payment')
        }
      }

      // Step 3: Confirm payment with existing payment intent
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/checkout/success`,
          payment_method_data: {
            billing_details: {
              name: `${formData.firstName} ${formData.lastName}`,
              email: formData.email,
              phone: formData.phone,
              address: {
                line1: formData.address,
                city: formData.city,
                state: formData.province,
                postal_code: formData.postalCode,
                country: formData.country
              }
            }
          }
        }
      })

      if (error) {
        console.error('Stripe payment error:', error)
        toast.error(error.message || 'Payment failed')
        
        // Update order status to failed
        try {
          await updateWooCommerceOrder(newOrderId, 'failed')
          console.log(`Order ${newOrderId} status updated to failed`)
        } catch (updateError) {
          console.error('Failed to update order status to failed:', updateError)
          toast.error('Payment failed and order status could not be updated')
        }
        return
      } else {
        // Payment successful - order will be updated via webhook
        onSuccess()
        toast.success('Payment successful!')
        router.push('/checkout/success')
      }
    } catch (error) {
      console.error('Payment error:', error)
      
      // If we have an order ID but something else failed, try to mark it as failed
      if (orderId) {
        try {
          await updateWooCommerceOrder(orderId, 'failed')
          console.log(`Order ${orderId} status updated to failed due to payment error`)
        } catch (updateError) {
          console.error('Failed to update order status to failed:', updateError)
        }
      }
      
      toast.error('Payment failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-8">
      {/* Customer Information */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-xl font-semibold text-gray-900">Customer Information</h3>
          <p className="text-sm text-gray-600 mt-1">Please provide your contact details</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your first name"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Enter your email address"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Enter your phone number"
          />
        </div>
      </div>

      {/* Billing Address */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-xl font-semibold text-gray-900">Billing Address</h3>
          <p className="text-sm text-gray-600 mt-1">Where should we send your order?</p>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Street Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            placeholder="Enter your street address"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your city"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="province" className="block text-sm font-medium text-gray-700">
              Province
            </label>
            <input
              type="text"
              id="province"
              name="province"
              value={formData.province}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your province"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
              placeholder="Enter your postal code"
            />
          </div>
        </div>
      </div>

      {/* Payment Information */}
      <div className="space-y-6">
        <div className="border-b border-gray-200 pb-4">
          <h3 className="text-xl font-semibold text-gray-900">Payment Information</h3>
          <p className="text-sm text-gray-600 mt-1">Enter your payment details</p>
        </div>
        
        <div className="space-y-4">
          <PaymentElement />
        </div>
      </div>

      {/* Submit Button */}
      <div className="pt-6">
        <button
          type="submit"
          disabled={loading || !stripe || !elements}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {loading ? 'Processing...' : `Pay $${(total).toFixed(2)}`}
        </button>
      </div>
    </form>
  )
}

export default function CheckoutForm(props: CheckoutFormProps) {
  const [clientSecret, setClientSecret] = useState<string>('')
  const [paymentIntentId, setPaymentIntentId] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const createPaymentIntent = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: props.items,
          total: props.total,
        }),
      })

      const data = await response.json()
      setClientSecret(data.clientSecret)
      setPaymentIntentId(data.paymentIntentId)
    } catch (error) {
      console.error('Error creating payment intent:', error)
      toast.error('Failed to initialize payment form')
    } finally {
      setLoading(false)
    }
  }

  // Create payment intent when component mounts
  useEffect(() => {
    createPaymentIntent()
  }, [props.items, props.total])

  if (loading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!clientSecret) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600">Failed to load payment form. Please refresh the page.</p>
      </div>
    )
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutFormContent {...props} paymentIntentId={paymentIntentId} />
    </Elements>
  )
} 