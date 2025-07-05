import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

if(!process.env.STRIPE_SECRET_KEY ) {
  throw new Error('STRIPE_SECRET_KEY is not set')
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
})

export async function POST(request: NextRequest) {
  try {
    const { orderId, paymentIntentId } = await request.json()

    // Validate required fields
    if (!orderId) {
      return NextResponse.json(
        { error: 'Missing required field: orderId' },
        { status: 400 }
      )
    }

    // Get the payment intent ID from the request body or try to get it from the session
    let intentId = paymentIntentId

    // If no payment intent ID provided, we can't update it
    if (!intentId) {
      return NextResponse.json(
        { error: 'Payment intent ID is required' },
        { status: 400 }
      )
    }

    // Update the payment intent metadata
    const paymentIntent = await stripe.paymentIntents.update(intentId, {
      metadata: {
        orderId: orderId.toString()
      }
    })

    return NextResponse.json({
      success: true,
      paymentIntent: paymentIntent
    })
  } catch (error) {
    console.error('Error updating payment intent:', error)
    return NextResponse.json(
      { error: 'Failed to update payment intent' },
      { status: 500 }
    )
  }
} 