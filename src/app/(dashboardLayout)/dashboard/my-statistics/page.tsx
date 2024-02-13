"use client"
import React, { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import Loader from '@/components/shared/Loader';
ChartJS.register(ArcElement, Tooltip, Legend);


const MyStatisticsPage = () => {
  const [session, setSession] = useState({ _id: null, token: null });
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
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/statistics/user-total-donation/${session._id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session?.token}`
        },
        cache: "no-cache",
      })
        .then(res => res.json())
        .then(data => setTotalData(data.content))
        .catch(err => console.log(err))
        .finally(() => setLoadingState(false))
    }
  }, [session])

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
          loadingState ?
            <Loader />
            :
            <div className='max-w-96'>
              <Pie data={chartData} />
            </div>
        }
      </div>
    </div>
  );
};

export default MyStatisticsPage;
