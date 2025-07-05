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
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Redirect if cart is empty
    if (items.length === 0) {
      router.push('/cart')
      return
    }

    // Set loading to false after validation
    setLoading(false)
  }, [items, router])

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
            <CheckoutForm 
              items={items} 
              total={totalPrice()} 
              onSuccess={clearCart}
            />
          </div>
          
          <div>
            <OrderSummary items={items} total={totalPrice()} />
          </div>
        </div>
      </div>
    </LayoutOne>
  )
} 