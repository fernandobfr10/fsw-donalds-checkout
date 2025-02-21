import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

import { useCart } from '../contexts/cart'

const CartSheet = () => {
  const { isOpen, toogleCart, products } = useCart()

  return (
    <Sheet open={isOpen} onOpenChange={toogleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Teste</SheetTitle>
          <SheetDescription>This action cannot be undone.</SheetDescription>
        </SheetHeader>

        {products.map(product => (
          <h1 key={product.id}>
            {product.name} - {product.quantity}
          </h1>
        ))}
      </SheetContent>
    </Sheet>
  )
}

export { CartSheet }
