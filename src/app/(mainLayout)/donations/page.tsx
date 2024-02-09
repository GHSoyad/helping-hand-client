import React from 'react';
import Sidebar from "@/components/ui/DonationsPage/Sidebar";

const DonationsPage = async ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  console.log(searchParams);

  return (
    <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 py-8 flex flex-col lg:flex-row gap-6'>
      <Sidebar />
      <div className='bg-primary/10 rounded-lg shadow-lg w-full grow p-6'>
        Welcome to donations page
      </div>
    </div>
  );
};

export default DonationsPage;