"use client"
import Loader from '@/components/shared/Loader';
import { useGetCategoriesQuery } from '@/redux/features/category/categoryApi';
import { TCategory, TDonation } from '@/types/globalTypes';
import { editDonation } from '@/utils/actions/editDonation';
import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import toast from 'react-hot-toast';

type TEditDonationProps = {
  donation: TDonation,
  setModifyDonation: Dispatch<SetStateAction<TDonation | null>>,
  setDonationPage: Dispatch<SetStateAction<number>>,
}


const EditDonation = ({ donation, setModifyDonation, setDonationPage }: TEditDonationProps) => {
  const [formLoading, setFormLoading] = useState(false);
  const { data: categories, isLoading } = useGetCategoriesQuery(undefined);
  const [donationData, setDonationData] = useState({
    title: donation.title,
    description: donation.description,
    goal: donation.goal,
    picture: donation.picture,
    category: donation.category._id,
    startDate: donation.startDate,
    endDate: donation.endDate,
    location: donation.location,
  })

  // Patch product
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formCheck = {
      title: donation.title,
      description: donation.description,
      goal: donation.goal,
      picture: donation.picture,
      category: donation.category._id,
      startDate: donation.startDate,
      endDate: donation.endDate,
      location: donation.location,
    }

    if (JSON.stringify(formCheck) === JSON.stringify(donationData)) {
      toast.error("Nothing to edit!");
      return
    }

    setFormLoading(true);

    const res = await editDonation(donationData, donation._id);
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
      <h2 className='text-center text-2xl font-medium pb-4'>Add Donation</h2>
      <form onSubmit={(e) => handleSubmit(e)} className='max-w-md rounded-lg flex flex-col gap-4 flex-1 mx-auto'>
        <input
          required
          name='donation'
          type="text"
          placeholder="Donation title"
          className="input input-bordered w-full"
          value={donationData.title}
          onChange={(e) => setDonationData({ ...donationData, title: (e.target.value) })}
        />
        <textarea
          required
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          value={donationData.description}
          rows={5}
          onChange={(e) => setDonationData({ ...donationData, description: (e.target.value) })}
        />
        <input
          required
          type="text"
          placeholder="Location"
          className="input input-bordered w-full"
          value={donationData.location}
          onChange={(e) => setDonationData({ ...donationData, location: (e.target.value) })}
        />
        <input
          required
          type="number"
          placeholder="Goal Amount"
          className="input input-bordered w-full"
          min={1}
          step={1}
          value={donationData.goal}
          onChange={(e) => setDonationData({ ...donationData, goal: parseInt(e.target.value) })}
        />

        <div className='flex flex-col md:flex-row gap-4'>
          <div>
            <label className='pl-1 text-sm font-medium'>Start Date</label>
            <input
              required
              type="date"
              placeholder="Start Date"
              className="input input-bordered w-full mt-1"
              disabled
              max={donationData.endDate}
              value={donationData.startDate}
              onChange={(e) => setDonationData({ ...donationData, startDate: (e.target.value) })}
            />
          </div>
          <div>
            <label className='pl-1 text-sm font-medium'>End Date</label>
            <input
              required
              type="date"
              placeholder="End Date"
              className="input input-bordered w-full mt-1"
              min={donationData.startDate}
              value={donationData.endDate}
              onChange={(e) => setDonationData({ ...donationData, endDate: (e.target.value) })}
            />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-between'>
          <select
            required
            className="select select-bordered border-2 flex-1"
            name='category'
            value={donationData.category}
            onChange={(e) => setDonationData({ ...donationData, category: (e.target.value) })}
          >
            {
              isLoading ?
                <option value=''>Loading Category</option>
                :
                <>
                  <option value=''>Select Category</option>
                  {
                    categories?.content?.map((category: TCategory) => <option key={category._id} value={category._id}>{category.name}</option>)
                  }
                </>
            }
          </select>
        </div>

        <input
          required
          type="text"
          placeholder="Picture Link (https://unsplash.com/)"
          className="input input-bordered w-full"
          value={donationData.picture}
          onChange={(e) => setDonationData({ ...donationData, picture: (e.target.value) })}
        />

        <div className='flex justify-end gap-3'>
          <button
            type='submit'
            className='btn border-primary border-2 bg-white mt-4 hover:text-white hover:bg-primary'
            disabled={formLoading}
          >
            Edit Donation
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

export default EditDonation;