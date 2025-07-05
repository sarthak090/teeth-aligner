import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
})

const WooCommerce = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_URL!,
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET!,
  version: 'wc/v3'
})

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error) {
    console.error('Webhook signature verification failed:', error)
    return NextResponse.json(
      { error: 'Invalid signature' },
      { status: 400 }
    )
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log('Payment succeeded:', paymentIntent.id)
        
        // Get order ID from metadata
        const orderId = paymentIntent.metadata.orderId
        
        if (orderId) {
          // Update WooCommerce order with payment information
          try {
            const response = await WooCommerce.put(`orders/${orderId}`, {
              status: 'processing',
              set_paid: true,
              transaction_id: paymentIntent.id,
              meta_data: [
                {
                  key: '_stripe_payment_intent_id',
                  value: paymentIntent.id
                },
                {
                  key: '_stripe_charge_id',
                  value: typeof paymentIntent.latest_charge === 'string' ? paymentIntent.latest_charge : ''
                },
                {
                  key: '_payment_method',
                  value: 'stripe'
                }
              ]
            })
            console.log('Order updated successfully:', response.data.id)
          } catch (error) {
            console.error('Error updating WooCommerce order:', error)
          }
        }
        
        break
        
      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object as Stripe.PaymentIntent
        console.log('Payment failed:', failedPayment.id)
        
        // Get order ID from metadata
        const failedOrderId = failedPayment.metadata.orderId
        
        if (failedOrderId) {
          // Update WooCommerce order status to failed
          try {
            await WooCommerce.put(`orders/${failedOrderId}`, {
              status: 'failed',
              meta_data: [
                {
                  key: '_stripe_payment_intent_id',
                  value: failedPayment.id
                },
                {
                  key: '_payment_failed',
                  value: 'true'
                },
                {
                  key: '_payment_failed_reason',
                  value: failedPayment.last_payment_error?.message || 'Payment failed'
                },
                {
                  key: '_payment_failed_at',
                  value: new Date().toISOString()
                }
              ]
            })
            console.log('Order marked as failed:', failedOrderId)
          } catch (error) {
            console.error('Error updating failed order:', error)
          }
        }
        
        break
        
      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error processing webhook:', error)
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    )
  }
} 