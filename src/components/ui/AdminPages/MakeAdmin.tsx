"use client"
import { makeUserAdmin } from '@/utils/actions/makeUserAdmin';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';


const MakeAdmin = ({ id }: { id: string }) => {
  const [formLoading, setFormLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(false);

  useEffect(() => {
    if (confirmation) {
      setFormLoading(true);

      makeUserAdmin(id)
        .then(data => {
          if (data.success) {
            toast.success(data.message);
          } else {
            toast.error(data.message);
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

  const handleSubmit = () => {
    toast((t) => (
      <div className='text-center p-6'>
        <div>
          <b>Are you sure you want to make this user Admin?</b>
        </div>
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
    <button
      onClick={handleSubmit}
      title="donate" className="text-sm font-medium rounded-lg p-2 border-primary border-2 bg-white mt-4 hover:text-white hover:bg-primary"
      disabled={formLoading}
    >
      Make Admin
    </button>
  );
};

export default MakeAdmin;