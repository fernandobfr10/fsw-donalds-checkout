import { notFound } from 'next/navigation'

import { db } from '@/lib/prisma'
import { ProductsDetails } from './components/products-details'
import { ProductsHeader } from './components/products-header'

interface ProductPageProps {
  params: Promise<{
    slug: string
    productId: string
  }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params

  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      restaurant: {
        select: {
          slug: true,
          avatarImageUrl: true,
          name: true,
        },
      },
    },
  })

  if (!product) {
    return notFound()
  }

  if (product.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
    return notFound()
  }

  return (
    <div className="h-full flex flex-col">
      <ProductsHeader product={product} />

      <ProductsDetails product={product} />
    </div>
  )
}

export default ProductPage
