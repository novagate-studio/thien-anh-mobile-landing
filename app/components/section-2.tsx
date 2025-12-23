'use client'
import BgF3 from '@/assets/home-f3.jpg'
import BgF3Mb from '@/assets/home-f3-mb.jpg'
import Title3 from '@/assets/title-3.png'
import Image from 'next/image'
import { useState } from 'react'
import Box from '@/assets/box.png'
import BoxActive from '@/assets/box-active.png'
import Tag from '@/assets/tag.png'
const items = [
  {
    title: 'Đồ hoạ',
    longTitle: 'Giang hồ đoàn viên',
    video: '/assets/videos/vid1.mp4',
  },
  {
    title: 'Cảnh vật',
    longTitle: 'Giang hồ đoàn viên',
    video: '/assets/videos/vid1.mp4',
  },
  {
    title: 'Thời tiết',
    longTitle: 'Giang hồ đoàn viên',
    video: '/assets/videos/vid1.mp4',
  },
  {
    title: 'Kỳ ngộ',
    longTitle: 'Giang hồ đoàn viên',
    video: '/assets/videos/vid1.mp4',
  },
  {
    title: 'Số phận',
    longTitle: 'Giang hồ đoàn viên',
    video: '/assets/videos/vid1.mp4',
  },
  {
    title: 'Dị dung',
    longTitle: 'Giang hồ đoàn viên',
    video: '/assets/videos/vid1.mp4',
  },
]
export default function Section2() {
  const [active, setActive] = useState(0)
  return (
    <section id='huong-dan' className='relative py-20 w-full'>
      {/* <Image src={BgF3} className='absolute hidden lg:block inset-0 h-full w-full object-cover' alt='Backdrop' />
      <Image src={BgF3Mb} className='absolute lg:hidden inset-0 h-full w-full object-cover' alt='Backdrop' /> */}
      <div className='max-w-[1980px] w-full relative mx-auto flex flex-col items-center'>
        <Image src={Title3} alt='Title' className='w-full max-w-2xl' />
        <h1 className='hidden'>Giang hồ đặc sắc</h1>
        <div className='relative w-full mt-8 space-y-10'>
          <video src={items[active].video} autoPlay loop muted className='w-full aspect-video' />
          <div className='grid grid-cols-3 px-4 md:grid-cols-6 gap-4 lg:hidden'>
            {items.map((item, index) => (
              <button
                key={index}
                style={{
                  backgroundImage: active === index ? `url(${BoxActive.src})` : `url(${Box.src})`,
                  backgroundSize: '100% 100%',
                }}
                className={`px-4 py-2 font-serif text-lg  cursor-pointer font-bold text-white`}
                onClick={() => setActive(index)}>
                {item.title}
              </button>
            ))}
          </div>
          <div className='hidden lg:flex absolute top-0 left-0 translate-x-10'>
            {items.map((item, index) => (
              <button
                key={index}
                style={{
                  transform: active === index ? `translateY(-20px)` : `translateY(-60px)`,
                }}
                className={`px-2 font-serif text-lg transition-all cursor-pointer font-bold text-white`}
                onClick={() => setActive(index)}>
                <Image src={Tag} alt='' className='w-16' />
                <div className='absolute bottom-14 flex items-center flex-col justify-center left-1/2 -translate-x-1/2 uppercase text-xs text-center'>
                  {item.longTitle.split(' ').map((word, idx) => (
                    <div key={idx}>{word}</div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
