import React, { useEffect, useState } from 'react';
import Breadcumb from '../Components/Breadcumb';
import { useLoaderData } from 'react-router-dom';
import { getJobApplicationFromLS } from '../../Utility/localStorage';
import AppliedJob from '../Components/AppliedJob';
import {  AiOutlineDown } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';

const AppliedJobs = () => {

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote') {
            const remoteFilter = appliedJobs.filter(filterJob => filterJob.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteFilter);
        }
        else if (filter === 'onsite') {
            const onsiteFilter = appliedJobs.filter(filterOnsite => filterOnsite.remote_or_onsite === 'Onsite');

            
            setDisplayJobs(onsiteFilter);
                
            
        }
    }


    const allJobs = useLoaderData();
    useEffect(() => {
        const storedJobIds = getJobApplicationFromLS();
        if (allJobs.length) {
            
            const jobApplied = allJobs.filter(job => storedJobIds.includes(job.id));
            setAppliedJobs(jobApplied);
            setDisplayJobs(jobApplied);
            
        }
    }, []);

    
    return (
        <div className='pt-16 text-center '>
            
         
            <Breadcumb pageName='Applied Jobs'></Breadcumb>
            

        <div className='flex flex-col flex-nowrap space-y-3 container mx-auto pt-5'>

                

                <div className='self-end '>
                    <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Filter <FaAngleDown/></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li onClick={()=>handleFilter('all')}><a>All</a></li>
                <li onClick={()=>handleFilter('remote')}><a>Remote</a></li>
                <li onClick={()=>handleFilter('onsite')}><a>Onsite</a></li>
            </ul>
            </div>
               </div>
           
        
        <div className='pb-10 container mx-auto space-y-4'>
     
            
                
                {
                    displayJobs.map((item, idx) => <AppliedJob key={idx} appliedJob={item}></AppliedJob>)
                
                    }
                  
                    



        </div>
            </div>
       

            
        </div>
    );
};

export default AppliedJobs;