"use client"
import React, { useEffect, useState } from 'react';
import { getSession } from 'next-auth/react';
import _ from 'lodash';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Loader from '@/components/shared/Loader';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface IDonationStat {
  _id: string,
  totalAmount: number
}


const DonationStatisticsPage = () => {
  const [session, setSession] = useState({ _id: null, token: null });
  const [statData, setStatData] = useState<IDonationStat[]>([]);
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
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/statistics/get-last-seven-days`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${session?.token}`
        },
        cache: "no-cache",
      })
        .then(res => res.json())
        .then(data => setStatData(data.content))
        .catch(err => console.log(err))
        .finally(() => setLoadingState(false))
    }
  }, [session]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        max: ((_.max(_.map(statData, 'totalAmount')) || 0) + 100),
      }
    }
  };

  const chartData = {
    labels: statData.map(stat => stat._id),
    datasets: [
      {
        data: statData.map((stat) => stat.totalAmount),
        borderColor: '#6d0076',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  return (
    <div>
      <h2 className='text-center text-2xl font-medium pb-4'>Last 7 Days Donation Statistics</h2>
      <div className='flex justify-center mt-5 relative px-0 py-8 md:p-8 min-h-96'>
        {
          loadingState ?
            <Loader />
            :
            <Line options={options} data={chartData} />
        }
      </div>
    </div>
  );
};

export default DonationStatisticsPage;
