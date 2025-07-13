import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Breadcumb from '../Components/Breadcumb';
import { AiOutlineCalendar, AiOutlineDollar, AiOutlinePhone, AiOutlineRedEnvelope } from 'react-icons/ai';
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5';
import { FaRegEnvelope } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import Button from '../Components/Button';
import '../../App.css'
import toast, { Toaster } from 'react-hot-toast';
import { getJobApplicationFromLS, saveJobApplication } from '../../Utility/localStorage';

const JobDetails = () => {

  const jobs = useLoaderData();
  
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(i => i.id === idInt);

   const {contact_information,
    job_title,
     salary,
     experiences,
     job_description,
     job_responsibility,
    educational_requirements
  } = job;


  const handleJobApply = () => {
    
    const exists = getJobApplicationFromLS();
    console.log(exists);
    const findExist = exists.find(jobId => jobId === idInt);
    console.log(findExist);
    
    if (!findExist) {
      saveJobApplication(idInt);
      toast.success('You Have Applied Successfully!', {
      position: 'top-right'
    });
    }
    else {
      toast.error('You Already Applied in this job', {
      position: 'top-right'
    });
    }
    
  }



  return (
    <div className='pt-16 text-center'>
      <Toaster></Toaster>
     <Breadcumb pageName='Job Details'></Breadcumb>
   
      {/* Job Deatils Section */}
      <div className='grid grid-cols-3 gap-6 py-10 container mx-auto px-2 lg:px-0'>

        {/* left side */}
        <div className='col-span-4 lg:col-span-2 text-left text-base space-y-4 '>
          <p><strong>Job Description: </strong>{ job_description}</p>
          <p><strong>Job Responsibility: </strong>{job_responsibility}</p>

          <p><strong>Educational Requirements: <br></br></strong>{educational_requirements}</p>

          <p><strong>Experiences: <br></br></strong>{experiences}</p>
          
        </div>

        {/* Right side */}

        <div className='col-span-4 lg:col-span-1  space-y-3 '>
          <div className='bg-gradient-to-r from-[#7E90FE0F] to-[#9873FF0F] rounded-xl p-4 text-left '>
           {/* Job Info */}
          <div className='py-3'>
            <h3 className='text-lg font-bold pb-4 mb-3 border-b border-gray-300 dark:border-gray-700'>Job Details :</h3>
            <p className='flex items-center pt-1'><AiOutlineDollar className='text-gradient1 mr-1 text-xl' /><strong className='mr-1'>Salary: </strong> {salary} (Per Month)</p>
            
          <p className='flex items-center pt-1'><IoCalendarOutline className='text-gradient1 mr-1 text-xl'/><strong className='mr-1'>Job Title: </strong> {job_title}</p>

          </div>

          {/* Contact Info */}
          <div className='py-3'>
            <h3 className='text-lg font-bold pb-4 mb-3 border-b border-gray-300 dark:border-gray-700'>Contact Information :</h3>
            <p className='flex items-center pt-1'><FiPhone className='text-gradient1 mr-1 text-xl' /><strong className='mr-1'>Phone: </strong> {contact_information.phone}</p>
            
            <p className='flex items-center pt-1'><FaRegEnvelope className='text-gradient1 mr-1 text-xl' /><strong className='mr-1'>Email: </strong> {contact_information.email}</p>
            
            <p style={{
             display:'-webkit-inline-box'
           }} className='pt-1 items-center text-wrap text-pretty'><IoLocationOutline className='text-gradient1 mr-1 text-2xl'/><b className='mr-1 inline'> Address: </b> {contact_information.address}</p>

          </div>
          
          </div>

          <button onClick={handleJobApply} className='w-full btn h-12 bg-gradient-to-r from-0% from-gradient1 to-gradient2'>Apply Now</button>

        </div>

      </div>

    </div>
  );
};

export default JobDetails;