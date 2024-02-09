import React from 'react';
import HeroBannerSearch from "@/components/ui/Homepage/HeroBannerSearch";

const Homepage: React.FC = () => {
  return (
    <section className="px-4 py-32 lg:flex lg:h-screen lg:items-center relative w-full bg-banner bg-cover bg-center bg-no-repeat -mt-[66px]">
      <div className='absolute inset-0 bg-primary/10'></div>
      <div className="mx-auto max-w-xl text-center relative bg-primary-content/50 backdrop-blur-sm px-20 py-10 rounded-lg">
        <h1 className="text-3xl font-extrabold sm:text-5xl text-gray-200">
          <span style={{ textShadow: '0 0 1px black' }}>Lend a</span>
          <strong className="font-extrabold text-primary pt-2 sm:block">
            Helping Hand
          </strong>
        </h1>
        <p className="mt-4 sm:text-xl sm:leading-relaxed text-white" style={{ textShadow: '0 0 3px black' }}>
          Join us in making a difference in the world!
        </p>

        <HeroBannerSearch />
      </div>
    </section>
  );
};

export default Homepage;