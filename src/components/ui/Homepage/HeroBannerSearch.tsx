"use client";
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, FormEvent, useState } from 'react';

const HeroBannerSearch: React.FC = () => {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value ? e.target.value?.toLowerCase()?.trim() : "";
    setSearchInput(value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchInput) {
      router.push(`/donations?searchText=${searchInput}`);
    }
  }

  return (
    <div className="mt-8">
      <form className="join" onSubmit={handleSubmit}>
        <div>
          <input
            required
            className="input w-full border-primary/50 focus:outline-none focus:border-primary join-item"
            placeholder="Search for active donations..."
            onChange={handleChange}
          />
        </div>
        <div className="indicator">
          <button
            type='submit'
            className="btn join-item bg-primary text-white font-bold border-primary hover:bg-primary-content hover:text-primary hover:border-primary"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroBannerSearch;