'use client'

import { useEffect } from 'react'
import LayoutOne from '@/components/shared/LayoutOne'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function CheckoutSuccessPage() {
  const searchParams = useSearchParams()
  const paymentIntent = searchParams.get('payment_intent')

  useEffect(() => {
    // You can verify the payment status here if needed
    if (paymentIntent) {
      console.log('Payment Intent:', paymentIntent)
    }
  }, [paymentIntent])

  return (
    <LayoutOne>
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <div className="mb-8 flex justify-center">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
        
        <h1 className="mb-4 text-4xl font-bold text-gray-900">
          Payment Successful!
        </h1>
        
        <p className="mb-8 text-lg text-gray-600">
          Thank you for your order. We've received your payment and will begin processing your order immediately.
        </p>
        
        <div className="mb-8 rounded-lg bg-gray-50 p-6">
          <h2 className="mb-4 text-xl font-semibold">What's Next?</h2>
          <ul className="space-y-2 text-left text-gray-600">
            <li>• You'll receive an order confirmation email shortly</li>
            <li>• Our team will review your order and contact you within 24 hours</li>
            <li>• We'll schedule your consultation and treatment plan</li>
            <li>• Your aligners will be custom-made and shipped to you</li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block rounded-md bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            Return to Home
          </Link>
          
          <div className="text-sm text-gray-500">
            <p>Have questions? Contact us at support@alignersfit.com</p>
          </div>
        </div>
      </div>
    </LayoutOne>
  )
} 