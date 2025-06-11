'use client'

import { useCartStore } from '@/store/cartStore'
import { toast } from 'sonner'
import RevealWrapper from '@/components/animation/RevealWrapper'

interface ProductActionsProps {
  productId: string
  productName: string
  price: number
}

export default function ProductActions({ productId, productName, price }: ProductActionsProps) {
  const handleAddToCart = () => {
    try {
      useCartStore.getState().addItem({
        id: productId,
        name: productName,
        price: price,
        quantity: 1,
      })
      toast.success('Item added to cart successfully!')
    } catch (error) {
      toast.error('Failed to add item to cart')
    }
  }

  return (
    <RevealWrapper className="reveal-me mt-7 md:mt-14">
      <button
        onClick={handleAddToCart}
        className="rv-button rv-button-secondary mt-10 w-full"
      >
        <div className="rv-button-top !w-full !text-center">
          <span className="!font-normal">Add to Cart</span>
        </div>
        <div className="rv-button-bottom !w-full !text-center">
          <span className="!font-normal">Add to Cart</span>
        </div>
      </button>
    </RevealWrapper>
  )
} 