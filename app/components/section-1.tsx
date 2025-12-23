'use client'
import Backdrop from '@/assets/backdrop.jpg'
import BgNew from '@/assets/bg-news.png'
import BackdropMobile from '@/assets/home-f2-mb.jpg'
import Title2 from '@/assets/title-2.png'
import { Article } from '@/models/article'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import DotIcon from '@/assets/dot.png'
import ActiveDotIcon from '@/assets/active-dot.png'
export default function Section1() {
  const [articles, setArticles] = useState<Article[]>([])
  const fetchPosts = async () => {
    const res = await fetch('https://api.novagate.vn/api/v2/articles', { cache: 'no-store' })
    const data = await res.json()
    setArticles(data.data || [])
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchPosts()
  }, [])

  const [currentSlide, setCurrentSlide] = useState(0)

  const length = articles.length > 8 ? 8 : articles.length

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % length)
    }, 5000)

    return () => clearInterval(timer)
  }, [length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id='tin-tuc' className='relative'>
      {/* <Image src={Backdrop} className='absolute inset-0 hidden lg:block h-full w-full object-cover' alt='Backdrop' />
      <Image src={BackdropMobile} className='absolute inset-0 lg:hidden h-full w-full object-cover' alt='Backdrop' /> */}
      <div className='container relative mx-auto flex flex-col items-center p-3 md:p-0 md:pb-20'>
        <Image src={Title2} alt='Title' className='w-full max-w-2xl' />
        <h1 className='hidden'>Bố cáo Thiên Hạ</h1>
        <div className='mt-8 w-full grid grid-cols-1 gap-20 lg:gap-6 lg:grid-cols-[458px_1fr]'>
          <div className='relative w-full pt-1.5'>
            {/* Carousel Container */}
            <div className='relative aspect-video lg:aspect-auto lg:h-full overflow-hidden'>
              {articles.slice(0, 8).map((article, index) => (
                <div
                  key={article.id}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}>
                  {/* Desktop Image */}
                  <Image
                    src={article.banner}
                    alt={article.title}
                    fill
                    className='object-cover hidden lg:block'
                    priority={index === 0}
                  />
                  {/* Mobile Image */}
                  <Image
                    src={article.thumbnail}
                    alt={article.title}
                    fill
                    className='object-cover lg:hidden'
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className='flex absolute bottom-0 translate-y-[200%] left-1/2 -translate-x-1/2 justify-center gap-2 mt-6'>
              {articles.slice(0, 8).map((article, index) => (
                <button
                  key={article.id}
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
          <div className='relative w-full'>
            <Image src={BgNew} alt='Background News' fill className='' />
            <div className='h-24 relative font-serif flex justify-end text-3xl px-5 items-center font-bold text-white'>
              <Link href='/tin-tuc'>{`Xem Thêm >>`}</Link>
            </div>
            <div className='relative pb-2.5 text-black'>
              {articles.slice(0, 4).map((article) => (
                <Link
                  href={`/${article.slug}`}
                  key={article.id}
                  className='flex relative items-start h-32 p-2 lg:px-4 gap-4 border-b border-zinc-600 last:border-0'>
                  <Image
                    width={500}
                    height={500}
                    src={article.thumbnail}
                    alt={article.title}
                    className='h-full w-52 object-cover shrink-0'
                  />
                  <div className=''>
                    <h3 className='text-lg font-semibold leading-tight line-clamp-2'>
                      <span className='text-red-700 mr-1 uppercase'>[ {article.tags}]</span>
                      {article.title}
                    </h3>
                    <p className='line-clamp-2 leading-tight'>{article.description}</p>
                    <div className='absolute bottom-1 right-4 md:right-6 text-sm text-gray-600'>
                      {moment(article.created_at).format('DD/MM/YYYY')}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
