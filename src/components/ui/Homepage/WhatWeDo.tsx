"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import DisasterIcon from "@/assets/icons/disaster";
import EducationIcon from "@/assets/icons/education";
import FoodIcon from "@/assets/icons/food";
import MedicalIcon from "@/assets/icons/medical";
import ShelterIcon from "@/assets/icons/shelter";
import WaterIcon from "@/assets/icons/water";
import AnimalIcon from "@/assets/icons/animal";

const options = [
  {
    "title": "Food Distribution",
    "description": "Providing nutritious meals to combat hunger in local communities.",
    "icon": FoodIcon,
  },
  {
    "title": "Education Support",
    "description": "Empowering children through education, scholarships, and school supplies assistance.",
    "icon": EducationIcon,
  },
  {
    "title": "Medical Aid",
    "description": "Offering healthcare services, medications, and medical equipment to those in need.",
    "icon": MedicalIcon,
  },
  {
    "title": "Clean Water",
    "description": "Providing access to clean and safe drinking water in impoverished areas.",
    "icon": WaterIcon,
  },
  {
    "title": "Shelter Assistance",
    "description": "Supporting homeless individuals with temporary and permanent housing solutions.",
    "icon": ShelterIcon,
  },
  {
    "title": "Disaster Relief",
    "description": "Rapidly responding to natural disasters, providing aid, and rebuilding affected communities.",
    "icon": DisasterIcon,
  },
  {
    "title": "Animal Welfare",
    "description": "Advocating for animal rights, rescuing and rehabilitating animals in distress.",
    "icon": AnimalIcon,
  }
]

const WhatWeDo = () => {
  const swiperRef = useRef<any>();

  return (
    <div>
      <div className='flex justify-between pb-8'>
        <div>
          <p className='text-lg font-semibold text-primary mb-2'>What We Do</p>
          <h6 className='text-3xl md:text-4xl'>We Work To Make<br className='mb-1' /><span className='font-bold'>The World A Better Place</span></h6>
        </div>
        <div className='flex gap-3 self-end'>
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="btn border-primary border-2 bg-white text-primary hover:text-white hover:bg-primary"
          >
            <FaAngleLeft className='text-3xl' />
          </button>
          <button
            onClick={() => swiperRef.current.slideNext()}
            className="btn border-primary border-2 bg-white text-primary hover:text-white hover:bg-primary"
          >
            <FaAngleRight className='text-3xl' />
          </button>
        </div>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        // navigation={true}
        // pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {
          options?.map((item) => (
            <SwiperSlide key={item?.title}>
              <div className='h-80 flex flex-col items-center border-primary border-2 text-center p-8 md:py-12 gap-3 cursor-default rounded-lg hover:bg-primary hover:text-white transition-all duration-500 group/slide'>
                {item?.icon ? <item.icon height={80} className='fill-current text-primary group-hover/slide:text-white transition-all duration-500' /> : null}
                <p className='text-2xl font-semibold'>{item?.title}</p>
                <p>{item?.description}</p>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default WhatWeDo;