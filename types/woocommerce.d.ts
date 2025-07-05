declare module '@woocommerce/woocommerce-rest-api' {
  interface WooCommerceRestApiOptions {
    url: string
    consumerKey: string
    consumerSecret: string
    version: string
  }

  interface OrderData {
    payment_method?: string
    payment_method_title?: string
    set_paid?: boolean
    billing?: {
      first_name: string
      last_name: string
      address_1: string
      city: string
      state: string
      postcode: string
      country: string
      email: string
      phone?: string
    }
    shipping?: {
      first_name: string
      last_name: string
      address_1: string
      city: string
      state: string
      postcode: string
      country: string
    }
    line_items?: Array<{
      product_id: number
      quantity: number
      name: string
      price: number
    }>
    total?: string
    status?: string
    transaction_id?: string
    meta_data?: Array<{
      key: string
      value: string
    }>
  }

  interface OrderResponse {
    id: number
    status: string
    total: string
    [key: string]: any
  }

  interface ApiResponse<T> {
    data: T
    status: number
    statusText: string
  }

  class WooCommerceRestApi {
    constructor(options: WooCommerceRestApiOptions)
    
    post(endpoint: string, data: OrderData): Promise<ApiResponse<OrderResponse>>
    put(endpoint: string, data: OrderData): Promise<ApiResponse<OrderResponse>>
    get(endpoint: string): Promise<ApiResponse<any>>
    delete(endpoint: string): Promise<ApiResponse<any>>
  }

  export = WooCommerceRestApi
} 