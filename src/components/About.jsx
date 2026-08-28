import React, { useState } from 'react'
import { easeIn, easeInOut, motion, AnimatePresence } from 'motion/react';

function About() {

   const [isSkillOpen, setSkillOpen] = useState(false);
   const [isEducationOpen, setEducatiionOpen] = useState(false)
   const [isExperienceOpen, setExperienceOpen] = useState(false)

  return (
    <div id='about' 
    className='bg-[#e8eaed] w-full h-full flex md-custom:flex-row flex-col justify-between gap-10  py-20 px-10'>
{/* left side content goes here ----- */}
      <div className='flex flex-col w-full '>

        <p className='bg-white px-3 py-2 rounded-2xl font-mono w-fit'>About Me</p>
        <h1 className='text-[45px] font-mono font-semibold'>Hello, I'm Dilshad</h1>
        <p className='font-mono text-[21px] text-neutral-600 break-words'>MERN Stack Developer skilled in MongoDB, Express, React, and Node.js, focused on building modern,  scalable, and user-friendly web applications.  Passionate about learning, building meaningful solutions and solving real-world problems through code.
</p>


      </div>


      {/* right side contnet goes here ------- */}
      <div className='flex flex-col w-full'>

        {/* skillls , education etc--  */}
        <div>
          
          {/* 1st section---- */}
          <div className='border-b-2 border-[#00000022] pb-3' onClick={()=>{setSkillOpen(!isSkillOpen)}}>
            {/* top section not hidden */}
           <div className='flex justify-between items-center '>
            <p className='flex gap-5 text-[40px] font-mono'><i className="bi bi-1-circle-fill text-[#ced3d9]"></i><span> Skills</span></p>
           <i className={`bi   ${isSkillOpen ? "bi-dash-lg" : "bi-plus-lg"} text-[40px]`}></i>
           </div>
            {/* bottom discription  hidden by default  */}
            <AnimatePresence>
       {isSkillOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
      className="grid grid-cols-3 gap-3 items-center"
    >


            <p className='bg-[#ced3d9] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>HTML5</p>
            <p className='bg-[#885fa8] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>CSS3</p>
            <p className='bg-[#96b7c8] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>JavaScript</p>
            <p className='bg-[#daea56] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>React.js</p>
            <p className='bg-[#E03F4F] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>Next.js</p>
            <p className='bg-[#346739] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>Motion</p>
            <p className='bg-[#35858E] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>Context</p>
            <p className='bg-[#D552A3] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>Redux</p>
            <p className='bg-[#F9D0CD] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>Zustand</p>
            <p className='bg-[#8a7dff] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>Express.js</p>
            <p className='bg-[#2d7d46] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>MongoDB</p>
            <p className='bg-[#3b82f6] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>Node.js</p>
            <p className='bg-[#f97316] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>Git</p>
            <p className='bg-[#38bdf8] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>Tailwind</p>
            <p className='bg-[#7c3aed] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>Bootstrap</p>
            <p className='bg-[#f59e0b] text-white text-sm font-semibold font-mono px-3 py-2 rounded-md'>Axios</p>
           </motion.div>
             )}
</AnimatePresence>

          </div>


          {/* 2nd section---- */}
          <div className='border-b-2 border-[#00000022] pb-3' onClick={()=>{setEducatiionOpen(!isEducationOpen)}}>
            {/* top section not hidden */}
           <div className='flex justify-between items-center '>
            <p className='flex gap-5 text-[40px] font-mono'><i className="bi bi-2-circle-fill text-[#96b7c8]"></i><span> Education</span></p>
           <i className={`bi   ${isEducationOpen ? "bi-dash-lg" : "bi-plus-lg"} text-[40px]`}></i>
           </div>
            {/* bottom discription  hidden by default  */}
            <AnimatePresence>
       {isEducationOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
      className="grid grid-cols-3 gap-3 items-center"
    >

          <p className='w-[330PX] text-[20px] font-mono font-semibold'>
            Bsc Computer Science <br />
            <span className='text-neutral-700'> Calicut Univercity | 2022-25</span>
          </p>
     
           </motion.div>
             )}
</AnimatePresence>

          </div>


          {/* 3rd section---- */}
          <div className='border-b-2 border-[#00000022] pb-3' onClick={()=>{setExperienceOpen(!isExperienceOpen)}}>
            {/* top section not hidden */}
           <div className='flex justify-between items-center '>
            <p className='flex gap-5 text-[40px] font-mono'><i className="bi bi-3-circle-fill text-[#885fa8]"></i><span> Experience</span></p>
           <i className={`bi   ${isExperienceOpen ? "bi-dash-lg" : "bi-plus-lg"} text-[40px]`}></i>
           </div>
            {/* bottom discription  hidden by default  */}
            <AnimatePresence>
       {isExperienceOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
      className="grid grid-cols-3 gap-3 items-center"
    >

          <p className='w-[330PX] text-[20px] font-mono font-semibold'>
            MERN Stack Developer Intern <br />
            <span className='text-neutral-700'>Cyber Square | 2025</span>
          </p>
     
           </motion.div>
             )}
</AnimatePresence>

          </div>


        </div>



      </div>

    </div>
  )
}

export default About