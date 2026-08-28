
import React, { useRef, useState } from 'react'
import { motion } from 'motion/react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()
  const [sending, setSending] = useState(false)
  const [status, setStatus] = useState('')

  const sendEmail = (e) => {
    e.preventDefault()

    setSending(true)
    setStatus('')

    emailjs
      .sendForm(
        'service_60nvv46',
        'template_fa4jsqh',
        form.current,
        'bNf7RYDMab_szay4m'
      )
      .then(
        () => {
          setStatus('Message sent successfully!')
          setSending(false)
          form.current.reset()
        },
        () => {
          setStatus('Failed to send message. Please try again.')
          setSending(false)
        }
      )
  }

  return (
    <section
      id='contact'
      className='bg-[#e8eaed] w-full min-h-screen py-20 px-10'
    >

      {/* heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='mb-14'
      >

        <p className='bg-white px-3 py-2 rounded-2xl font-mono w-fit'>
          Contact Me
        </p>

        <h1 className='text-[45px] md:text-[65px] font-mono font-semibold'>
          Let's Work Together
        </h1>

        <p className='font-mono text-[20px] md:text-[22px] text-neutral-600 max-w-2xl'>
          Have a project in mind or looking for a developer to work with?
          Feel free to reach out. I'm always open to discussing new ideas,
          projects, and opportunities.
        </p>

      </motion.div>


      {/* content */}
      <div className='flex flex-col lg:flex-row gap-14'>

        {/* left side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='w-full lg:w-[40%]'
        >

          <div className='border-b-2 border-[#00000022] py-5'>

            <p className='font-mono text-sm text-neutral-500'>
              EMAIL
            </p>

            <a
              href='mailto:dilshadmk18@gmail.com'
              className='font-mono text-[20px] md:text-[24px] font-semibold hover:text-neutral-500 transition-all'
            >
              dilshadmk18@gmail.com
            </a>

          </div>


          <div className='border-b-2 border-[#00000022] py-5'>

            <p className='font-mono text-sm text-neutral-500'>
              LOCATION
            </p>

            <p className='font-mono text-[20px] md:text-[24px] font-semibold'>
              Kerala, India
            </p>

          </div>


          <div className='border-b-2 border-[#00000022] py-5'>

            <p className='font-mono text-sm text-neutral-500'>
              SOCIALS
            </p>

            <div className='flex gap-5 mt-3'>

              <a
                href='https://github.com/dilshad-mk'
                target='_blank'
                rel='noopener noreferrer'
                className='w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-all'
              >
                <i className='bi bi-github text-xl'></i>
              </a>

              <a
                href='https://www.linkedin.com/in/dilshad7'
                target='_blank'
                rel='noopener noreferrer'
                className='w-11 h-11 bg-black text-white rounded-full flex items-center justify-center hover:scale-105 transition-all'
              >
                <i className='bi bi-linkedin text-xl'></i>
              </a>

            </div>

          </div>

        </motion.div>


        {/* right side form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='w-full lg:w-[60%]'
        >

          <form
            ref={form}
            onSubmit={sendEmail}
            className='flex flex-col gap-6'
          >

            <div className='flex flex-col gap-2'>

              <label className='font-mono font-semibold'>
                Name
              </label>

              <input
                type='text'
                name='name'
                placeholder='Your name'
                required
                className='w-full bg-white border-none outline-none rounded-xl px-5 py-4 font-mono text-lg'
              />

            </div>


            <div className='flex flex-col gap-2'>

              <label className='font-mono font-semibold'>
                Email
              </label>

              <input
                type='email'
                name='email'
                placeholder='Your email'
                required
                className='w-full bg-white border-none outline-none rounded-xl px-5 py-4 font-mono text-lg'
              />

            </div>


            <div className='flex flex-col gap-2'>

              <label className='font-mono font-semibold'>
                Message
              </label>

              <textarea
                name='message'
                rows='6'
                placeholder='Tell me about your project...'
                required
                className='w-full bg-white border-none outline-none rounded-xl px-5 py-4 font-mono text-lg resize-none'
              ></textarea>

            </div>


            <button
              type='submit'
              disabled={sending}
              className='bg-black w-fit h-12 py-2 pl-5 pr-1 rounded-full flex gap-8 items-center font-mono group disabled:opacity-60'
            >

              <span className='text-white font-bold'>
                {sending ? 'Sending...' : 'Send Message'}
              </span>

              <span className='w-10 h-10 flex justify-center items-center rounded-full bg-white'>

                <i className='bi bi-arrow-right group-hover:translate-x-1 transition-all ease-in-out duration-300'></i>

              </span>

            </button>


            {status && (
              <p className='font-mono text-sm text-neutral-600'>
                {status}
              </p>
            )}

          </form>

        </motion.div>

      </div>

    </section>
  )
}

export default Contact

