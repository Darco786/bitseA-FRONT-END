import React from 'react'
import ethImg  from '../assets/eth (1).png' 
import btcImg  from '../assets/btc.png' 
import ordImg  from '../assets/ord.svg' 
import uniImg  from '../assets/uni.png' 
const Platforms = () => {
  return (
    <div className='flex justify-center items-center flex-wrap px-8 pt-5 flex-col sm:flex-row'>
     
        <img className='mx-10 my-5' src={ethImg} alt='pt-img'/>
        <img className='mx-10 my-5' src={uniImg} alt='pt-img'/>
        <img className='mx-10 my-5' src={ordImg} alt='pt-img'/>
        <img className='mx-10 my-5' src={btcImg} alt='pt-img'/>
    </div>
  )
}

export default Platforms