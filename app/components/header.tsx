'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/assets/logo.png'
import TaiGame from '@/assets/tai_game.png'
import DangKy from '@/assets/dang_ky.png'
export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const menuItems = [
    { label: 'TIN TỨC', href: '#tin-tuc' },
    { label: 'SỰ KIỆN', href: '#su-kien' },
    { label: 'HƯỚNG DẪN', href: '#huong-dan' },
    { label: 'MÔN PHÁI', href: '#mon-phai' },
    { label: 'HỖ TRỢ', href: '#ho-tro' },
    { label: 'CỘNG ĐỒNG', href: '#cong-dong' },
  ]

  return (
    <header className='bg-[#26282d] border-b border-zinc-700 font-serif sticky top-0 z-50 w-screen'>
      <div className=''>
        <div className='px-3'>
          <div className='flex items-center justify-between h-24 relative'>
            {/* Logo */}
            <div className='shrink-0'>
              <Link href='/' className='relative flex items-start'>
                <Image src={Logo} alt='Game Logo' className='object-contain h-20 w-auto' priority />
              </Link>
            </div>

            {/* Navigation Menu */}
            <nav className='hidden xl:flex absolute top-1/2 left-1/2 w-full justify-center -translate-y-1/2 -translate-x-1/2 items-center divide-x divide-[#d4c5a0]'>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className='text-[#d4c5a0] hover:text-white px-5 transition-colors duration-200 text-base font-medium tracking-wider'>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className='flex items-center gap-4 shrink-0'>
              <Link href={'https://id.novagate.vn'} target='_blank'>
                <Image src={DangKy} alt='Dang Ky' className='h-8 md:h-10 w-auto' />
              </Link>
              <Image src={TaiGame} alt='Tai Game' className='h-8 md:h-10 w-auto' />
              {/* Mobile Menu Button */}
              <button
                className='xl:hidden text-[#d4c5a0] hover:text-white'
                aria-label='Toggle menu'
                aria-expanded={isMobileOpen}
                onClick={() => setIsMobileOpen((prev) => !prev)}>
                <svg
                  className='w-8 h-8'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav
            className={`xl:hidden origin-top transform transition-all duration-300 ease-out ${
              isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}>
            <div className='flex flex-col gap-2 py-4 border-t border-zinc-700'>
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-[#d4c5a0] hover:text-white transition-colors duration-200 font-medium tracking-wide'
                  onClick={() => setIsMobileOpen(false)}>
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
