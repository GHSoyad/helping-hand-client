"use client"
import React from 'react';
import { useSession } from 'next-auth/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Loader from '@/components/shared/Loader';
import useGetMethod from '@/hooks/useGetMethod';
ChartJS.register(ArcElement, Tooltip, Legend);

type TDonationStat = {
  totalDonation: number,
  userTotalDonation: number,
}


const MyStatisticsPage = () => {
  const { data: session } = useSession();
  const [{ data: totalData, loading }] = useGetMethod<TDonationStat>({
    initialUrl: `statistics/user-total-donation/${session?._id}`,
    initialData: { totalDonation: 0, userTotalDonation: 0 },
    initialLoader: true,
    cache: "no-cache",
    secure: true,
  })

  const chartData = {
    labels: ['Total Donation', 'User Donation'],
    datasets: [
      {
        data: [totalData?.totalDonation, totalData?.userTotalDonation],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <div>
      <h2 className='text-center text-2xl font-medium pb-4'>My Donation Statistics</h2>
      <div className='flex justify-center mt-5 relative min-h-80'>
        {
          loading && <Loader />
        }
        <div className='max-w-96'>
          <Pie data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default MyStatisticsPage;
