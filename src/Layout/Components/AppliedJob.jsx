import React from 'react';
import map from '../../assets/icons/location2.png'
import money from '../../assets/icons/money.png'
import Button from './Button';
const AppliedJob = ({ appliedJob }) => {
  
  console.log(appliedJob);

  const { id, logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary
  } = appliedJob;

  return (
    <div className='p-3 lg:p-5 flex lg:flex-row flex-col gap-5 nowrap rounded-lg border items-stratch border-gray-500 space-y-3 text-left'>
      <div className=' p-3 m-0 flex-1/5 min-h-fit rounded-lg bg-gray-300 dark:bg-gray-800 flex flex-col flex-nowrap justify-center items-center'>
        <img className=' ' src={logo} alt="" />
      </div>
      <div className='flex-3/5 space-y-2'>
        <h3 className='text-xl font-bold'>{job_title}</h3>
        <p>{company_name}</p>
        <div className='flex gap-3 flex-nowrap'>
            <p className='btn border border-gradient2 bg-transparent text-gradient1'>{remote_or_onsite}</p>
            <p className='btn border border-gradient2 bg-transparent text-gradient1'>{job_type}</p>
        </div>
        <div className='flex gap-5 flex-nowrap '>
            <p className='btn px-0 bg-transparent shadow-none border-none text-lg font-normal text-gray-400'><img src={map} alt="" />{location}</p>
            <p className='btn px-0 bg-transparent shadow-none border-none text-lg font-normal text-gray-400'><img src={money} alt="" />{salary}</p>
        </div>
      </div>

      <div className=' flex-1/5 flex flex-nowrap flex-col justify-center items-center'>
    <Button text='View Details' link={`job/${id}`}>View Details</Button>
        
      </div>
    </div>
  );
};

export default AppliedJob;