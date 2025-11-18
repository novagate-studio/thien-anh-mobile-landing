'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Slide1 from '@/assets/slide-1.jpg'
import Slide2 from '@/assets/slide-2.png'
import Slide3 from '@/assets/slide-3.png'
import Slide4 from '@/assets/slide-4.jpg'
import Slide1Landscape from '@/assets/slide-1-landscape.png'
import Slide2Landscape from '@/assets/slide-2-landscape.png'
import Slide3Landscape from '@/assets/slide-3-landscape.jpg'
import Slide4Landscape from '@/assets/slide-4-landscape.jpg'
import DotIcon from '@/assets/dot.png'
import ActiveDotIcon from '@/assets/active-dot.png'

export default function NewsCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    { id: 1, image: Slide1, landscapeImage: Slide1Landscape, alt: 'Slide 1' },
    { id: 2, image: Slide2, landscapeImage: Slide2Landscape, alt: 'Slide 2' },
    { id: 3, image: Slide3, landscapeImage: Slide3Landscape, alt: 'Slide 3' },
    { id: 4, image: Slide4, landscapeImage: Slide4Landscape, alt: 'Slide 4' },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className='relative w-full pt-1.5'>
      {/* Carousel Container */}
      <div className='relative aspect-video lg:aspect-auto lg:h-full overflow-hidden'>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}>
            {/* Desktop Image */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              className='object-cover hidden lg:block'
              priority={index === 0}
            />
            {/* Mobile Image */}
            <Image
              src={slide.landscapeImage}
              alt={slide.alt}
              fill
              className='object-cover lg:hidden'
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className='flex absolute bottom-0 translate-y-[200%] left-1/2 -translate-x-1/2 justify-center gap-2 mt-6'>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => goToSlide(index)}
            className='transition-transform hover:scale-110'
            aria-label={`Go to slide ${index + 1}`}>
            <Image
              src={index === currentSlide ? ActiveDotIcon : DotIcon}
              alt={index === currentSlide ? 'Active dot' : 'Dot'}
              width={40}
              height={40}
              className='w-4 h-4'
            />
          </button>
        ))}
      </div>
    </div>
  )
}
