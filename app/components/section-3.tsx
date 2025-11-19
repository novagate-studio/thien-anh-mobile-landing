'use client'
import Bg from '@/assets/home-f5.jpg'
import BgMb from '@/assets/home-f5-mb.jpg'
import Title from '@/assets/title-5.png'
import Image, { StaticImageData } from 'next/image'
import { useState } from 'react'
import Kim from '@/assets/kim_1.png'
import KimActive from '@/assets/kim_2.png'
import Moc from '@/assets/moc_1.png'
import MocActive from '@/assets/moc_2.png'
import Thuy from '@/assets/thuy_1.png'
import ThuyActive from '@/assets/thuy_2.png'
import Hoa from '@/assets/hoa_1.png'
import HoaActive from '@/assets/hoa_2.png'
import Tho from '@/assets/tho_1.png'
import ThoActive from '@/assets/tho_2.png'
import HeadBar from '@/assets/bar_head.png'
import BgChar from '@/assets/bg_char.png'
import tl from '@/assets/tl.png'
import mptl from '@/assets/mp_tl1.png'
import mptlActive from '@/assets/mp_tl2.png'
import mptv from '@/assets/mp_tv1.png'
import mptvActive from '@/assets/mp_tv2.png'
import tv from '@/assets/tv.png'
import dm from '@/assets/dm.png'
import mpdm from '@/assets/mp_dm1.png'
import mpdmActive from '@/assets/mp_dm2.png'
import nd from '@/assets/5d.png'
import mpnd from '@/assets/mp_5d1.png'
import mpndActive from '@/assets/mp_5d2.png'
import mg from '@/assets/mg.png'
import mpg from '@/assets/mp_mg1.png'
import mpgActive from '@/assets/mp_mg2.png'
import nm from '@/assets/nm.png'
import mpnm from '@/assets/mp_nm1.png'
import mpnmActive from '@/assets/mp_nm2.png'
import ty from '@/assets/ty.png'
import mpty from '@/assets/mp_ty1.png'
import mptyActive from '@/assets/mp_ty2.png'
import dt from '@/assets/dt.png'
import mpdt from '@/assets/mp_dt1.png'
import mpdtActive from '@/assets/mp_dt2.png'
import cb from '@/assets/cb.png'
import mpcb from '@/assets/mp_cb1.png'
import mpcbActive from '@/assets/mp_cb2.png'
import tn from '@/assets/tn.png'
import mptn from '@/assets/mp_tn1.png'
import mptnActive from '@/assets/mp_tn2.png'
import vd from '@/assets/vd.png'
import mpvd from '@/assets/mp_vd1.png'
import mpvdActive from '@/assets/mp_vd2.png'
import cl from '@/assets/cl.png'
import mpcl from '@/assets/mp_cl1.png'
import mpclActive from '@/assets/mp_cl2.png'
const charMap: Record<
  string,
  { char: StaticImageData; key: string; active: StaticImageData; inactive: StaticImageData }[]
> = {
  kim: [
    {
      char: tl,
      key: 'tl',
      active: mptlActive,
      inactive: mptl,
    },
    {
      char: tv,
      key: 'tv',
      active: mptvActive,
      inactive: mptv,
    },
  ],
  moc: [
    {
      char: dm,
      key: 'dm',
      active: mpdmActive,
      inactive: mpdm,
    },
    {
      char: nd,
      key: 'nd',
      active: mpndActive,
      inactive: mpnd,
    },
    {
      char: mg,
      key: 'mg',
      active: mpgActive,
      inactive: mpg,
    },
  ],
  thuy: [
    { char: nm, key: 'nm', active: mpnmActive, inactive: mpnm },
    {
      char: ty,
      key: 'ty',
      active: mptyActive,
      inactive: mpty,
    },
    {
      char: dt,
      key: 'dt',
      active: mpdtActive,
      inactive: mpdt,
    },
  ],
  hoa: [
    { char: cb, key: 'cb', active: mpcbActive, inactive: mpcb },
    {
      char: tn,
      key: 'tn',
      active: mptnActive,
      inactive: mptn,
    },
  ],
  tho: [
    {
      char: vd,
      key: 'vd',
      active: mpvdActive,
      inactive: mpvd,
    },
    {
      char: cl,
      key: 'cl',
      active: mpclActive,
      inactive: mpcl,
    },
  ],
}

export default function Section3() {
  const [active, setActive] = useState('kim_tl')

  return (
    <section id="mon-phai" className='relative py-20 w-full'>
      <Image src={Bg} className='absolute hidden lg:block inset-0 h-full w-full object-cover' alt='Backdrop' />
      <Image src={BgMb} className='absolute lg:hidden inset-0 h-full w-full object-cover' alt='Backdrop' />
      <div className='container max-w-4xl w-full relative mx-auto flex flex-col items-center'>
        <Image src={Title} alt='Title' className='w-full max-w-2xl' />
        <div className='relative w-full mt-16 px-4 grid grid-cols-[12%_88%]'>
          <div className='flex flex-col items-center w-full'>
            {/* Kim */}
            <button onClick={() => setActive('kim_tl')} className='relative transition-all hover:scale-110 w-full'>
              <Image
                src={active.includes('kim') ? KimActive : Kim}
                alt='Kim'
                width={120}
                height={120}
                className='w-full h-auto'
              />
            </button>

            {/* Connector Bar */}
            <Image src={HeadBar} alt='Connector' className='w-[4%] -mt-[20%] -mb-[20%]' />

            {/* Moc */}
            <button onClick={() => setActive('moc_dm')} className='relative transition-all hover:scale-110 w-full'>
              <Image
                src={active.includes('moc') ? MocActive : Moc}
                alt='Moc'
                width={120}
                height={120}
                className='w-full h-auto'
              />
            </button>

            {/* Connector Bar */}
            <Image src={HeadBar} alt='Connector' className='w-[4%] -mt-[20%] -mb-[20%]' />

            {/* Thuy */}
            <button onClick={() => setActive('thuy_nm')} className='relative transition-all hover:scale-110 w-full'>
              <Image
                src={active.includes('thuy') ? ThuyActive : Thuy}
                alt='Thuy'
                width={120}
                height={120}
                className='w-full h-auto'
              />
            </button>

            {/* Connector Bar */}
            <Image src={HeadBar} alt='Connector' className='w-[4%] -mt-[20%] -mb-[20%]' />

            {/* Hoa */}
            <button onClick={() => setActive('hoa_cb')} className='relative transition-all hover:scale-110 w-full'>
              <Image
                src={active.includes('hoa') ? HoaActive : Hoa}
                alt='Hoa'
                width={120}
                height={120}
                className='w-full h-auto'
              />
            </button>

            {/* Connector Bar */}
            <Image src={HeadBar} alt='Connector' className='w-[4%] -mt-[20%] -mb-[20%]' />

            {/* Tho */}
            <button onClick={() => setActive('tho_vd')} className='relative transition-all hover:scale-110 w-full'>
              <Image
                src={active.includes('tho') ? ThoActive : Tho}
                alt='Tho'
                width={120}
                height={120}
                className='w-full h-auto'
              />
            </button>
          </div>
          <div className='w-full pl-[10%] flex items-center relative'>
            <Image src={BgChar} alt='' className='w-[75%] h-auto' />
            <Image
              src={charMap[active.split('_')[0]].find((c) => c.key === active.split('_')[1])?.char as StaticImageData}
              alt=''
              className='absolute top-0 left-0 w-[70%] translate-x-1/12 animate-bounce-soft h-auto'
            />
            <div className='absolute top-[23%] left-[72%] w-[27%]'>
              {charMap[active.split('_')[0]].map((c, index) => (
                <Image
                  key={c.key}
                  onClick={() => setActive(`${active.split('_')[0]}_${c.key}`)}
                  src={active.split('_')[1] === c.key ? c.active : c.inactive}
                  alt={c.key}
                  className='w-full h-auto'
                  style={{
                    transform: index == 1 ? `translateX(15%)` : index == 2 ? `translateX(15%)` : undefined,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
