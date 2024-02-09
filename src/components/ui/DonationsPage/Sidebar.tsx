"use client";
import { useGetCategoriesQuery } from '@/redux/features/category/categoryApi';
import { CategoryInterface } from '@/types/globalTypes';
import React, { ChangeEvent, useEffect, useState } from 'react';

const Sidebar = () => {
  const [filter, setFilter] = useState({});
  const [categories, setCategories] = useState([]);

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      category: e.target.value,
    })
  }

  return (
    <aside className='bg-primary/10 rounded-lg shadow-lg w-full flex-none lg:w-[260px] relative'>
      <div className='flex flex-col sm:flex-row lg:flex-col gap-4 p-6 rounded-lg sticky top-16'>
        <select
          className="select select-primary"
          name="category"
          onChange={handleFilter}
        >
          {
            categories?.length ?
              <>
                <option value="">All Categories</option>
                {
                  categories.map((category: CategoryInterface) => <option key={category._id} value={category._id}>{category.name}</option>)
                }
              </>
              :
              <option value="">Categories Not Found...</option>
          }
        </select>
      </div>
    </aside >
  );
};

export default Sidebar;