import React from 'react'
import {motion, stagger} from "motion/react"
function HeroSection() {


 const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.5,
        staggerDirection:-1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
    id='home' 
      className='w-full min-h-screen  bg-white overflow-x-hidden'
      style={{  
        backgroundImage: `radial-gradient(circle at 1px 1px, rgb(71, 85, 105) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      
      }}
    >

        {/* content ---------  */}
      <motion.div
            variants={containerVariants}
  initial="hidden"
  animate="visible"
  exit="hidden"
      className="flex flex-col-reverse xl-custom:flex-row items-center w-full min-h-full pt-[152px] justify-evenly md:!px-14 px-5 gap-14 xl-custom:gap-0 md:overflow-hidden pb-4">
        {/* left-----content--------  */}
       <motion.div
     
  
           
       className='xl-custom:w-[50%] h-full flex  flex-col justify-center '>
     <motion.h1
     

    variants={itemVariants}
     className='font-mono text-[50px] xl-custom:text-[120px] font-bold '>
        Dilshad
     </motion.h1>
     <motion.p
       variants={itemVariants}
     className='font-mono md:w-[70%] md:text-[30px] text-[20px] md:leading-10 text-slate-500'>
        MERN Stack Developer focused on building modern web applications with React, Node.js, Express.js, and MongoDB. I turn ideas into reliable, scalable, and user-friendly digital solutions.
     </motion.p>
    
         <motion.button
        variants={itemVariants} 
         className='bg-black w-fit h-12 py-2 pl-3 px-1 rounded-full flex gap-8 items-center mt-9 font-mono group'><span className='text-white font-bold '>Let's Connect </span> 
     
     <span className='w-10 border h-10 flex justify-center items-center rounded-full  top-0 right-[-50px] bg-white'>
        <i className="bi bi-arrow-right absolute group-hover:translate-x-1 transition-all ease-in-out duration-300"></i>
        
     </span>
     </motion.button>
    
       </motion.div>


{/* right --------------- */}
       <motion.div
       variants={itemVariants}
       className=" bg-[url('/images/profile-pic.jpeg')] bg-cover h-[250px] w-[250px] bg-cover bg-center rounded-full md:h-[350px] md:w-[350px] relative " 
      
       >
       {/* rotating overlay for image --------- */}
         <motion.div
           animate={{
            rotate:-40,
           
           }}
           transition={{
            ease:"linear",
            repeat:Infinity,
            duration:5
          
           }}
         className='absolute h-[350px] w-[350px] top-[-48px] right-[-49px] border border-dashed border-slate-400 rounded-full md:right-[-48px] md:top-[-48px] md:h-[450px] md:w-[450px] overflow-x-hidden '>

         </motion.div>
         <motion.div
           animate={{
            rotate:40,
           
           }}
           transition={{
            ease:"linear",
            repeat:Infinity,
            duration:5
          
           }}
         className='absolute h-[300px] w-[300px] top-[-24px] right-[-24px] border border-dashed border-slate-400 rounded-full md:right-[-25px] md:top-[-25px] md:h-[400px] md:w-[400px] overflow-hidden '>

         </motion.div>
        
            <span className='bg-[#e8eaed] md:py-[10px] px-[5px] md:px-[30px] py-[5px] rounded-3xl font-bold font-mono text-white top-0 left-[-40px] absolute '>
              NODE.JS</span>
            <span className='bg-[#885fa8] md:py-[10px] px-[5px] md:px-[30px] py-[5px] rounded-3xl font-bold font-mono text-white absolute md:top-[100px] md:right-[-90px]  right-[-40px] top-[50px]'>
              EXPRESS.JS</span>
            <span className='bg-[#96c89f] md:py-[10px] px-[5px] md:px-[30px] py-[5px] rounded-3xl font-bold font-mono text-white absolute md:top-[200px] md:left-[-145px] left-[-75px] top-[200px]'>
              MONGODB</span>
            <span className='bg-[#daea56] md:py-[10px] px-[5px] md:px-[30px] py-[5px] rounded-3xl font-bold font-mono text-white absolute bottom-0 md:left-[300px] left-[230px] '>
              React</span>
       </motion.div>

          
      </motion.div>
    </section>
  )
}

export default HeroSection