import { useCartStore } from '@/store/cartStore'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function CartIcon() {
  const totalItems = useCartStore((state) => state.totalItems())

  return (
    <Link href="/cart" className="relative">
      <ShoppingCart className="h-6 w-6" />
      {totalItems > 0 && (
        <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white">
          {totalItems}
        </span>
      )}
    </Link>
  )
} 