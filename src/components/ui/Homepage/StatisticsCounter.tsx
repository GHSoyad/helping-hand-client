"use client"
import CountUp from 'react-countup';
import { LiaDonateSolid, LiaGlobeAmericasSolid, LiaProjectDiagramSolid, LiaUsersSolid } from 'react-icons/lia';

const counter = [
  { number: 2345, name: "Project Done", icon: <LiaProjectDiagramSolid className='text-6xl' /> },
  { number: 5684, name: "Expert Volunteer", icon: <LiaUsersSolid className='text-6xl' /> },
  { number: 1232, name: "Global Partner", icon: <LiaGlobeAmericasSolid className='text-6xl' /> },
  { number: 8758, name: "Total Donations", icon: <LiaDonateSolid className='text-6xl' /> },
]


const StatisticsCounter = () => {

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center gap-10 text-5xl text-white'>
      {
        counter.map((item, index) => (
          <div key={index} className='flex justify-center'>

            <div className='min-w-44 relative'>
              <div className='absolute -left-20'>
                {item.icon}
              </div>
              <CountUp
                start={11}
                end={item.number}
                duration={3}
                suffix='+'
                enableScrollSpy
                scrollSpyOnce
                className='font-bold'
              />
              <p className='text-xl pt-2 font-medium'>{item.name}</p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default StatisticsCounter;