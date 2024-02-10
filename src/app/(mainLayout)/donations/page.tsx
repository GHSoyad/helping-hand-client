"use client";
import { useGetCategoriesQuery } from '@/redux/features/category/categoryApi';
import Sidebar from "@/components/ui/DonationsPage/Sidebar";
import React, { useEffect, useState } from 'react';
import DonationsSection from '@/components/ui/DonationsPage/DonationsSection';

const DonationsPage = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const { searchText } = searchParams;
  const [donations, setDonations] = useState([]);
  const [loadingState, setLoadingState] = useState(true);
  const [filter, setFilter] = useState({ category: "" });
  const { data: categories, isLoading } = useGetCategoriesQuery();

  useEffect(() => {
    setLoadingState(true);
    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/donations?searchText=${searchText || ""}&category=${filter?.category || ""}`)
      .then(res => res.json())
      .then(data => setDonations(data))
      .catch(err => console.log(err))
      .finally(() => setLoadingState(false))
  }, [searchText, filter])

  return (
    <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 py-8 flex flex-col lg:flex-row gap-6'>
      <Sidebar
        setFilter={setFilter}
        categories={categories || []}
        isLoading={isLoading}
      />
      <DonationsSection
        donations={donations}
        loading={loadingState}
      />
    </div>
  );
};

export default DonationsPage;