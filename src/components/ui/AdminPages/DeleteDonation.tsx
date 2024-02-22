"use client"
import Loader from '@/components/shared/Loader';
import { TDonation } from '@/types/globalTypes';
import { deleteDonation } from '@/utils/actions/deleteDonation';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import toast from 'react-hot-toast';

type TDeleteDonationProps = {
  donation: TDonation,
  setModifyDonation : Dispatch<SetStateAction<TDonation | null>>,
  setDonationPage : Dispatch<SetStateAction<number>>,
}


const DeleteDonation = ({ donation, setModifyDonation, setDonationPage }: TDeleteDonationProps) => {
  const [formLoading, setFormLoading] = useState(false);

  // Patch product
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    const res = await deleteDonation(donation._id);
    if (res.success) {
      toast.success(res.message);
      setModifyDonation(null);
      setDonationPage(1);
    } else {
      toast.error(res.message);
    }

    setFormLoading(false);
  }


  return (
    <div className='relative'>
      {
        formLoading && <Loader />
      }
      <h2 className='text-center text-2xl font-medium pb-4'>Delete Donation</h2>

      <form onSubmit={(e) => handleSubmit(e)} className='max-w-md rounded-lg flex flex-col gap-4 flex-1 mx-auto'>
        <p className='text-center font-semibold'>Are you sure you want to delete this donation?</p>
        <p className='text-center font-semibold'>This action cannot be undone!!</p>
        <h2 className='text-center text-2xl font-medium pb-4'>{donation.title}</h2>
        <div className='flex justify-center gap-3'>
          <button
            type='submit'
            className='btn border-red-500 border-2 text-white bg-red-500 mt-4 hover:text-white hover:bg-red-600'
            disabled={formLoading}
          >
            Delete Donation
          </button>
          <button
            type='button'
            className='btn border-red-600 border-2 bg-white text-red-600 mt-4 hover:text-white hover:bg-red-600'
            disabled={formLoading}
            onClick={() => setDonationPage(1)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeleteDonation;