import { motion } from 'framer-motion'
import React from 'react'
import { Helmet } from 'react-helmet'



function Experience() {
    return (
        <div className='pb-4'>
            <Helmet>
                <title>Dennis James Portfolio</title>
                <meta name="description" content="Dennis James" />
                <meta name="keywords" content="Dennis James" />
            </Helmet>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Experience</motion.h2>
            <div>
            <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-stone-400'>03/2025 - Present</p>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold'>Jr Mern Stack Developer - <span className='text-sm text-stone-500'>Wisbato</span></h3>
                        <p className='mb-4 text-stone-400'>
                        I contributed as a Junior Software Developer to CRM-based trading web applications, supporting local client needs. My responsibilities included frontend and backend development using the MERN stack, implementing user interfaces, integrating APIs, and handling data management tasks.

During my time here, I strengthened my skills in TypeScript, React with Vite, and backend integration, and gained practical experience in admin panel design, permission-based user management, and project structuring. I also learned to collaborate effectively in a fast-paced team environment, ensuring project scalability and maintainability.</p>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Next Js</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Mern</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Typescript</span>
                    </motion.div>
                </div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-stone-400'>11/2024 - 01/2025</p>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold'>Software Developer - <span className='text-sm text-stone-500'>Clovers net solution</span></h3>
                        <p className='mb-4 text-stone-400'>
I’ve been working on a professional educational app for a client named Skill Clovers. The app is built using React Native and Expo CLI, with a focus on delivering domain-specific courses. I’ve implemented features like domain and goal-based course categorization, a module system for learning materials, and integrated Razorpay for secure payments. The app offers tiered payment options, granting different levels of access to course videos. I’ve also designed a scalable backend with efficient schemas for domains, courses, and payments, ensuring the app can grow with the client’s needs.</p>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>React Native</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>MongoDB</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Node.js</span>
                    </motion.div>
                </div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-stone-400'>02/2024 - 08/2024</p>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold'>Full Stack Web Developer Intern - <span className='text-sm text-stone-500'>Luminar Technolab</span></h3>
                        <p className='mb-4 text-stone-400'>Developed and maintained web applications using Mearn stack.Designed and implemented RESTful APIs for
                            data communication.Collaborated with cross-functional teams to deliver high quality software products on schedule.</p>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Javascript</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Vercel</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Github</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Render</span>
                    </motion.div>
                </div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-stone-400'>04/2020 - 01/2022</p>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold'>Data Entry Clerk (Part-time) - <span className='text-sm text-stone-500'>Live Associates</span></h3>
                        <p className='mb-4 text-stone-400'>Live Associates involved collaborating with a dynamic team, where you honed your skills in client interaction and project management. This experience enriched your professional development and deepened your understanding of the industry, preparing you for future challenges.</p>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>MS WORD</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>EXCEL</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Adobe Photoshop</span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Experience