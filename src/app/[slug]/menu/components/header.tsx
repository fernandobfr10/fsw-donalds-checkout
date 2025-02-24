'use client'

import type { Restaurant } from '@prisma/client'
import { ChevronLeftIcon, ScrollTextIcon } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface RestaurantMenuHeaderProps {
  restaurant: Pick<Restaurant, 'coverImageUrl' | 'name'>
}

export const RestaurantMenuHeader = ({
  restaurant,
}: RestaurantMenuHeaderProps) => {
  const router = useRouter()

  const handleGoBack = () => router.back()

  return (
    <div className="relative h-[250px] w-full">
      <Button
        variant="secondary"
        size="icon"
        className="absolute top-4 left-4 rounded-full z-50"
        onClick={handleGoBack}
      >
        <ChevronLeftIcon />
      </Button>

      <Image
        className="object-cover"
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
      />

      <Button
        variant="secondary"
        size="icon"
        className="absolute top-4 right-4 rounded-full z-50"
      >
        <ScrollTextIcon />
      </Button>
    </div>
  )
}
