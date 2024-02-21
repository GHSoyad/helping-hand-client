"use client"
import React, { ChangeEvent, useState } from 'react';
import _ from 'lodash';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Loader from '@/components/shared/Loader';
import useGetMethod from '@/hooks/useGetMethod';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

interface IDonationStat {
  date: string,
  day: string,
  totalAmount: number
}


const DonationStatisticsPage = () => {
  const [filter, setFilter] = useState("7");
  const { responseData: statData, setUrl } = useGetMethod<IDonationStat[]>({
    initialUrl: `statistics/payments?days=7&currentWeek=0&currentMonth=0&currentYear=0`,
    initialData: [],
    initialLoader: true,
    cache: "no-cache"
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFilter(value);
    setUrl(`statistics/payments?days=${typeof Number(value) ? value : 0}&currentWeek=${value === "currentWeek" ? 1 : 0}&currentMonth=${value === "currentMonth" ? 1 : 0}&currentYear=${value === "currentYear" ? 1 : 0}`)
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
    },
    scales: {
      x: {
        reverse: true,
        ticks: {
          maxTicksLimit: 15
        }
      },
      y: {
        min: 0,
        max: ((_.max(_.map(statData?.data, 'totalAmount')) || 0) + 100),
      }
    }
  };

  const chartData = {
    labels: statData?.data?.map(stat => stat?.date),
    datasets: [
      {
        label: "Amount Sold",
        data: statData?.data?.map((stat) => stat.totalAmount),
        borderColor: '#6d0076',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        pointRadius: 3,
        pointHoverRadius: 5
      }
    ],
  };


  return (
    <div>
      <h2 className='text-center text-2xl font-medium pb-4'>{filter === "currentWeek" ? "This Weeks" : filter === "currentMonth" ? "This Months" : filter === 'currentYear' ? "This Years" : `Last ${filter} Days`} Donation Statistics</h2>
      <div className='mb-6'>
        <select
          className="select select-primary"
          name="filter"
          onChange={handleChange}
          value={filter}
        >
          <option value="currentWeek">This Week</option>
          <option value="currentMonth">This Month</option>
          <option value="currentYear">This Year</option>
          <option value="7">Weekly</option>
          <option value="30">Monthly</option>
          <option value="365">Yearly</option>
        </select>
      </div>
      <div className='flex justify-center relative min-h-96'>
        {
          statData.loading && <Loader />
        }
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
};

export default DonationStatisticsPage;
