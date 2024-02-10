import { DonationInterface } from '@/types/globalTypes';
import React from 'react';
import DonationCard from './DonationCard';
import Loader from '@/components/shared/Loader';

const DonationsSection = ({ donations, loading }: { donations: DonationInterface[], loading: boolean }) => {


  return (
    <main className='bg-primary-content/25 rounded-lg shadow-md w-full grow p-6 relative min-h-screen'>
      {
        loading ?
          <Loader />
          :
          donations.length ?
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {
                donations?.map(donation => (
                  <DonationCard key={donation?._id} donation={donation} />
                ))
              }
            </div>
            :
            <div className='text-xl font-medium p-6'>No Donations Found...</div>
      }
    </main>
  );
};

export default DonationsSection;