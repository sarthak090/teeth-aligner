import { NextRequest, NextResponse } from 'next/server'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const WooCommerce = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_URL!,
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET!,
  version: 'wc/v3'
})

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Support both URL params and request body for order ID
    const url = new URL(request.url)
    const pathParts = url.pathname.split('/')
    const orderIdFromUrl = pathParts[pathParts.length - 1]
    
    const orderId = body.orderId || orderIdFromUrl
    const status = body.status
    const paymentData = body.paymentData

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      )
    }

    // Prepare update data based on what's provided
    const updateData: any = {}
    
    if (status) {
      updateData.status = status
      if (status === 'processing') {
        updateData.set_paid = true
      }
    }
    
    if (paymentData) {
      updateData.transaction_id = paymentData.paymentIntentId
      updateData.meta_data = [
        {
          key: '_stripe_payment_intent_id',
          value: paymentData.paymentIntentId
        },
        {
          key: '_stripe_charge_id',
          value: paymentData.chargeId || ''
        },
        {
          key: '_payment_method',
          value: 'stripe'
        }
      ]
    }

    // Update order
    const response = await WooCommerce.put(`orders/${orderId}`, updateData)

    return NextResponse.json({
      success: true,
      order: response.data
    })
  } catch (error) {
    console.error('Error updating WooCommerce order:', error)
    return NextResponse.json(
      { error: 'Failed to update WooCommerce order' },
      { status: 500 }
    )
  }
} 