import React from 'react';

const Card = ({img,title,desc}) => {
  return (
    <div className='p-5 lg:p-8 rounded-lg bg-gradient-to-r from-[#7E90FE0F] to-[#9873FF0F] flex-1 space-y-2'>
      <img className='p-2 lg:p-4 bg-gradient-to-r from-[#7E90FE0F] to-[#9873FF0F] rounded-lg' src={img} alt="" />
      <h3 className='text-2xl font-bold'>{title}</h3>
      <p className='text-gray-400 text-base'>{ desc}</p>
    </div>
  );
};

export default Card;