"use client";
import Loader from '@/components/shared/Loader';
import DonationCard from '@/components/ui/AdminPages/DonationCard';
import { DonationInterface } from '@/types/globalTypes';
import { getDonationsByUser } from '@/utils/actions/getDonationsByUser';
import { getSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const AllDonations = ({ setModifyDonation, setDonationPage }: { setModifyDonation: any, setDonationPage: any }) => {
  const [session, setSession] = useState({ _id: null });
  const [donations, setDonations] = useState<DonationInterface[]>([]);
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    setLoadingState(true);
    getSession()
      .then(data => setSession(data as any))
      .catch(err => {
        console.log(err)
        setLoadingState(false)
      })
  }, [])

  useEffect(() => {
    if (session?._id) {
      setLoadingState(true);
      getDonationsByUser(session?._id)
        .then(data => setDonations(data))
        .catch(err => console.log(err))
        .finally(() => setLoadingState(false))
    }
  }, [session?._id])

  return (
    <>
      {
        loadingState ?
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