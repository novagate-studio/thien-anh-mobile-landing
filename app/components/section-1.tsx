import Backdrop from '@/assets/backdrop.jpg'
import BgNew from '@/assets/bg-news.png'
import Event1 from '@/assets/slide-1-landscape.png'
import Event2 from '@/assets/slide-2-landscape.png'
import Event3 from '@/assets/slide-3-landscape.jpg'
import Event4 from '@/assets/slide-4-landscape.jpg'
import Title2 from '@/assets/title-2.png'
import Image from 'next/image'
import Link from 'next/link'
import NewsCarousel from './news-carousel'
const events = [
  {
    id: 1,
    image: Event1,
    title: 'Sự kiện Vòng Quay May Mắn Tháng 11 | Kiếm Thiên Mobile 1',
    description:
      'Tham gia ngay Vòng Quay May Mắn Tháng 11 để không bỏ lỡ cơ hội nhận ngay những trang bị cực phẩm, gia tăng sức mạnh và chinh phục mọi thử thách tại Kiếm Thiên Mobile! 1 description',
    date: '11/11/2025',
  },
  {
    id: 2,
    image: Event2,
    title: 'Sự kiện Vòng Quay May Mắn Tháng 11 | Kiếm Thiên Mobile 2',
    description:
      'Tham gia ngay Vòng Quay May Mắn Tháng 11 để không bỏ lỡ cơ hội nhận ngay những trang bị cực phẩm, gia tăng sức mạnh và chinh phục mọi thử thách tại Kiếm Thiên Mobile! 2 description',
    date: '12/12/2025',
  },
  {
    id: 3,
    image: Event3,
    title: 'Sự kiện Vòng Quay May Mắn Tháng 11 | Kiếm Thiên Mobile 3',
    description:
      'Tham gia ngay Vòng Quay May Mắn Tháng 11 để không bỏ lỡ cơ hội nhận ngay những trang bị cực phẩm, gia tăng sức mạnh và chinh phục mọi thử thách tại Kiếm Thiên Mobile! 3 description',
    date: '01/01/2026',
  },
  {
    id: 4,
    image: Event4,
    title: 'Sự kiện Vòng Quay May Mắn Tháng 11 | Kiếm Thiên Mobile 4',
    description:
      'Tham gia ngay Vòng Quay May Mắn Tháng 11 để không bỏ lỡ cơ hội nhận ngay những trang bị cực phẩm, gia tăng sức mạnh và chinh phục mọi thử thách tại Kiếm Thiên Mobile! 4 description',
    date: '02/02/2026',
  },
]
export default function Section1() {
  return (
    <section className='relative'>
      <Image src={Backdrop} className='absolute inset-0 h-full w-full object-cover' alt='Backdrop' />
      <div className='container relative mx-auto flex flex-col items-center p-3 md:p-0 md:pb-20'>
        <Image src={Title2} alt='Title' className='w-full max-w-2xl' />
        <h1 className='hidden'>Bố cáo Thiên Hạ</h1>
        <div className='mt-8 w-full grid grid-cols-1 gap-20 lg:gap-6 lg:grid-cols-[458px_1fr]'>
          <NewsCarousel />
          <div className='relative w-full'>
            <Image src={BgNew} alt='Background News' fill className='' />
            <div className='h-24 relative font-serif flex justify-end text-3xl px-5 items-center font-bold text-white'>
              <Link href='/tin-tuc'>{`Xem Thêm >>`}</Link>
            </div>
            <div className='relative pb-2.5 text-black'>
              {events.map((event) => (
                <div
                  key={event.id}
                  className='flex relative items-start h-32 p-2 lg:px-4 gap-4 border-b border-zinc-600 last:border-0'>
                  <Image src={event.image} alt={event.title} className='h-full w-auto shrink-0' />
                  <div className=''>
                    <h3 className='text-lg font-semibold leading-tight line-clamp-2'>
                      <span className='text-red-700 mr-1 '>[ Sự kiện ]</span>
                      {event.title}
                    </h3>
                    <p className='line-clamp-2 leading-tight'>{event.description}</p>
                    <div className='absolute bottom-1 right-4 text-sm text-gray-600'>{event.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
