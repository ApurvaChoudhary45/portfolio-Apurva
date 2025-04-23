import React from 'react'

import { RiReactjsLine } from 'react-icons/ri'
import { RiNodejsFill } from 'react-icons/ri'
import { RiHtml5Fill } from 'react-icons/ri'
import { RiTailwindCssFill } from 'react-icons/ri'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { SiPython } from 'react-icons/si'
// import {Ri}
import { animate, motion } from 'framer-motion';

const icVariant = (duration)=>({
    initial : {y: -10},
    animate : {
        y: [10, -10],
    transition:{
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType : 'reverse'
    }
},
})
const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1.5}} className='my-20 text-center text-4xl'>Technologies</motion.h2>
            <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1.5}} animate className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div variants={icVariant(1.5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-5xl text-cyan-400' />
                </motion.div>
                <motion.div variants={icVariant(3)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiNodejsFill className='text-5xl text-yellow-400' />
                </motion.div>
                <motion.div variants={icVariant(5)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiHtml5Fill className='text-5xl text-red-600' />
                </motion.div>
                <motion.div variants={icVariant(7)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiTailwindCssFill className='text-5xl text-cyan-400' />
                </motion.div>
                <motion.div variants={icVariant(9)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiJavascriptFill className='text-5xl text-yellow-400' />
                </motion.div>
                <motion.div variants={icVariant(11)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMongodb className='text-5xl text-green-500' />
                </motion.div>
                <motion.div variants={icVariant(14)} initial='initial' animate='animate' className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPython className='text-5xl' style={{ color: '#3776AB' }} />
                </motion.div>


            </motion.div>

        </div>
    )
}

export default Technologies
