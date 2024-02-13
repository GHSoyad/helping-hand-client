"use client";
import Loader from '@/components/shared/Loader';
import MakeAdmin from '@/components/ui/AdminPages/MakeAdmin';
import { UserInterface } from '@/types/globalTypes';
import { getSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const AllUsers = () => {
  const [session, setSession] = useState({ _id: null, token: null });
  const [users, setUsers] = useState<UserInterface[]>([]);
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
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session?.token}`
        },
        cache: "no-cache",
        next: {
          tags: ['makeUserAdmin'],
        }
      })
        .then(res => res.json())
        .then(data => setUsers(data.content))
        .catch(err => console.log(err))
        .finally(() => setLoadingState(false))
    }
  }, [session]);

  return (
    <div>
      <h2 className='text-center text-2xl font-medium pb-6'>All Users</h2>
      {
        loadingState ?
          <Loader />
          :
          users?.length ?
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {
                users?.map(user => (
                  <div key={user?._id} className="flex flex-col sm:flex-row justify-between items-center p-4 border-l-8 border-primary bg-white rounded-lg">
                    <div className="font-medium text-center sm:text-start">
                      <p className='text-xl font-medium'>Name : {user.name}</p>
                      <p className='text-sm'>Email : {user.email}</p>
                      <p className='text-sm capitalize'>Current Role : {user.role}</p>
                    </div>
                    {
                      user.role.toLowerCase() !== "admin" &&
                      <MakeAdmin id={user._id} setUsers={setUsers} />
                    }
                  </div>
                ))
              }
            </div>
            :
            <div className='text-xl font-medium p-6'>No Donations Found...</div>
      }
    </div>
  );
};

export default AllUsers;