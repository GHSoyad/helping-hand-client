"use-client"
import { DonationInterface } from '@/types/globalTypes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const DonationCard = ({ donation, setModifyDonation, setDonationPage }: { donation: DonationInterface, setModifyDonation: any, setDonationPage: any }) => {
  const { _id, title, picture, startDate, category } = donation;

  return (
    <div className="overflow-hidden bg-white rounded-xl shadow">
      <div className="p-5">
        <div className="relative">
          <div className="relative w-full h-52">
            <Image
              src={picture}
              alt={title}
              fill={true}
              className='rounded-md'
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 30vw"
            />
          </div>

          <div className="absolute top-2 left-2">
            <span className="px-4 py-2 text-[10px] font-semibold tracking-widest text-primary uppercase bg-white rounded-full">{category?.name}</span>
          </div>
        </div>
        <p className="block mt-6 text-xs font-semibold tracking-widest text-gray-500 uppercase">{startDate}</p>
        <p className="mt-5 text-xl font-semibold text-black">
          <Link href={`/donation/${_id}`} title="details-page" className='hover:text-primary'>{title}</Link>
        </p>

        <div className='flex justify-between'>
          <button
            title="edit-donation"
            className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-primary transition-all duration-200 border-b-2 border-transparent hover:border-primary focus:border-primary"
          >
            <span onClick={() => { setModifyDonation(donation); setDonationPage(2) }} className='me-2'>Edit</span> <FaEdit />
          </button>
          <button title="delete-donation" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-primary transition-all duration-200 border-b-2 border-transparent hover:border-primary focus:border-primary">
            <span onClick={() => { setModifyDonation(donation); setDonationPage(3) }} className='me-2'>Delete</span> <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;