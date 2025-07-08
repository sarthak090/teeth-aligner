'use client'

import { useCartStore } from '@/store/cartStore'
import { toast } from 'sonner'
import RevealWrapper from '@/components/animation/RevealWrapper'
import { useRouter } from 'next/navigation'

interface ProductActionsProps {
  productId: string
  productName: string
  price: number
}

export default function ProductActions({ productId, productName, price }: ProductActionsProps) {
  const router = useRouter()

  const handleAddToCart = () => {
    try {
      const cartStore = useCartStore.getState()
      const existingItem = cartStore.items.find(item => item.id === productId)
      
      if (existingItem) {
        toast.info('This item is already in your cart!')
        router.push('/cart')
        return
      }

      cartStore.addItem({
        id: productId,
        name: productName,
        price: price,
        quantity: 1,
      })
      toast.success('Item added to cart successfully!')
      // Redirect to cart page after adding item
      router.push('/cart')
    } catch (error) {
      toast.error('Failed to add item to cart')
    }
  }

  return (
    < div className="reveal-me mt-7 md:mt-14">
      <button
        onClick={handleAddToCart}
        className="rv-button rv-button-secondary mt-10 w-full"
      >
        <div className="rv-button-top !w-full !text-center">
          <span className="!font-normal">Order Now</span>
        </div>
        <div className="rv-button-bottom !w-full !text-center">
          <span className="!font-normal">Order Now</span>
        </div>
      </button>
    </ div>
  )
} 