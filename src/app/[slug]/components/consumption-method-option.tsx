import Image from 'next/image'
import Link from 'next/link'

import type { ConsumptionMethod } from '@prisma/client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

interface ConsumptionMethodOptionProps {
  imageUrl: string
  imageAlt: string
  buttonText: string
  option: ConsumptionMethod
  slug: string
}

export const ConsumptionMethodOption = ({
  imageUrl,
  imageAlt,
  buttonText,
  option,
  slug,
}: ConsumptionMethodOptionProps) => {
  return (
    <Card>
      <CardContent className="flex flex-col items-center gap-8 py-8">
        <div className="relative h-[80px] w-[80px]">
          <Image
            className="object-contain"
            src={imageUrl}
            alt={imageAlt}
            width={78}
            height={80}
          />
        </div>
        <Button variant="secondary" className="rounded-full" asChild>
          <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
