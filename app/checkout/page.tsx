'use client'

import { useState, useEffect } from 'react'
import { useCartStore } from '@/store/cartStore'
import LayoutOne from '@/components/shared/LayoutOne'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from '@/components/checkout/CheckoutForm'
import OrderSummary from '@/components/checkout/OrderSummary'
import { Toaster } from 'sonner'
import { useRouter } from 'next/navigation'

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCartStore()
  const [clientSecret, setClientSecret] = useState<string>('')
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Redirect if cart is empty
    if (items.length === 0) {
      router.push('/cart')
      return
    }

    // Create payment intent
    const createPaymentIntent = async () => {
      try {
        const response = await fetch('/api/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: items,
            total: totalPrice(),
          }),
        })

        const data = await response.json()
        setClientSecret(data.clientSecret)
      } catch (error) {
        console.error('Error creating payment intent:', error)
      } finally {
        setLoading(false)
      }
    }

    createPaymentIntent()
  }, [items, totalPrice, router])

  if (loading) {
    return (
      <LayoutOne>
        <div className="mx-auto max-w-7xl px-4 py-24">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </LayoutOne>
    )
  }

  return (
    <LayoutOne>
      <Toaster position="top-right" />
      <div className="mx-auto max-w-7xl px-4 py-24">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Checkout</h1>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-semibold">Payment Information</h2>
            {clientSecret && (
              <Elements stripe={stripePromise} options={{ clientSecret }}>
                <CheckoutForm 
                  items={items} 
                  total={totalPrice()} 
                  onSuccess={clearCart}
                />
              </Elements>
            )}
          </div>
          
          <div>
            <OrderSummary items={items} total={totalPrice()} />
          </div>
        </div>
      </div>
    </LayoutOne>
  )
} 