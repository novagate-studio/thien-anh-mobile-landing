'use client'
import ArticleBackground from '@/assets/images/article-background.png'
import ArticleContentBackground from '@/assets/images/article-content-background.png'
import { Article } from '@/models/article'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

export default function Page() {
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
  return (
    <div>
      <Header />
      <div className='relative w-full bg-[#e0d0bd]'>
        <Image
          src={ArticleBackground}
          alt='Article Background'
          className='w-full h-screen object-cover hidden lg:block'
        />
        <div className='relative w-full max-w-4xl mx-auto lg:-mt-[40vh] p-3 bg-white'>
          <Image
            src={ArticleContentBackground}
            alt='Article Content Background'
            className='w-full h-auto absolute hidden lg:block inset-x-0 top-0'
          />
          <div className='relative py-2'>
            <div className='text-black uppercase text-4xl font-bold text-center w-full'>Tin tức</div>
            <div className='mt-6'>
              {articles.map((article) => (
                <Link
                  href={`/${article.slug}`}
                  key={article.id}
                  className='flex relative items-start h-32 p-2 lg:p-2.5 gap-4 border-b border-zinc-600 last:border-0'>
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
      <Footer />
    </div>
  )
}
