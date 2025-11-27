import ArticleBackground from '@/assets/images/article-background.png'
import ArticleContentBackground from '@/assets/images/article-content-background.png'
import type { Metadata } from 'next'
import Image from 'next/image'
import Content from './components/content'
import Header from '../components/header'
import Footer from '../components/footer'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug

  // fetch post information
  const post = await fetch(`https://api.novagate.vn/api/v2/articles/${slug}`).then((res) =>
    res.json().then((data) => data.data)
  )

  return {
    title: post.title || '404 Not Found',
    description: post.description || 'Bài viết không tồn tại',
  }
}
export default async function Page({ params }: Props) {
  const slug = (await params).slug

  // fetch post information
  const post = await fetch(`https://api.novagate.vn/api/v2/articles/${slug}`).then((res) =>
    res.json().then((data) => data.data)
  )
  return (
    <div>
      <Header />
      <div className='relative w-full article'>
        <Image
          src={ArticleBackground}
          alt='Article Background'
          className='w-full h-screen object-cover hidden lg:block'
        />
        <div className='relative w-full max-w-4xl mx-auto lg:-mt-[40vh] p-3'>
          <Image
            src={ArticleContentBackground}
            alt='Article Content Background'
            className='w-full h-auto absolute hidden lg:block inset-x-0 top-0'
          />
          <div className='relative px-4 py-2'>
            <div className='text-black uppercase text-4xl font-bold text-center w-full'>{post?.tags}</div>
            <div className='mt-10'>
              <h1 className='font-bold text-center mb-6 text-red-500 border-b border-dashed border-red-500'>
                {post?.title}
              </h1>
              <Content />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
