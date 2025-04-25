import React from 'react'
import { FaLinkedin } from 'react-icons/fa6'
import { FaGithub} from 'react-icons/fa6'
import { FaSquareTwitter } from 'react-icons/fa6'
import logo from "../assets/Logo.png"
const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt="" className='w-12 mx-2 rounded-full' />
        </div>
        <div className='m-8 flex items-center justify-center gap-5 text-2xl'>
            <a href='https://www.linkedin.com/in/apurva-singh-choudhary-374991223' style={{cursor: 'pointer'}}><FaLinkedin/></a>
            <a href='https://github.com/ApurvaChoudhary45' style={{cursor: 'pointer'}}><FaGithub/></a>
            <a href='https://x.com/SinghApurv1711' style={{cursor: 'pointer'}}><FaSquareTwitter/></a>
        </div>
    </nav>
  )
}

export default Navbar
