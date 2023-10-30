import React from 'react';
import p1 from "../component/Media/p1.png";
import p2 from "../component/Media/p2.png";

const CurrentlyWorking = () => {
  return (
    <div className=' mb-12 w-8/12 mx-auto h-1/6' >
    <p className='text-xl font-semibold text-black text-center m-4 border-b-4 w-80 mx-auto border-slate-950 font-mono'>Currently Working Projects</p>
     <div className='grid grid-cols-2 w-full mx-auto gap-4 ' >
        <div className='flex flex-col text-center gap-4  bg-slate-400 rounded-md'>
            <p className='p-2 font-bold'>Full stack</p>
            <img  alt=' ..' src={p1} className='border-black rounded-lg '/>
        </div>
        <div className='flex flex-col text-center gap-4  bg-slate-400 rounded-md'>
            <p className='p-2 font-bold'>Frontend</p>
            <img alt=' ' src={p2} className='border-black rounded-lg '/>
        </div>
     </div>
    </div>
  )
}

export default CurrentlyWorking
