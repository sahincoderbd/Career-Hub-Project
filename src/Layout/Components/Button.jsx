import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({link,text}) => {
  // console.log(link,text);
  return (
    <>
      <NavLink to={link} className=" text-white w-full btn h-12 bg-gradient-to-r from-0% from-gradient1 to-gradient2">{ text}</NavLink>
    </>
  );
};

export default Button;