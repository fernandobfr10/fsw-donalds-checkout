import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { useCart } from '../contexts/cart'
import { CartProductItem } from './cart-product-item'

export const CartSheet = () => {
  const { isOpen, toogleCart, products } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={toogleCart}>
      <SheetContent className="w-[80%] max-w-[400px]">
        <SheetHeader className="mb-5">
          <SheetTitle className="text-left">Sacola</SheetTitle>
        </SheetHeader>

        <div className="space-y-4">
          {products.map(product => (
            <CartProductItem key={product.id} product={product} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
