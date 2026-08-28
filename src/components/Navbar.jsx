import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"
import { useEffect } from 'react';

function Navbar() {
     const [hidden, setHidden] = useState(false);
     const [isOpen, setIsOpen] = useState(false); // Mobile menu state
     const { scrollY } = useScroll();

     useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150) {
            setHidden(true);
        }
        else {
            setHidden(false);
        }
     });

    //  section toggle------
    const [active,setActive] = useState ("home");

     const scrollToSection = (id) => {
  const section = document.getElementById(id);
  section?.scrollIntoView({ behavior: "smooth" });
  
};
// ---------


    
  return (
    <motion.nav
       variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
       }}
       animate={hidden ? "hidden" : "visible"}
       transition={{
        duration: 0.35, 
        ease: "easeInOut"
       }}
       className='flex justify-between md-custom:px-20 px-6 h-20 items-center fixed top-0 left-0 right-0 z-50 bg-white shadow-md'
    >
        {/* left */}
       <div>
         <h2 className='font-bold text-[20px] font-mono'>Developer</h2>
       </div>

       {/* mid - Desktop Menu */}
        <ul className='hidden md-custom:flex gap-14 font-mono font-bold text-[19px]'>
          {/* home-- */}
            <motion.li
            onClick={() => {scrollToSection("home") ;setActive("home");}}

             whileHover={{
                rotateX: 30,
                textShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" 
             }}
             transition={{
                duration: 0.6,
                ease: "easeInOut"
             }}
             style={{
                transformStyle: "preserve-3d",
                perspective: 1000
             }}
             className={`${active === "home" ? "bg-black text-white px-3 rounded-xl cursor-pointer transition-all duration-300" : "transition-all duration-300 cursor-pointer"}`}
            >
                Home <i className="bi bi-arrow-down text-[15px]"></i>
            </motion.li>

            {/* about------- */}
            <motion.li
            onClick={() => {scrollToSection("about") ;setActive("about");}}
             whileHover={{
                rotateX: 30,
                textShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" 
             }}
             transition={{
                duration: 0.6,
                ease: "easeInOut"
             }}
             style={{
                transformStyle: "preserve-3d",
                perspective: 1000
             }}
             className={`${active === "about" ? " bg-black text-white px-3 rounded-xl transition-all duration-300 cursor-pointer" : "cursor-pointer transition-all duration-300"}`}
            >
                About <i className="bi bi-arrow-down text-[15px]"></i>
            </motion.li>
 
  {/* projects-------- */}
            <motion.li
            onClick={() => {scrollToSection("projects") ;setActive("projects");}}
              whileHover={{
                rotateX: 30,
                textShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" 
             }}
             transition={{
                duration: 0.6,
                ease: "easeInOut"
             }}
             style={{
                transformStyle: "preserve-3d",
                perspective: 1000
             }}
             className={`${active === "projects" ? "bg-black text-white px-3 cursor-pointer rounded-xl transition-all duration-300" : "cursor-pointer transition-all divide-purple-300" }`}
            >
                Projects <i className="bi bi-arrow-down text-[15px]"></i>
            </motion.li>


{/* contact--- */}
            <motion.li
            onClick={()=>{scrollToSection("contact"); setActive("contact");}}
                whileHover={{
                rotateX: 30,
                textShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)" 
             }}
             transition={{
                duration: 0.6,
                ease: "easeInOut"
             }}
             style={{
                transformStyle: "preserve-3d",
                perspective: 1000
             }}
             className={`${active === "contact" ? "bg-black px-3 rounded-xl text-white cursor-pointer transition-all duration-300" : "cursor-pointer transition-all duration-300"}`}
            >
                Contact <i className="bi bi-arrow-down text-[15px]"></i>
            </motion.li>
        </ul>
       
       {/* right - Name (hidden on mobile) */}
       <div className='hidden md-custom:block'>
        <p className='font-mono text-[17px] text-slate-400 font-bold'>Dilshad M K</p>
       </div>

       {/* Hamburger Menu - Mobile Only */}
       <button 
         onClick={() => setIsOpen(!isOpen)}
         className='md-custom:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-50'
         aria-label="Toggle menu"
       >
         <motion.span
           animate={{
             rotate: isOpen ? 45 : 0,
             y: isOpen ? 8 : 0,
           }}
           transition={{ duration: 0.3 }}
           className='w-7 h-0.5 bg-black block'
         />
         <motion.span
           animate={{
             opacity: isOpen ? 0 : 1,
           }}
           transition={{ duration: 0.3 }}
           className='w-7 h-0.5 bg-black block'
         />
         <motion.span
           animate={{
             rotate: isOpen ? -45 : 0,
             y: isOpen ? -8 : 0,
           }}
           transition={{ duration: 0.3 }}
           className='w-7 h-0.5 bg-black block'
         />
       </button>

       {/* Mobile nav-- */}
     <AnimatePresence>


  <motion.div
       
       initial={{
        x:"100%",
       }}
       animate={{
        x: isOpen ? 0 : "100%"
       }}
       exit={{
        x:"100%",
      
       }}
       transition={{
        duration:0.4 , ease:"easeInOut"
       }}
       className={`md-custom:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
       onClick={() => setIsOpen(false)}
       >
        <motion.div
         initial={{ x: "100%" }}
         animate={{ x: isOpen ? "20%" : "100%" }}
         transition={{ duration: 0.3, ease: "easeInOut" }}
         className=' px-12 md-custom:hidden fixed top-0 right-0 bottom-0 w-[75%] bg-white z-40 shadow-2xl'
       >
         <ul className='flex flex-col gap-8 font-mono font-bold text-[19px] mt-[120px]'>
           <li className='cursor-pointer border-b border-gray-200 pb-4'
            onClick={() => {scrollToSection("home")}}
           >
             Home
           </li>
           <li className='cursor-pointer border-b border-gray-200 pb-4' onClick={() => {scrollToSection("about")}}>
             About
           </li>
           <li className='cursor-pointer border-b border-gray-200 pb-4' onClick={() => {scrollToSection("projects")}}>
             Projects
           </li>
           <li className='cursor-pointer border-b border-gray-200 pb-4' onClick={() => {scrollToSection("contact"); setActive("contact"); setIsOpen(false);}}>
             Contact
           </li>
           <li className='text-slate-400 pt-4'>
             Dilshad M K
           </li>
         </ul>
       </motion.div>
       </motion.div>

     </AnimatePresence>

    </motion.nav>
  )
}

export default Navbar