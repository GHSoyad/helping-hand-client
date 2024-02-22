import ButtonBeta from '@/components/shared/ButtonBeta';
import { TDonation } from '@/types/globalTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const DonationCard = ({ donation }: { donation: TDonation }) => {
  const { _id, title, picture, startDate, goal, category } = donation;

  return (
    <div className="overflow-hidden bg-white rounded-xl shadow hover:shadow-md transition-all duration-500 group/card">
      <div className="p-5">
        <div className="relative">
          <div className="relative w-full h-52 overflow-hidden rounded-md">
            <Image
              src={picture}
              alt={title}
              fill={true}
              className='group-hover/card:scale-110 transition-all duration-500'
              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 20vw"
            />
          </div>

          <div className="absolute top-2 left-2">
            <span className="px-4 py-2 text-[10px] font-semibold tracking-widest text-primary uppercase bg-white rounded-full">{category?.name}</span>
          </div>
        </div>
        <div className='flex justify-between'>
          <span className="block mt-6 text-xs font-semibold tracking-widest text-gray-500 uppercase">{startDate}</span>
          <span className="block mt-6 text-xs font-semibold tracking-widest text-gray-500 uppercase">Goal : {goal}</span>
        </div>
        <p className="my-5 text-xl font-semibold text-black">
          <Link href={`/donation/${_id}`} title="details-page" className='hover:text-primary'>{title}</Link>
        </p>

        <Link href={`/donation/${_id}`} className='inline-flex'>
          <ButtonBeta title="Details Page">
            Donate Now <FaArrowRight />
          </ButtonBeta>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;