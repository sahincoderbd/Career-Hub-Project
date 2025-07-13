import React from 'react';
import Man from './../../assets/images/man.png'
import Button from './Button';
const Hero = () => {
  return (
    <div className="hero pt-16 bg-gradient-to-b bg-[#7E90FE0D] ">
  <div className="hero-content flex-col justify-between lg:flex-row-reverse px-2 lg:p-0 ">
    <img
      src={Man}
      className="self-end flex-1/2 w-[80%] "
    />
    <div className='flex-1/2 p-2 py-5 lg:p-0'>
      <h1 className="text-3xl lg:text-5xl font-bold">One Step Closer To  Your  <span className='text-gradient2'>Dream Job</span></h1>
      <p className="py-6">
      Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <div className='w-30'>
      <Button link='/' text='Get Started'></Button>

        </div>
        </div>
        
  </div>
</div>
  );
};

export default Hero;