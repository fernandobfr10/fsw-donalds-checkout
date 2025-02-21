'use client'

import type { Product } from '@prisma/client'
import { type ReactNode, createContext, useContext, useState } from 'react'

interface CardProduct
  extends Pick<Product, 'id' | 'name' | 'price' | 'imageUrl'> {
  quantity: number
}

export interface ICartContext {
  isOpen: boolean
  products: CardProduct[]
  toogleCart: () => void
  addProductToCart: (product: CardProduct) => void
}

const initialState: ICartContext = {
  isOpen: false,
  products: [],
  toogleCart: () => {},
  addProductToCart: () => {},
}
export const CartContext = createContext<ICartContext>(initialState)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CardProduct[]>(initialState.products)
  const [isOpen, setIsOpen] = useState(initialState.isOpen)

  const toogleCart = () => {
    setIsOpen(prevValue => !prevValue)
  }

  const addProductToCart = (product: CardProduct) => {
    setProducts(prevProducts => {
      const existingProduct = prevProducts.find(
        cartProduct => cartProduct.id === product.id
      )

      if (!existingProduct) {
        return [...prevProducts, product]
      }

      return prevProducts.map(cartProduct =>
        cartProduct.id === product.id
          ? {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            }
          : cartProduct
      )
    })
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        toogleCart,
        addProductToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
