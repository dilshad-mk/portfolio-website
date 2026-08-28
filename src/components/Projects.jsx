import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

function Projects() {

    const [openProject, setOpenProject] = useState(null)

    const projects = [
        {
            id: 1,
            title: "AIVA",
            type: "AI INTERVIEW PLATFORM",
            description: "AIVA is an AI-powered interview platform designed to automate the initial interview process. It analyzes the candidate's CV and job description, conducts structured AI interviews, and enables real-time voice interaction using speech-to-text and text-to-speech technologies.",
            technologies: [
                "React",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Grok AI",
                "Deepgram TTS",
                "Deepgram STT",
                "REST API",
                "WebSockets"
            ],
            live: "https://aiva-vert.vercel.app/",
            github: "https://github.com/dilshad-mk/Aiva-backend"
        },
        {
            id: 2,
            title: "LUXEMODE",
            type: "E-COMMERCE PLATFORM",
            description: "Luxemode is a modern e-commerce platform focused on delivering a clean and responsive shopping experience. The frontend provides product browsing, product details, filtering, and interactive user interfaces while using JSON Server as a lightweight backend for managing product data.",
            technologies: [
                "React",
                "JavaScript",
                "CSS",
                "JSON Server",
                "REST API"
            ],
            live: "https://luxemode1.netlify.app/",
            github: "https://github.com/dilshad-mk/Luxemode_Frontend"
        }
    ]

    const toggleProject = (id) => {
        setOpenProject(openProject === id ? null : id)
    }

    return (<section
        id='projects'
        className='bg-white w-full min-h-screen py-20 px-10'
    >

        {/* heading */}
        <div className='mb-14'>
            <p className='bg-[#e8eaed] px-3 py-2 rounded-2xl font-mono w-fit'>
                Projects
            </p>

            <h1 className='text-[45px] md:text-[65px] font-mono font-semibold'>
                Things I've Built
            </h1>

            <p className='font-mono text-[20px] md:text-[22px] text-neutral-600 max-w-3xl'>
                A collection of projects where I explore modern technologies,
                solve real-world problems, and turn ideas into functional web
                applications.
            </p>
        </div>


        {/* projects */}
        <div className='w-full'>

            {projects.map((project) => (

                <div
                    key={project.id}
                    className='border-b-2 border-[#00000022] pb-5'
                >

                    {/* project header */}
                    <div
                        onClick={() => toggleProject(project.id)}
                        className='flex justify-between items-center cursor-pointer py-5'
                    >

                        <div className='flex gap-5 items-center'>

                            <p className='flex gap-5 text-[35px] md:text-[40px] font-mono'>
                                <i
                                    className={`bi bi-${project.id}-circle-fill ${project.id === 1
                                            ? 'text-[#ced3d9]'
                                            : 'text-[#96b7c8]'
                                        }`}
                                ></i>

                                <span>{project.title}</span>
                            </p>

                            <span className='hidden md:block text-sm font-mono text-neutral-500'>
                                {project.type}
                            </span>

                        </div>

                        <i
                            className={`bi ${openProject === project.id
                                    ? "bi-dash-lg"
                                    : "bi-plus-lg"
                                } text-[35px] md:text-[40px]`}
                        ></i>

                    </div>


                    {/* project details */}
                    <AnimatePresence>

                        {openProject === project.id && (

                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeInOut"
                                }}
                                style={{ overflow: "hidden" }}
                            >

                                <div className='pb-8 pt-3 pl-0 md:pl-[65px]'>

                                    {/* mobile type */}
                                    <p className='md:hidden font-mono text-sm text-neutral-500 mb-4'>
                                        {project.type}
                                    </p>


                                    {/* description */}
                                    <p className='font-mono text-[18px] md:text-[21px] text-neutral-600 max-w-4xl leading-8'>
                                        {project.description}
                                    </p>


                                    {/* technologies */}
                                    <div className='flex flex-wrap gap-3 mt-6 max-w-4xl'>

                                        {project.technologies.map((tech, index) => (

                                            <span
                                                key={index}
                                                className={`px-4 py-2 rounded-md text-white text-sm font-semibold font-mono ${index % 4 === 0
                                                        ? 'bg-[#ced3d9]'
                                                        : index % 4 === 1
                                                            ? 'bg-[#885fa8]'
                                                            : index % 4 === 2
                                                                ? 'bg-[#96b7c8]'
                                                                : 'bg-[#35858E]'
                                                    }`}
                                            >
                                                {tech}
                                            </span>

                                        ))}

                                    </div>


                                    {/* links */}
                                    <div className='flex flex-wrap gap-4 mt-8'>

                                        <a
                                            href={project.live}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='bg-black text-white px-5 py-3 rounded-full font-mono font-semibold flex items-center gap-3 group'
                                        >
                                            Live Project

                                            <span className='w-7 h-7 bg-white text-black rounded-full flex justify-center items-center'>
                                                <i className="bi bi-arrow-up-right group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"></i>
                                            </span>
                                        </a>


                                        <a
                                            href={project.github}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='border border-black px-5 py-3 rounded-full font-mono font-semibold flex items-center gap-3 group'
                                        >
                                            GitHub

                                            <span className='w-7 h-7 bg-black text-white rounded-full flex justify-center items-center'>
                                                <i className="bi bi-github"></i>
                                            </span>
                                        </a>

                                    </div>

                                </div>

                            </motion.div>

                        )}

                    </AnimatePresence>

                </div>

            ))}

        </div>

    </section>

    )
}

export default Projects
