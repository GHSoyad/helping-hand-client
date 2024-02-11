"use client"
import Loader from '@/components/shared/Loader';
import { useGetCategoriesQuery } from '@/redux/features/category/categoryApi';
import { createDonation } from '@/utils/actions/createDonation';
import React, { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';

const payload = {
  title: "",
  description: "",
  goal: 0,
  raised: 0,
  picture: "",
  category: "",
  startDate: "",
  endDate: "",
  location: "",
}

const AllDonationsPage = () => {
  const [formLoading, setFormLoading] = useState(false);
  const { data: categories, isLoading } = useGetCategoriesQuery();
  const [donationData, setDonationData] = useState({ ...payload })

  // Post product
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormLoading(true);

    const res = await createDonation(donationData);
    if (res.success) {
      toast.success(res.message);
      setDonationData({ ...payload })
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
      <form onSubmit={handleSubmit} className='max-w-md rounded-lg flex flex-col gap-4 flex-1 mx-auto'>
        <input
          required
          name='donation'
          type="text"
          placeholder="Donation title"
          className="input input-bordered w-full"
          onChange={(e) => setDonationData({ ...donationData, title: (e.target.value) })}
        />
        <textarea
          required
          className="textarea textarea-bordered w-full"
          placeholder="Description"
          onChange={(e) => setDonationData({ ...donationData, description: (e.target.value) })}
        />
        <input
          required
          type="text"
          placeholder="Location"
          className="input input-bordered w-full"
          onChange={(e) => setDonationData({ ...donationData, location: (e.target.value) })}
        />
        <input
          required
          type="number"
          placeholder="Goal Amount"
          className="input input-bordered w-full"
          min={1}
          step={1}
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
              max={donationData.endDate}
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
              onChange={(e) => setDonationData({ ...donationData, endDate: (e.target.value) })}
            />
          </div>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 justify-between'>
          <select
            required
            className="select select-bordered border-2 flex-1"
            name='category'
            onChange={(e) => setDonationData({ ...donationData, category: (e.target.value) })}
          >
            {
              isLoading ?
                <option value=''>Loading Category</option>
                :
                <>
                  <option value=''>Select Category</option>
                  {
                    categories?.map(category => <option key={category._id} value={category._id}>{category.name}</option>)
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
          onChange={(e) => setDonationData({ ...donationData, picture: (e.target.value) })}
        />

        <button className='btn border-primary border-2 bg-white mt-4 hover:text-white hover:bg-primary' disabled={formLoading}>Add Product</button>
      </form>
    </div>
  );
};

export default AllDonationsPage;