import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

const WooCommerce = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_URL!,
  consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET!,
  version: 'wc/v3'
})

export interface WooCommerceProduct {
  id: number
  name: string
  price: string
  description: string
  images: Array<{
    src: string
    alt: string
  }>
  categories: Array<{
    id: number
    name: string
  }>
}

export interface WooCommerceOrder {
  id?: number
  payment_method: string
  payment_method_title: string
  set_paid: boolean
  billing: {
    first_name: string
    last_name: string
    address_1: string
    city: string
    state: string
    postcode: string
    country: string
    email: string
    phone: string
  }
  shipping: {
    first_name: string
    last_name: string
    address_1: string
    city: string
    state: string
    postcode: string
    country: string
  }
  line_items: Array<{
    product_id: string
    quantity: number
    name: string
    price: number
  }>
  total: string
  status: string
}

export const getWooCommerceProducts = async (): Promise<WooCommerceProduct[]> => {
  try {
    const response = await WooCommerce.get('products', {
      per_page: 100,
      status: 'publish'
    })
    return response.data
  } catch (error) {
    console.error('Error fetching WooCommerce products:', error)
    return []
  }
}

export const getWooCommerceProduct = async (id: number): Promise<WooCommerceProduct | null> => {
  try {
    const response = await WooCommerce.get(`products/${id}`)
    return response.data
  } catch (error) {
    console.error('Error fetching WooCommerce product:', error)
    return null
  }
}

export const createWooCommerceOrder = async (orderData: WooCommerceOrder) => {
  try {
    const response = await WooCommerce.post('orders', orderData)
    return response.data
  } catch (error) {
    console.error('Error creating WooCommerce order:', error)
    throw error
  }
}

export const updateWooCommerceOrder = async (orderId: number, orderData: Partial<WooCommerceOrder>) => {
  try {
    const response = await WooCommerce.put(`orders/${orderId}`, orderData)
    return response.data
  } catch (error) {
    console.error('Error updating WooCommerce order:', error)
    throw error
  }
}

export const getWooCommerceOrder = async (orderId: number) => {
  try {
    const response = await WooCommerce.get(`orders/${orderId}`)
    return response.data
  } catch (error) {
    console.error('Error fetching WooCommerce order:', error)
    return null
  }
} 