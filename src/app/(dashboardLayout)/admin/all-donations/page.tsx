"use client";
import React, { useState } from 'react';
import EditDonation from '@/components/ui/AdminPages/EditDonation';
import AllDonations from '@/components/ui/AdminPages/AllDonations';
import DeleteDonation from '@/components/ui/AdminPages/DeleteDonation';

const AllDonationsPage = () => {
  const [modifyDonation, setModifyDonation] = useState(null);
  const [donationPage, setDonationPage] = useState(1); // 1.All 2.Edit 3.Delete

  return (
    <>
      {
        donationPage === 1 ?
          <AllDonations
            setModifyDonation={setModifyDonation}
            setDonationPage={setDonationPage}
          />
          : donationPage === 2 ?
            <EditDonation
              donation={modifyDonation}
              setModifyDonation={setModifyDonation}
              setDonationPage={setDonationPage}
            />
            : donationPage === 3 ?
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