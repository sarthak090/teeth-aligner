'use server'

import { createWooCommerceOrder, getWooCommerceProducts, getWooCommerceProduct } from '@/utils/woocommerce'
import { WooCommerceOrder } from '@/utils/woocommerce'

export const syncWooCommerceProducts = async () => {
  try {
    const products = await getWooCommerceProducts()
    return { success: true, products }
  } catch (error) {
    console.error('Error syncing WooCommerce products:', error)
    return { success: false, error: 'Failed to sync products' }
  }
}

export const getWooCommerceProductById = async (id: number) => {
  try {
    const product = await getWooCommerceProduct(id)
    return { success: true, product }
  } catch (error) {
    console.error('Error fetching WooCommerce product:', error)
    return { success: false, error: 'Failed to fetch product' }
  }
}

export const createOrder = async (orderData: WooCommerceOrder) => {
  try {
    const order = await createWooCommerceOrder(orderData)
    return { success: true, order }
  } catch (error) {
    console.error('Error creating order:', error)
    return { success: false, error: 'Failed to create order' }
  }
} 