import React from 'react';
import roshan from "../component/Media/roshan.jpg";
import {AiFillGithub} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
// import {FaXTwitter} from "react-icons/FaX";
import {BiLogoDiscordAlt} from "react-icons/bi";
import TSkill from './TSkill';
import BottomBar from '../component/common/Bottom';
import About from './About';
import Projects from './Projects';
import CurrentlyWorking from './CurrentlyWorking';

const Home = () => {
  return (
    <div className='bg-white'>
      <div className='h-screen w-9/12 mb-6 mt-12 mx-auto' >
        
      
        <div className='grid grid-cols-3 w-full  border-black mx-auto h-1/2  place-items-center p-6 gap-x-4 rounded-full'>
          <div className='flex flex-col text-black gap-6 text-lg place-items-end border-l-4 border-slate-900 mx-auto' > 
          {/* Icon */}
           
            <a href="https://github.com/RoshanAnsy"><AiFillGithub size={25} className='hover:scale-110 fill-black'/></a>
            <a href="https://www.linkedin.com/in/roshan-kr-11070b1a3/"><AiFillLinkedin size={25} className='hover:scale-110 fill-blue-700'/></a>
            <a href="..."><BiLogoDiscordAlt size={25} className='hover:scale-110 fill-indigo-500'  /></a>
            
            {/* <FaXTwitter/> */}
            
          </div>
          <div className='flex flex-col text-black text-start gap-2' >
            <h2 className='text-3xl font-semibold' >Hi I am Roshan</h2>
            <h4 className='text-2xl'>I'm full stack web developer</h4>
            <p>I,m a Full-stack developer with a special focus on Backend part with extra sequrity for ours user data and extra feture provide with the time 
            and ensuring users have a stress-free experience when navigating through any application.</p>
          </div>
          <div>
            {/* image */}
            <img  alt='..' src={roshan} sizes={30} className='rounded-full'/>
          </div>
        </div>
        <CurrentlyWorking/>
      </div>
      <div>
        <TSkill/>
        <About/>
        <Projects/>
        <BottomBar/>
      </div>
    </div>
  )
}
export default Home;
