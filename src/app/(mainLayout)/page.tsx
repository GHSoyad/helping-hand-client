import React from 'react';
import HeroBannerSearch from "@/components/ui/Homepage/HeroBannerSearch";
import FeaturedDonations from '@/components/ui/Homepage/FeaturedDonations';
import AboutUs from '@/components/ui/Homepage/AboutUs';

const Homepage: React.FC = () => {
  return (
    <main>
      <section className="px-4 pt-32 pb-20 md:py-32 lg:flex lg:h-screen lg:items-center relative w-full bg-banner bg-cover bg-center bg-no-repeat -mt-[66px]">
        <div className='absolute inset-0 bg-primary/10'></div>
        <div className="mx-auto max-w-xl text-center relative bg-primary-content/50 backdrop-blur-sm p-10 md:px-20 rounded-lg">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            <p style={{ textShadow: '0 0 1px black' }} className='pb-1 md:pb-3'>Lend a</p>
            <strong className="font-extrabold text-primary sm:block">
              Helping Hand
            </strong>
          </h1>
          <p className="mt-4 sm:text-xl sm:leading-relaxed font-medium text-white" style={{ textShadow: '0 0 3px black' }}>
            Join us in making a difference in the world!
          </p>

          <HeroBannerSearch />
        </div>
      </section>
      <section className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 py-8'>
        <FeaturedDonations />
      </section>
      <section className='container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 py-8 mb-10'>
        <AboutUs />
      </section>
    </main>
  );
};

export default Homepage;