import React from 'react';
import Button from './Button';

const CommingSoon = () => {
  return (
    <div className='py-10 container flex flex-col justify-center items-center space-y-3'>
        <div className="inline-grid *:[grid-area:4/4] text-5xl text-center ">
        <div className="status status-error animate-ping"></div>
        <div className="status status-error"></div>
      </div><p style={{
          lineHeight:'50px'
      }} className='bg-linear-to-r from-gradient1 to-gradient2 bg-clip-text text-3xl lg:text-4xl text-transparent font-bold  '> Working On this</p>
      <div>
      <Button text='Go Back Home' link='/'></Button>

      </div>
          </div>
  );
};

export default CommingSoon;