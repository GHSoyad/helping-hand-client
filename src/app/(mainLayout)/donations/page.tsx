"use client";
import { useGetCategoriesQuery } from '@/redux/features/category/categoryApi';
import Sidebar from "@/components/ui/DonationsPage/Sidebar";
import React, { useEffect, useState } from 'react';
import DonationsSection from '@/components/ui/DonationsPage/DonationsSection';
import useGetMethod from '@/hooks/useGetMethod';
import { DonationInterface } from '@/types/globalTypes';

const DonationsPage = ({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) => {
  const { searchText } = searchParams;
  const [filter, setFilter] = useState({ category: "" });
  const { data: categories, isLoading } = useGetCategoriesQuery(undefined);
  const [{ data: donations, loading }, setUrl] = useGetMethod<DonationInterface[]>({
    initialUrl: `donations?searchText=${searchText || ""}&category=${filter?.category || ""}`,
    initialData: [],
    initialLoader: true,
    cache: "no-cache",
  });

  useEffect(() => {
    setUrl(`donations?searchText=${searchText || ""}&category=${filter?.category || ""}`);
    //eslint-disable-next-line
  }, [searchText, filter])

  return (
    <div className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 py-8 flex flex-col lg:flex-row gap-6'>
      <Sidebar
        setFilter={setFilter}
        categories={categories?.content || []}
        isLoading={isLoading}
      />
      <DonationsSection
        donations={donations}
        loading={loading}
      />
    </div>
  );
};

export default DonationsPage;