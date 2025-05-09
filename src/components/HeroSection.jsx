import React from 'react'

import { HERO_CONTENT } from '../constants'

import profilePic from '../assets/kevinRushProfile.jpg'

import { delay, motion } from 'framer-motion';

const container = (delay)=>({
    initial : {x:-100, opacity :0},
    animate: {
        x:0,
        opacity: 1,
        transition : {duration: 0.5, delay: delay}
    }
})

const HeroSection = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                    <div className='flex flex-col items-center lg:items-start'>
                        <motion.h1 variants={container(0)} initial= "initial" animate= "animate" className='pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Apurva Singh Choudhary</motion.h1>
                        <motion.span variants={container(0.5)} initial= "initial" animate= "animate" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent text-3xl'>Front End Developer</motion.span>
                        <motion.p variants={container(1)} initial= "initial" animate= "animate" className='my-2 max-width-xl py-6 font-light tracking-tight'>
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img initial={{x:100, opacity:0}} animate={{x:0, opacity :1}} transition={{duration: 1, delay: 1.2}} src={profilePic} alt="imgLoad" />

                </div>
                
                </div>
            </div> 

        </div>
    )
}

export default HeroSection
