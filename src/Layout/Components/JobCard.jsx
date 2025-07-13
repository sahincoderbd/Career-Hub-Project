import React from 'react';
import map from '../../assets/icons/Location2.png'
import money from '../../assets/icons/money.png'
import Button from './Button';
const FeaturedJob = ({ job }) => {
  
  const {id, logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary
  } = job;
  return (
    <div className='p-3 lg:p-5 rounded-lg border border-gray-500 space-y-3'>
      <img src={logo} alt="" />
      <h3 className='text-xl font-bold'>{job_title}</h3>
      <p>{company_name}</p>
      <div className='flex gap-3 flex-nowrap'>
        <p className='btn border border-gradient2 bg-transparent text-gradient1'>{remote_or_onsite}</p>
        <p className='btn border border-gradient2 bg-transparent text-gradient1'>{job_type}</p>
      </div>

      <div className='flex gap-5 flex-nowrap'>
        <p className='btn px-0 bg-transparent shadow-none border-none text-lg font-normal text-gray-400'><img src={map} alt="" />{location}</p>
        <p className='btn px-0 bg-transparent shadow-none border-none text-lg font-normal text-gray-400'><img src={money} alt="" />{salary}</p>
      </div>
      
      <div className='w-30'>
    <Button text='View Details' link={`job/${id}`}>View Details</Button>
        
      </div>
    </div>
  );
};

export default FeaturedJob;