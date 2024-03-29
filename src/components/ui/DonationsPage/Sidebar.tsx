import { TCategory } from '@/types/globalTypes';
import React, { ChangeEvent } from 'react';

type TSidebar = {
  setFilter: Function,
  categories: TCategory[],
  isLoading: boolean,
}

const Sidebar = ({ setFilter, categories, isLoading }: TSidebar) => {

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      category: e.target.value,
    })
  }

  return (
    <aside className='bg-primary-content/25 rounded-lg shadow-md w-full flex-none lg:w-[260px] relative'>
      <div className='flex flex-col sm:flex-row lg:flex-col gap-4 p-6 rounded-lg sticky top-16'>
        <select
          className="select select-primary"
          name="category"
          onChange={handleFilter}
        >
          {
            isLoading ?
              <option value="">Loading Categories...</option>
              :
              categories?.length ?
                <>
                  <option value="">All Categories</option>
                  {
                    categories.map((category: TCategory) => <option key={category._id} value={category._id}>{category.name}</option>)
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