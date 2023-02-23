import React from 'react'
import Logo from '../assets/logo.png'
import {BsTwitter,BsMedium} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {SiGitbook} from 'react-icons/si'
import Bsc from '../assets/bsc.png'
import FootLine from '../assets/elements/footLine.png'


const Footer = () => {
  return (
    <footer className='mt-16 pb-4 '>
    <div className='text-center pt-3 pb-3'>
      <img src={Logo} alt="logo-foot" className='footer-logo m-auto w-auto h-[41px]'/>

    </div>

    <div className='mt-2 mb-2 pb-3 flex justify-center gap-6 align-middle items-center'>
      <a href="/" className='pt-3 pb-3 pr-4 pl-4 rounded-[4px] bg-gray-primary text-white text-xl'>
      <BsTwitter/>
      </a>

      <a href="/" className='pt-3 pb-3 pr-4 pl-4 rounded-[4px] bg-gray-primary text-white text-xl'>
      <img src={Bsc} alt="" className='h-[19px]'/>
      </a>

      <a href="/" className='pt-3 pb-3 pr-4 pl-4 rounded-[4px] bg-gray-primary text-white text-xl'>
      <FaTelegramPlane/>
      </a>

      <a href="/" className='pt-3 pb-3 pr-4 pl-4 rounded-[4px] bg-gray-primary text-white text-xl'>
      <BsMedium/>
      </a>
      <a href="/" className='pt-3 pb-3 pr-4 pl-4 rounded-[4px] bg-gray-primary text-white text-xl'>
      <SiGitbook/>
      </a>

    </div>
    <div>
      <img src={FootLine} alt=""/>
    </div>

    <div className='text-center text-white mt-10 pb-6 font-primary font-[600] text-[14px]'>
      <p>© 2023 | BTSEA |s All Rights Reserved</p>

    </div>
    
    </footer>
  )
}

export default Footer