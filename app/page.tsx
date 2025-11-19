import Image from 'next/image'
import Footer from './components/footer'
import Header from './components/header'
import Section1 from './components/section-1'
import Section2 from './components/section-2'
import Section3 from './components/section-3'
import Rating from '@/assets/rating.png'
export default function Home() {
  return (
    <div className='relative'>
      <Header />
      <main className='relative'>
        <Section1 />
        <Section2 />
        <Section3 />
      </main>
      <Footer />
      <Image src={Rating} alt='Rating' className='fixed h-16 w-auto bottom-0 right-0' />
    </div>
  )
}
