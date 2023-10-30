import React from 'react'
import p1 from "../component/Media/p1.png";
import p2 from "../component/Media/p2.png";
const Projects = () => {
  return (
    <div className='  h-screen ' >
    <p className='text-xl font-semibold text-black text-center m-4 border-b-4 w-24 mx-auto border-slate-950 font-mono'>PROJECTS</p>

     <div className='grid grid-cols-2 w-8/12 mx-auto gap-4' >
        <div className='flex flex-col text-center gap-4 bg-slate-400 rounded-md'>
            <p className='p-2 font-bold'>Full stack</p>
            <img src={p1} className='border-black border-b rounded-lg p-1'/>
            <p className='text-lg text-slate-900 border-b p-1'><span className='text-black font-semibold text-md'>Tech Stack:-</span> React.js Tailwind node.js express.js mongodb cloundnary npm react-icons Axios Redux </p>
        </div>
        <div className='flex flex-col text-center gap-4  bg-slate-400 rounded-md'>
            <p className='p-2 font-bold'>Frontend</p>
            <img src={p2} className='border-black border-b rounded-lg p-1'/>
            <p className='text-xl bo text-slate-900 rder-b'><span className='text-black font-semibold text-md'>Tech Stack:-</span> React.js Tailwind node.js npm react-icons Redux </p>
        </div>
     </div>
    </div>
  ) 
}

export default Projects;
