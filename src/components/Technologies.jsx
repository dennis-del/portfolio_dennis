import { faAngular, faBootstrap, faCss3, faFigma, faGithub, faHtml5, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import React from 'react'
import { Helmet } from 'react-helmet'



function Technologies() {
    const iconVarients = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: 'linear',
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    })
    return (
        <div className='pb-24'>
            <Helmet>
                <title>Dennis James Portfolio</title>
                <meta name="description" content="Dennis James" />
                <meta name="keywords" content="Dennis James" />
            </Helmet>
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 1.5 }} className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }} className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div initial="initial" animate="animate" variants={iconVarients(2.5)}>
                    <FontAwesomeIcon icon={faReact} className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVarients(3)} className='p-4'>
                    <FontAwesomeIcon icon={faJs} className='text-7xl text-yellow-400' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVarients(5)} className='p-4'>
                    <FontAwesomeIcon icon={faBootstrap} className='text-7xl text-violet-400' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVarients(2)} className='p-4'>
                    <FontAwesomeIcon icon={faNodeJs} className='text-7xl text-green-400' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVarients(6)} className='p-4'>
                    <FontAwesomeIcon icon={faHtml5} className='text-7xl text-orange-400' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVarients(4)} className='p-4'>
                    <FontAwesomeIcon icon={faCss3} className='text-7xl text-blue-400' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVarients(6.5)} className='p-4'>
                    <FontAwesomeIcon icon={faFigma} className='text-7xl text-pink-400' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVarients(3.5)} className='p-4'>
                    <FontAwesomeIcon icon={faPython} className='text-7xl text-violet-400' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVarients(2)} className='p-4'>
                    <FontAwesomeIcon icon={faGithub} style={{color: "#fff"}} className='text-7xl text-violet-400' />
                </motion.div>
                <motion.div initial="initial" animate="animate" variants={iconVarients(4.5)} className='p-4'>
                    <FontAwesomeIcon icon={faAngular} className='text-7xl text-red-400' />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies