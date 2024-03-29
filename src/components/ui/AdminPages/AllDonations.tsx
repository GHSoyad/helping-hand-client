"use client";
import Loader from '@/components/shared/Loader';
import DonationCard from '@/components/ui/AdminPages/DonationCard';
import useGetMethod from '@/hooks/useGetMethod';
import { TDonation } from '@/types/globalTypes';
import { useSession } from 'next-auth/react';
import React, { Dispatch, SetStateAction } from 'react';

type TAllDonationsProps = {
  setModifyDonation : Dispatch<SetStateAction<TDonation | null>>,
  setDonationPage : Dispatch<SetStateAction<number>>,
}


const AllDonations = ({ setModifyDonation, setDonationPage }: TAllDonationsProps) => {
  const { data: session } = useSession();
  const [{ data: donations, loading }] = useGetMethod<TDonation[]>({
    initialUrl: `donations?userId=${session?._id}`,
    initialData: [],
    initialLoader: true,
    cache: "no-cache",
  })


  return (
    <>
      {
        loading ?
          <Loader />
          :
          donations?.length ?
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
              {
                donations?.map(donation => (
                  <DonationCard
                    key={donation?._id}
                    donation={donation}
                    setModifyDonation={setModifyDonation}
                    setDonationPage={setDonationPage}
                  />
                ))
              }
            </div>
            :
            <div className='text-xl font-medium p-6'>No Donations Found...</div>
      }
    </>
  );
};

export default AllDonations;