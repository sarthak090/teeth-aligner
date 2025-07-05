'use client'

import LayoutOne from '@/components/shared/LayoutOne'
import { useCartStore } from '@/store/cartStore'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Toaster } from 'sonner'

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCartStore()
  const router = useRouter()
  if (items.length === 0) {
    return (
      <LayoutOne>
        <div className="mx-auto max-w-7xl px-4 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Your Cart is Empty</h1>
            <p className="mt-4 text-gray-600">Add some items to your cart to see them here.</p>
            <Link
              href="/product/in-clinic-package-one"
              className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </LayoutOne>
    )
  }

  return (
    <LayoutOne>
      <Toaster position="top-right" />
      <div className="mx-auto max-w-7xl px-4 py-24">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">Shopping Cart</h1>
        
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {items.map((item) => (
              <div key={item.id} className="mb-6 flex items-center gap-4 rounded-lg border p-4">
                {item.image && (
                  <div className="relative h-24 w-24">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="rounded-md object-cover"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                  <div className="mt-2 flex items-center gap-4">
                    <select
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                      className="rounded-md border p-1"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-lg border p-6">
            <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="my-4 border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${totalPrice().toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                // Handle checkout
                router.push('/checkout')
              }}
              className="mt-6 w-full rounded-md bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </LayoutOne>
  )
} 