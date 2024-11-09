import React from 'react'
import myphoto from '../assets/myphoto.jpeg'
import My_Resume from '../assets/My_Resume.pdf'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'



function Hero() {
    const containerVarients = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
                staggerChildren: 0.5
            }
        }
    }
    const childVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }
    return (
        <div className='pb-4 lg:mb-36'>
            <Helmet>
                <title>Dennis James Portfolio</title>
                <meta name="description" content="Dennis James Portfolio" />
                <meta name="keywords" content="Dennis James Portfolio" />
            </Helmet>
            <div className='flex flex-wrap lg:flex-row-reverse'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex justify-center lg:p-8'>
                        <motion.img src={myphoto} alt="photo" className='border border-stone-900 rounded-3xl' width={600} height={600} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 1.5 }} />
                    </div>
                </div>
                <div className='w-full pl-10 lg:w-1/2'>
                    <motion.div initial="hidden" animate="visible" variants={containerVarients} className='flex flex-col items-center lg:items-start mt-10'>
                        <motion.h2 variants={childVariants} className='pb-2 text-4xl tracking-tighter lg:text-7xl'>Dennis James</motion.h2>
                        <motion.span variants={childVariants} className='bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent mt-5'>Full Stack Developer</motion.span>
                        <motion.p variants={childVariants} className='my-2 max-w-lg py-6 text-l leading-relaxed tracking-tighter'>I'm a Full Stack Web Developer skilled in using the MEARN stack (MongoDB, Express, React, Angular, Node.js) to create dynamic, user-focused web applications. My work includes implementing essential features such as authentication, CRUD functionality, and role-based access control.
                            With a strong grasp of frontend technologies like React, Bootstrap, and Tailwind CSS, I build responsive, intuitive interfaces. On the backend, I’m experienced with both MySQL and MongoDB, allowing me to work across different database systems.
                            I’m passionate about problem-solving and always eager to learn new technologies, delivering scalable, efficient solutions while embracing new challenges.
                        </motion.p>
                        <motion.a variants={childVariants} href="./src/assets/My_Resume.pdf" target='_blank' download={My_Resume.pdf} className='bg-white rounded-full p-4 text-sm text-stone-800 mb-10'>Resume</motion.a>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero