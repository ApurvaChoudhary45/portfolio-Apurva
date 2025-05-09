import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className='border-b border-neutral-800 pb-20'>
            <motion.h2 whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration: 1.5}} className='my-10 text-center text-4xl'>Get In Touch</motion.h2>
            <div className='text-center tracking-tighter'>
                <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1.5}} className='my-4'>{CONTACT.address}</motion.p>
                <motion.p whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration: 1.5}}className='my-4'>{CONTACT.phoneNo}</motion.p>
                <motion.a whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration: 1.5}} href='https://mail.google.com/mail/?view=cm&fs=1&to=apurvasinghchoudhary@gmail.com' className='my-4 underline'>{CONTACT.email}</motion.a>
            </div>
        </div>
    )
}

export default Contact
