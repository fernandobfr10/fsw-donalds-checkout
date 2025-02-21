'use client'

import type { Prisma } from '@prisma/client'
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { IngredientsList } from './ingredients-list'

import { formatCurrency } from '@/helpers/format-currency'
import { CartSheet } from '../../components/cart-sheet'
import { useCart } from '../../contexts/cart'

interface ProductsDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          avatarImageUrl: true
          name: true
        }
      }
    }
  }>
}

const ProductsDetails = ({ product }: ProductsDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1)

  const { toogleCart, addProductToCart } = useCart()

  const handleDecreaseQuantity = () => {
    if (quantity === 1) return

    setQuantity(prev => prev - 1)
  }

  const handleIncreaseQuantity = () => {
    setQuantity(prev => prev + 1)
  }

  const handleAddToCart = () => {
    addProductToCart({
      ...product,
      quantity,
    })
    toogleCart()
  }

  return (
    <>
      <div className="relative z-50 rounded-t-3xl py-5 mt-[-1.5rem] p-5 flex-auto flex flex-col overflow-hidden">
        <div className="flex-auto overflow-hidden">
          <div className="flex items-center gap-1">
            <Image
              src={product.restaurant.avatarImageUrl}
              alt={product.restaurant.name}
              width={16}
              height={16}
              className="rounded-full"
            />
            <span className="text-xs text-muted-foreground">
              {product.restaurant.name}
            </span>
          </div>

          <h2 className="text-xl font-semibold mt-1">{product.name}</h2>

          <div className="flex justify-between items-center mt-3">
            <h3 className="text-xl font-semibold">
              {formatCurrency(product.price)}
            </h3>

            <div className="flex items-center gap-3 text-center">
              <Button
                variant="outline"
                className="size-8 rounded-xl"
                onClick={handleDecreaseQuantity}
              >
                <ChevronLeftIcon />
              </Button>

              <p className="w-4">{quantity}</p>

              <Button
                variant="destructive"
                className="size-8 rounded-xl"
                onClick={handleIncreaseQuantity}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>

          <ScrollArea className="h-full">
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold">Sobre</h4>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-1">
                <ChefHatIcon size={18} />
                <h4 className="font-semibold">Ingredientes</h4>
              </div>

              <IngredientsList ingredients={product.ingredients} />
            </div>
          </ScrollArea>
        </div>

        <Button className="rounded-full w-full mt-5" onClick={handleAddToCart}>
          Adicionar à sacola
        </Button>
      </div>

      <CartSheet />
    </>
  )
}

export default ProductsDetails
