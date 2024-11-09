import { motion } from 'framer-motion'
import React from 'react'
import { Helmet } from 'react-helmet'



function Education() {
    return (
        <div className='pb-4'>
            <Helmet>
                <title>Dennis James Portfolio</title>
                <meta name="description" content="Dennis James Portfolio" />
                <meta name="keywords" content="Dennis James Portfolio" />
            </Helmet>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-20 text-center text-4xl'>Education</motion.h2>
            <div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-stone-400'>08/2019 - 10/2023</p>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold'>Mar Baselios Institute of Technology & Science - <span className='text-sm text-stone-500'>Computer Science Engineering - CGPA : 6.76</span></h3>
                        <p className='mb-4 text-stone-400 underline'>Projects</p>
                        <h5 className='mb-2 font-semibold'>Emergency Hand Sign Translator - <span className='text-sm text-stone-500'>It is created for helping the deaf for better communication</span></h5>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Machine Learning</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Python</span>
                        <h5 className='mt-5 mb-2 font-semibold'>Human Body Health Status System - <span className='text-sm text-stone-500'>It is an android application to monitor health based on the height and weight</span></h5>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>React Native</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>Firebase</span>
                        <span className='mr-2 mt-4 rounded bg-stone-700 px-2 py-1 text-sm font-medium text-stone-300'>NodeJs</span>
                    </motion.div>
                </div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-stone-400'>07/2017 - 03/2019</p>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold'>St Joseph's H.S.S Paingottoor School - <span className='text-sm text-stone-500'>Computer Science - 80.41%</span></h3>
                    </motion.div>
                </div>
                <div className='mb-8 flex flex-wrap lg:justify-center'>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='w-full lg:w-1/4'>
                        <p className='mb-2 text-sm text-stone-400'>06/2016 - 03/2017</p>
                    </motion.div>
                    <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='w-full max-w-xl lg:w-3/4'>
                        <h3 className='mb-2 font-semibold'>St Joseph's H.S Paingottoor School - <span className='text-sm text-stone-500'>96%</span></h3>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Education