import React from 'react'
import roshan from "../component/Media/roshan.jpg";
import {BiCollapseHorizontal} from "react-icons/bi";
import {BiExpandHorizontal} from "react-icons/bi";
import {BiFolderMinus} from "react-icons/bi";
const About = () => {
  return (
    <div className='h-screen' >
      <p className='text-xl font-semibold text-black text-center m-4 border-b-4 w-32 mx-auto border-slate-950 font-mono'>ABOUT ME</p>
      <div className='grid grid-cols-2 w-8/12 mx-auto gap-6 m-6 place-items-center' >
        <div className='grid z-6 ' >
          <img alt=' ...' src={roshan} className='rounded-3xl' />
        </div>
        <div >
          <div className='grid grid-cols-3 gap-1 ' >
            <div className='grid rounded-3xl place-items-center bg-slate-200 border-black  font-mono mx-auto p-8' ><BiCollapseHorizontal size={25}/><p>Expirence </p><p className='text-slate-900 font-semibold'>Freshers</p></div>
            <div className='grid rounded-3xl place-items-center bg-slate-200 border-black  font-mono mx-auto p-8'><BiFolderMinus size={25}/><p>project</p><p className='text-slate-900 font-bold'>5+</p></div>
            <div className='grid rounded-3xl place-items-center bg-slate-200 border-black  font-mono mx-auto p-8'><BiExpandHorizontal size={25}/><p>Open Source</p><p className='text-slate-900 font-bold'>10+</p></div>
          </div>
          <p className='m-4 text-black border-b-2 border-gray-400'>I,m Full stack developer and working as a collage student 2+ year || Backend Developer i
           create more then 6+ node.js projects as collage student within in last 1 year.
           I worked as a backend developer in this Hacktoberfest 2023 with more than 7+ pojects. </p>
           <button className='border bg-slate-900 text-white rounded-full text-center py-4 px-12 font-semibold' >Resume</button>
        </div>
      </div>
    </div>
  ) 
}

export default About
