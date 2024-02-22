"use client";
import React, { useState } from 'react';
import EditDonation from '@/components/ui/AdminPages/EditDonation';
import AllDonations from '@/components/ui/AdminPages/AllDonations';
import DeleteDonation from '@/components/ui/AdminPages/DeleteDonation';
import { TDonation } from '@/types/globalTypes';


const AllDonationsPage = () => {
  const [modifyDonation, setModifyDonation] = useState<TDonation | null>(null);
  const [donationPage, setDonationPage] = useState<number>(1); // 1.All 2.Edit 3.Delete

  return (
    <>
      {
        donationPage === 1 ?
          <AllDonations
            setModifyDonation={setModifyDonation}
            setDonationPage={setDonationPage}
          />
          : (donationPage === 2 && modifyDonation)?
            <EditDonation
              donation={modifyDonation}
              setModifyDonation={setModifyDonation}
              setDonationPage={setDonationPage}
            />
            : (donationPage === 3 && modifyDonation) ?
              <DeleteDonation
                donation={modifyDonation}
                setModifyDonation={setModifyDonation}
                setDonationPage={setDonationPage}
              />
              :
              <></>
      }
    </>
  );
};

export default AllDonationsPage;