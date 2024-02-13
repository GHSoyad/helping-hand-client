"use client"
import { createDonationPayment } from '@/utils/actions/createDonationPayment';
import { getSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const Donate = ({ id }: { id: string }) => {
  const [session, setSession] = useState({ _id: null });
  const [formLoading, setFormLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    getSession()
      .then(data => setSession(data as any))
      .catch(err => console.log(err))
  }, []);

  useEffect(() => {
    if (confirmation) {
      setFormLoading(true);
      createDonationPayment(id)
        .then(res => {
          if (res.success) {
            toast.success(res.message);
          } else {
            toast.error(res.message);
          }
        })
        .catch(err => console.log(err))
        .finally(() => {
          setFormLoading(false);
          setConfirmation(false);
        });
    }
    //eslint-disable-next-line
  }, [confirmation]);

  const handleDonate = () => {
    toast((t) => (
      <div className='text-center p-6'>
        <b>Donate $100 to this donation?</b>
        <button
          className='btn btn-sm border-primary border-2 bg-white mt-4 hover:text-white hover:bg-primary me-2'
          onClick={() => { setConfirmation(true), toast.dismiss(t.id) }}
        >
          Confirm
        </button>
        <button
          className='btn btn-sm border-red-600 border-2 bg-white text-red-600 mt-4 hover:text-white hover:bg-red-600'
          onClick={() => { setConfirmation(false), toast.dismiss(t.id) }}
        >
          Cancel
        </button>
      </div>
    ),
      {
        duration: Infinity
      });
  }

  return (
    <div>
      {
        session?._id ?
          <button
            onClick={handleDonate}
            title="donate" className="btn border-primary border-2 bg-white mt-4 hover:text-white hover:bg-primary"
            disabled={formLoading}
          >
            <span className='me-2'>Donate $100</span>
          </button>
          :
          <Link href='/login'>
            <button
              title="donate" className="btn border-primary border-2 bg-white mt-4 hover:text-white hover:bg-primary"
            >
              <span className='me-2'>Login to Donate</span>
            </button>
          </Link>
      }
    </div>
  );
};

export default Donate;