import MakeAdmin from '@/components/ui/AdminPages/MakeAdmin';
import { TUser } from '@/types/globalTypes';
import { getAllUsers } from '@/utils/actions/getAllUsers';
import React from 'react';


const AllUsers = async () => {
  const res = await getAllUsers();
  const users: TUser[] = res.content;

  return (
    <div>
      <h2 className='text-center text-2xl font-medium pb-6'>All Users</h2>
      {
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
                    <MakeAdmin id={user._id} />
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