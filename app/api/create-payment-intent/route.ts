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
    const { items, total, orderId } = await request.json()

    // Validate required fields
    if (!items || !total ) {
      return NextResponse.json(
        { error: 'Missing required fields: items, total, or orderId' },
        { status: 400 }
      )
    }

    // Validate orderId is a valid number
    // if (typeof orderId !== 'number' || orderId <= 0) {
    //   return NextResponse.json(
    //     { error: 'Invalid orderId: must be a positive number' },
    //     { status: 400 }
    //   )
    // }

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100), // Convert to cents
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        ...(orderId && { orderId: orderId.toString() }),
        items: JSON.stringify(items.map((item: any) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price
        })))
      }
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
    })
  } catch (error) {
    console.error('Error creating payment intent:', error)
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    )
  }
} 