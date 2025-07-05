import { NextRequest, NextResponse } from 'next/server'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const WooCommerce = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_URL!,
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET!,
  version: 'wc/v3'
})

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    // Create order in WooCommerce with pending status
    const response = await WooCommerce.post('orders', {
      payment_method: orderData.payment_method,
      payment_method_title: orderData.payment_method_title,
      set_paid: false, // Don't mark as paid initially
      billing: orderData.billing,
      shipping: orderData.shipping,
      line_items: orderData.line_items,
      total: orderData.total,
      status: 'pending' // Start with pending status
    })

    return NextResponse.json({
      success: true,
      order: response.data
    })
  } catch (error) {
    console.error('Error creating WooCommerce order:', error)
    return NextResponse.json(
      { error: 'Failed to create WooCommerce order' },
      { status: 500 }
    )
  }
} 