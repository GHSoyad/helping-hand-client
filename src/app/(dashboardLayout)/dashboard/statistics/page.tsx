"use client"
import React, { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Loader from '@/components/shared/Loader';
ChartJS.register(ArcElement, Tooltip, Legend);


const StatisticsPage = () => {
  const [session, setSession] = useState({ _id: null });
  const [totalData, setTotalData] = useState({ totalDonation: 0, userTotalDonation: 0 });
  const [loadingState, setLoadingState] = useState(true);

  useEffect(() => {
    setLoadingState(true);
    getSession()
      .then(data => setSession(data as any))
      .catch(err => {
        console.log(err)
        setLoadingState(false)
      })
  }, [])

  useEffect(() => {
    if (session?._id) {
      setLoadingState(true);
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/statistics/user-total-donation/${session._id}`, { cache: 'no-store' })
        .then(res => res.json())
        .then(data => setTotalData(data.content))
        .catch(err => console.log(err))
        .finally(() => setLoadingState(false))
    }
  }, [session?._id])



  const chartData = {
    labels: ['Total Donation', 'User Donation'],
    datasets: [
      {
        data: [totalData.totalDonation, totalData.userTotalDonation],
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
      <div className='flex justify-center mt-5'>
        <div className='max-w-96  relative'>
          {
            loadingState ?
              <Loader />
              :
              <Pie data={chartData} />
          }
        </div>
      </div>
    </div>
  );
};

export default StatisticsPage;
