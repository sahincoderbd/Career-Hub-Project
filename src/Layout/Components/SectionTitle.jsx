import React from 'react';

const SectionTitle = ({title,desc}) => {
  return (
    <div className='text-center py-10 space-y-2 px-2 lg:px-0'>
      <h2 className=' text-2xl lg:text-3xl  font-bold'>{title}</h2>
      <p className='text-base text-gray-400'>{ desc}</p>
    </div>
  );
};

export default SectionTitle;