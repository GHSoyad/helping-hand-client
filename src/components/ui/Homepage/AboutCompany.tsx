import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import stars from "@/assets/stars.png";


const AboutCompany = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
      <div className='relative min-h-80'>
        <Image
          src={"https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          alt={"Children"}
          fill={true}
          className='px-4 md:px-0 object-cover'
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw"
        />
      </div>
      <div className='md:pl-8 relative'>
        <div className='absolute bottom-20 md:-top-2 right-10'>
          <Image
            src={stars}
            alt={"Stars"}
            width={100}
            height={100}
          ></Image>
        </div>
        <p className='text-lg font-semibold text-primary mb-2'>About Company</p>
        <h6 className='text-3xl md:text-4xl font-bold mb-3'>Rise Your Hand To Help <br className='mb-1' /> The Poor Children</h6>
        <p className='text-gray-500 text-justify mb-8'>
          We are driven by an unwavering dedication to making a meaningful and lasting impact on the lives of underprivileged children. Our mission is rooted in the profound belief that every child deserves a chance to thrive and succeed, regardless of their circumstances. With this vision guiding us, we tirelessly strive to provide essential support and vital resources that pave the way for a brighter future for these vulnerable youngsters.
        </p>
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 text-xl font-semibold'>
          <li className='flex items-center gap-2'><FaCheckCircle className='text-primary text-2xl' />Charity For Foods</li>
          <li className='flex items-center gap-2'><FaCheckCircle className='text-primary text-2xl' />Charity For Education</li>
          <li className='flex items-center gap-2'><FaCheckCircle className='text-primary text-2xl' />Charity For Water</li>
          <li className='flex items-center gap-2'><FaCheckCircle className='text-primary text-2xl' />Charity For Medical</li>
        </ul>
        <div className='flex flex-col md:flex-row items-start md:items-center mt-8 gap-4 md:gap-8'>
          <Link href="/donations">
            <button className="btn border-primary border-2 bg-white hover:text-white hover:bg-primary" >
              Donate Now
            </button>
          </Link>
          <div className='flex items-center gap-3'>
            <FaPhoneAlt className='text-4xl text-primary' />
            <div>
              <p className='text-lg font-semibold text-gray-500'>Hotline</p>
              <p className='text-xl font-medium'>+888(888) 8888</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;