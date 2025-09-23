"use client"

import Image from "next/image"

interface BannerItemProps {
  src: string
  alt: string
}

const BannerCarouselItem = ({ src, alt }: BannerItemProps) => {
  return (
    <div className="relative mt-6 h-[150px] w-full">
      <Image alt={alt} src={src} fill className="rounded-xl object-cover" />
    </div>
  )
}

export default BannerCarouselItem
