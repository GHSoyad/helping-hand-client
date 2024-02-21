"use-client"
import ButtonBeta from '@/components/shared/ButtonBeta';
import { DonationInterface } from '@/types/globalTypes';
import Image from 'next/image';
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const DonationCard = ({ donation, setModifyDonation, setDonationPage }: { donation: DonationInterface, setModifyDonation: any, setDonationPage: any }) => {
  const { _id, title, picture, startDate, category } = donation;

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
        <p className="block mt-6 text-xs font-semibold tracking-widest text-gray-500 uppercase">{startDate}</p>
        <p className="mt-5 text-xl font-semibold text-black">
          {title}
        </p>

        <div className='flex justify-between mt-5'>
          <ButtonBeta
            title="Edit"
            onClick={() => { setModifyDonation(donation); setDonationPage(2) }}
          >
            Edit <FaEdit />
          </ButtonBeta>
          <ButtonBeta
            title="Delete"
            onClick={() => { setModifyDonation(donation); setDonationPage(3) }}
          >
            Delete <FaTrash />
          </ButtonBeta>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;