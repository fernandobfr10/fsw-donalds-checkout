import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/helpers/format-currency'
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from 'lucide-react'
import Image from 'next/image'
import { type CartProduct, useCart } from '../contexts/cart'

interface CartProductItem {
  product: CartProduct
}

export const CartProductItem = ({ product }: CartProductItem) => {
  const {
    decreaseProductQuantity,
    increaseProductQuantity,
    removeProductFromCart,
  } = useCart()

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative w-20 h-20 bg-gray-100 rounded-xl">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-contain"
            />
          </div>
          <div className="space-y-1">
            <p className="text-xs max-w-[90%] truncate">{product.name}</p>
            <p className="text-sm font-semibold">
              {formatCurrency(product.price)}
            </p>
            <div className="flex items-center gap-1 text-center">
              <Button
                className="size-7 rounded-lg"
                variant="outline"
                onClick={() => decreaseProductQuantity(product.id)}
              >
                <ChevronLeftIcon />
              </Button>
              <p className="text-xs w-7">{product.quantity}</p>
              <Button
                className="size-7 rounded-lg"
                variant="destructive"
                onClick={() => increaseProductQuantity(product.id)}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
        </div>
        <Button
          variant="outline"
          className="size-7 rounded-lg"
          onClick={() => removeProductFromCart(product.id)}
        >
          <TrashIcon />
        </Button>
      </div>
    </div>
  )
}
