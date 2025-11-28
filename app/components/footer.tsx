import Image from 'next/image';
import Backdrop from '@/assets/bottom-footer.jpg';
export default function Footer() {
  return (
    <footer id='ho-tro' className='w-full font-serif relative text-black p-3'>
      <Image src={Backdrop} className='absolute inset-0 h-full w-full object-cover' alt='Backdrop' />
      <div className='relative w-full flex flex-col items-center text-center py-10'>
        <h1>CÔNG TY CỔ PHẦN NOVAGATE</h1>
        <h2>NOVAGATE STUDIO</h2>
        {/* <div>
          Giấy phép cung cấp dịch vụ trò chơi điện tử G1 trên mạng số: 405/GP-BTTTT do Bộ Thông tin và Truyền thông cấp
          ngày 10/08/2022
        </div>
        <div>
          Quyết định phê duyệt nội dung kịch bản trò chơi Thiên Ảnh Mobile số 09/QĐ-BTTTT do Bộ Thông tin và Truyền
          thông cấp ngày 06/01/2023
        </div> */}
        <div>Địa chỉ trụ sở chính: Số 7, ngõ 1 đường Địa Đạo, Thôn Vệ, Xã Phúc Thịnh, Thành phố Hà Nội, Việt Nam</div>
        <div>Copyright © 2025 NOVAGATE STUDIO</div>
      </div>
    </footer>
  )
}