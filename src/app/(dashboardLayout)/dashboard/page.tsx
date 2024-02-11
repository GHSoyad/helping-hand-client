import { authOptions } from '@/utils/authOptions';
import { getServerSession } from 'next-auth';
import React from 'react';



const DashboardPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='text-center flex flex-col gap-5'>
      <h2 className='text-2xl font-medium pb-4'>Welcome, {session?.name || "User"}</h2>
      <p className='text-xl'>Use the dashboard menu to navigate</p>
      <div>
        <p><span className='font-semibold'>Email : </span> {session.email}</p>
        <p className='capitalize'><span className='font-semibold'>Role : </span> {session?.role}</p>
      </div>
    </div>
  );
};

export default DashboardPage;