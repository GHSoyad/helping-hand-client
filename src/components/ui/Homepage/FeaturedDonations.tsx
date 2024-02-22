import React from 'react';
import DonationCard from '../DonationsPage/DonationCard';
import { TDonation } from '@/types/globalTypes';
import Link from 'next/link';


const FeaturedDonations = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donations?featured=true&limit=4`);
  const data = await res.json();
  const donations: TDonation[] = await data.content;

  return (
    <div className='text-center'>
      <h1 className='text-3xl font-bold text-primary my-10'>Featured Donations</h1>
      {
        donations?.length &&
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {
            donations?.map(donation => (
              <DonationCard key={donation?._id} donation={donation} />
            ))
          }
        </div>
      }
      <Link href='/donations'>
        <button
          title="Donations" className="btn btn-wide border-primary border-2 bg-white hover:text-white hover:bg-primary my-10"
        >
          View More
        </button>
      </Link>
    </div>
  );
};

export default FeaturedDonations;