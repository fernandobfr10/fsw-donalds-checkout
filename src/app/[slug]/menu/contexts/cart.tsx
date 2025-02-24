'use client'

import type { Product } from '@prisma/client'
import { type ReactNode, createContext, useContext, useState } from 'react'

export interface CartProduct
  extends Pick<Product, 'id' | 'name' | 'price' | 'imageUrl'> {
  quantity: number
}

export interface ICartContext {
  isOpen: boolean
  products: CartProduct[]
  toogleCart: () => void
  addProductToCart: (product: CartProduct) => void
  decreaseProductQuantity: (productId: string) => void
  increaseProductQuantity: (productId: string) => void
  removeProductFromCart: (productId: string) => void
}

const initialState: ICartContext = {
  isOpen: false,
  products: [],
  toogleCart: () => {},
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
}

export const CartContext = createContext<ICartContext>(initialState)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>(initialState.products)
  const [isOpen, setIsOpen] = useState(initialState.isOpen)

  const toogleCart = () => {
    setIsOpen(prevValue => !prevValue)
  }

  const addProductToCart = (product: CartProduct) => {
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

  const decreaseProductQuantity = (productId: string) => {
    setProducts(prevProducts => {
      return prevProducts.map(prevProduct => {
        if (prevProduct.id !== productId) return prevProduct

        if (prevProduct.quantity === 1) return prevProduct

        return {
          ...prevProduct,
          quantity: prevProduct.quantity - 1,
        }
      })
    })
  }

  const increaseProductQuantity = (productId: string) => {
    setProducts(prevProducts => {
      return prevProducts.map(prevProduct => {
        if (prevProduct.id !== productId) return prevProduct

        return {
          ...prevProduct,
          quantity: prevProduct.quantity + 1,
        }
      })
    })
  }

  const removeProductFromCart = (productId: string) => {
    setProducts(prevProducts => {
      return prevProducts.filter(prevProduct => prevProduct.id !== productId)
    })
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        toogleCart,
        addProductToCart,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
