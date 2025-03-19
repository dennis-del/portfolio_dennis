import { motion } from 'framer-motion'
import React from 'react'
import { Helmet } from 'react-helmet'


function Contact() {
  return (
    <div className='border-t border-stone-700 pb-20'>
      <Helmet>
        <title>Dennis James Portfolio</title>
        <meta name="description" content="Dennis James" />
        <meta name="keywords" content="Dennis James" />
      </Helmet>
      <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className='my-10 text-center text-4xl'>Contact Info</motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1 }} className='my-4'>
          Mooleplakkal(H),Paingottooor(P.O),Paingottooor,686671
        </motion.p>
        <motion.p whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 1 }} className='my-4'>
          +91 7559839905
        </motion.p>
        <a href="#" className='border-b'>dennisjames991@gmail.com</a>
      </div>
    </div>
  )
}

export default Contact