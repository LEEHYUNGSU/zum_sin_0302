"use client"
import { Pagination } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'
import Img1 from '@/public/home/c1.jpg'
import Img2 from '@/public/home/c2.jpg'
import Img3 from '@/public/home/c3.jpg'
import Img4 from '@/public/home/c6.jpg'
import Image, { StaticImageData } from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';


export const HCTopArr: StaticImageData[] = [
  Img2,
  Img3,
  Img4,
  Img4,
  Img4,
]


const HomeTopCar = () => {
  return (
    <div className="w-full mt-5 flex items-center justify-center h-auto pl-4 pr-4">
      <div className="w-full h-[24vh] rounded-lg overflow-hidden relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          loop={false}
          className='w-full bg-amber-100 h-full custom-swiper relative'
          autoHeight={false}
          pagination={{
            dynamicBullets: true,
          }}          
        >
          {HCTopArr.map((data, idx) => (
            <SwiperSlide key={idx} className='h-full absolute w-full'>
              <Image className='h-full w-full object-cover' src={data} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeTopCar;


// bg-gradient-to-b from-cyan-500 to-pink-500 rounded-lg