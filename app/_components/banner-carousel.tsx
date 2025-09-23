"use client"

import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import BannerCarouselItem from "./banner-carousel-item"

const BannerCarousel = () => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent>
        <CarouselItem>
          <BannerCarouselItem
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
          />
        </CarouselItem>
        <CarouselItem>
          <BannerCarouselItem
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
          />
        </CarouselItem>
        <CarouselItem>
          <BannerCarouselItem
            src="/banner-01.png"
            alt="Agende nos melhores com FSW Barber"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  )
}

export default BannerCarousel
