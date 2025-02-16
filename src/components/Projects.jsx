import React from 'react'
import burger from '../assets/burger.jpg'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet'


function Projects() {
    return (
        <div className='pb-4'>
            <Helmet>
                <title>Dennis James Portfolio</title>
                <meta name="description" content="Dennis James Portfolio" />
                <meta name="keywords" content="Dennis James Portfolio" />
            </Helmet>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Projects</motion.h2>
            <div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <a href="https://clones-wheat.vercel.app/" target='_blank'><img src="https://www.cnet.com/a/img/resize/b3d77540535b980192421ac4d1aa5687dc1d1eaa/hub/2022/10/03/10a0d96d-1b0b-4f8f-ba3b-b893d21edb65/prime-video.jpg?auto=webp&fit=crop&height=675&width=1200" alt="image" width={450} height={450} className='mb-6 rounded' /></a>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold text-2xl pl-10'>React-Clone Website</h3>
                        <p className='mb-4 text-stone-400 pt-5 pl-10'>
                            It replicates core features of a modern web application, showcasing functionality like dynamic routing, user authentication, and responsive UI. It includes role-based access control, enabling admins to manage content, while regular users can interact with the site’s features.
                        </p>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300 ml-10'>HTML</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>CSS</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>Bootstrap</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>React</span>
                    </motion.div>
                </div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <a href="https://travel-psi-three.vercel.app/" target='_blank'><img src="https://img.freepik.com/free-vector/gradient-texture-travel-agency-landing-page_23-2149342695.jpg" alt="image" width={450} height={450} className='mb-6 rounded' /></a>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold text-2xl pl-10'>Travel Website</h3>
                        <p className='mb-4 text-stone-400 pt-5 pl-10'>
                            The travel website project provides a user-friendly platform for exploring destinations and booking trips. It features dynamic search filters, detailed travel guides, and a responsive design to make trip planning easy and engaging.
                        </p>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300 ml-10'>HTML</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>CSS</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>Bootstrap</span>
                    </motion.div>
                </div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <a href="https://nursing-myown.vercel.app/" target='_blank'><img src="https://5.imimg.com/data5/SELLER/Default/2021/5/MQ/MM/YJ/103386446/8e9d6085-108c-431b-a6f9-f95195cdca18.jpg" alt="image" width={450} height={450} className='mb-6 rounded' /></a>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold text-2xl pl-10'>Nursing Agency Website</h3>
                        <p className='mb-4 text-stone-400 pt-5 pl-10'>
                            A nursing agency website built with React and Tailwind CSS provides a clean, user-friendly interface showcasing the company's services, team members, and contact information. With responsive design and simple navigation, helping customers find the nursing services they need.
                        </p>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300 ml-10'>React</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>Tailwind CSS</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>Framer Motion</span>
                    </motion.div>
                </div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <a href="https://rebuild-ebook-frontend.vercel.app/" target='_blank'><img src="https://t4.ftcdn.net/jpg/03/82/70/23/360_F_382702387_6cF0iYIJtuVOlzHx8HqypqJnLXIuD9QA.jpg" alt="image" width={450} height={450} className='mb-6 rounded' /></a>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold text-2xl pl-10'>E-Book</h3>
                        <p className='mb-4 text-stone-400 pt-5 pl-10'>
                            Bookstore website allows users to browse and manage books. Admins can add, edit, or delete books, while regular users can view and interact with the available collection. The site features a clean, modern UI with role-based access control for enhanced user management.
                        </p>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300 ml-10'>MongoDB</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>Express</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>React</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>NodeJS</span>
                    </motion.div>
                </div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <a href="https://weather-five-wheat.vercel.app/" target='_blank'><img src="https://cdn.dribbble.com/userupload/9745588/file/original-75ee0ad604cd78d220b32090ce8499e4.png?resize=752x" alt="image" width={450} height={450} className='mb-6 rounded' /></a>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold text-2xl pl-10'>Weather Application</h3>
                        <p className='mb-4 text-stone-400 pt-5 pl-10'>
                            The weather application project delivers real-time weather updates with location-based forecasts. It features a clean, responsive design, displaying current conditions, temperature, and future forecasts for user-selected cities.
                        </p>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300 ml-10'>Redux</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>API</span>
                        <span className='mr-2 rounded bg-stone-700 p-2 text-sm font-medium text-stone-300'>Javascript</span>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Projects