import type { Metadata } from 'next'
import { Roboto, Spectral } from 'next/font/google'
import './globals.css'

const serifFont = Spectral({
  variable: '--font-spectral',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const sansFont = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Thiên Ảnh Mobile - Kiếm Hiệp Nhập Vai MMORPG',
  description:
    'Trải nghiệm thế giới kiếm hiệp chân thực và sống động với Thiên Ảnh Mobile. Hành trình giang hồ đầy kịch tính, hệ thống môn phái đa dạng, và những trận chiến PvP đỉnh cao đang chờ bạn khám phá!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${sansFont.className} ${serifFont.variable} antialiased bg-[#e0d3bf]`}>{children}</body>
    </html>
  )
}
