import React from 'react';
import { useState, useEffect } from 'react';
import FeaturedJob from './JobCard';
const Jobs = () => {

  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch('jobs.json')
      .then(res => res.json())
      .then(data => setJobs(data))
  },[])
  return (
    <div>
      

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 container mx-auto pb-10 px-2 lg:px-0'>

        {
          jobs.slice(0,dataLength).map((job, idx) => <FeaturedJob job={job} key={idx}></FeaturedJob>)
      }

      </div>

      <div className={`${jobs.length===dataLength && 'hidden'} mx-auto text-center pb-5` }>
      <button onClick={()=>setDataLength(jobs.length)} className='text-white btn bg-gradient-to-r from-gradient1 to-gradient2'>See All Jobs</button>
      </div>
      
    </div>
  );
};

export default Jobs;