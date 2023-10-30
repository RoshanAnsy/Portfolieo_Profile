import React from 'react';
import { NavLink } from 'react-router-dom';
import {BsFillFilePersonFill} from "react-icons/bs"
import {BsFillHSquareFill} from "react-icons/bs";
import {BsUnion} from "react-icons/bs";
import {BiExtension} from "react-icons/bi";
import {BiShapeCircle} from "react-icons/bi";
const Navbar = () => {
  return (
    <div className='relative mb-12' >
      <nav  className='flex justify-evenly shadow-lg fixed  w-full top-0 bg-slate-800 mx-auto place-items-center p-4 text-white'>
        <ul>
          <li ><NavLink to="/" > <BsUnion size={18} className='mx-auto'/></NavLink></li>
        </ul>
        <ul className='flex gap-x-12' > 
            <li> <NavLink  to="home"  > <BsFillHSquareFill size={20} className='mx-auto'/></NavLink> </li>
            <li><NavLink  to="about" > <BsFillFilePersonFill size={20} className='mx-auto'/></NavLink></li>
            <li><NavLink  to="skill" > <BiExtension size={25} className='mx-auto'/></NavLink></li>
            <li><NavLink  to="project" > <BiShapeCircle size={25} className='mx-auto'/></NavLink></li>
        </ul>
      </nav>
    </div>
  )
}
 export default Navbar;
