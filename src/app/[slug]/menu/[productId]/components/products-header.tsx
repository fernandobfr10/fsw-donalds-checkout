'use client'

import type { Product } from '@prisma/client'
import { ChevronLeftIcon, ScrollTextIcon } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface ProductsHeaderProps {
  product: Pick<Product, 'imageUrl' | 'name'>
}

const ProductsHeader = ({ product }: ProductsHeaderProps) => {
  const router = useRouter()

  const handleGoBack = () => router.back()

  return (
    <div className="relative h-[300px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-4 left-4 rounded-full z-50 bg-gray-100"
        onClick={handleGoBack}
      >
        <ChevronLeftIcon />
      </Button>

      <Button
        variant="secondary"
        size="icon"
        className="absolute top-4 right-4 rounded-full z-50 bg-gray-100"
      >
        <ScrollTextIcon />
      </Button>
      <Image
        src={product.imageUrl}
        alt={product.name}
        fill
        className="object-contain"
      />
    </div>
  )
}

export default ProductsHeader
