import React from 'react';

import '../../App.css'

const Breadcumb = ({pageName}) => {
  return (
    <div className='breadcumb lg:pt-40 pt-30 min-h-[250px] lg:min-h-[400px] -mt-16'>
      <h1 className='text-center text-2xl lg:text-5xl font-bold'>{pageName}</h1>
      
    </div>
  );
};

export default Breadcumb;