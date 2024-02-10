import { DonationInterface } from '@/types/globalTypes';
import Image from 'next/image';
import React from 'react';

type TParams = {
  donationId: string;
};

const DonationPage = async ({ params }: { params: TParams }) => {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/${params.donationId}`, { cache: 'no-store' });
  const donation: DonationInterface = await res.json();

  return (
    <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 py-8'>
      <main className='bg-primary-content/25 rounded-lg shadow-md p-4 md:p-6 relative min-h-[calc(100vh-392px)]'>
        <div className="relative w-full h-80">
          <Image
            src={donation.picture}
            alt={donation.title}
            fill={true}
            className='rounded-md'
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw"
          />
        </div>
        <div className='flex flex-col md:flex-row justify-between mt-5'>
          <div>
            <h1 className='text-2xl font-semibold text-primary'>
              {donation.title}
            </h1>
            <p className='text-lg font-semibold'>{donation.organizer.name}</p>
          </div>
          <div className='flex md:flex-col gap-2 text-sm font-semibold text-gray-600 mt-2 md:mt-0'>
            <div className='flex justify-between gap-2'>
              <p>Start Date :</p>
              <p>{donation.startDate}</p>
            </div>
            <div className='flex justify-between gap-2'>
              <p>End Date :</p>
              <p>{donation.endDate}</p>
            </div>
          </div>
        </div>
        <p className='mt-5'>
          {donation.description}
        </p>
        <div className='bg-white p-4 md:p-6 rounded-lg mt-5'>
          <div className='bg-primary-content rounded-full mb-8'>
            <div className='my-3'>
              <div className='bg-stroke relative h-5 w-full rounded-2xl'>
                <div
                  className={`bg-primary absolute top-0 left-0 flex h-full min-w-8 items-center justify-center rounded-2xl text-xs font-semibold text-white`}
                  style={{ width: `${((donation.raised / donation.goal) * 100).toFixed(0)}%` }}
                >
                  {((donation.raised / donation.goal) * 100).toFixed(0)} %
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col md:flex-row text-base font-semibold gap-5'>
            <div className='bg-primary-content/25 p-4 rounded-lg'>
              <span className='text-gray-600'>Goal : </span>
              <span className='text-primary font-extrabold'>${donation.goal}</span>
            </div>
            <div className='bg-primary-content/25 p-4 rounded-lg'>
              <span className='text-gray-600'>Raised : </span>
              <span className='text-primary font-extrabold'>${donation.raised}</span>
            </div>
            <div className='bg-primary-content/25 p-4 rounded-lg'>
              <span className='text-gray-600'>To Go : </span>
              <span className='text-primary font-extrabold'>${(donation.goal - donation.raised)}</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DonationPage;