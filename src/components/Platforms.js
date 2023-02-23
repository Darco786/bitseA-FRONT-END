import React from 'react'
import ethImg  from '../assets/eth (1).png' 
import btcImg  from '../assets/btc.png' 
import ordImg  from '../assets/ord.png' 
import uniImg  from '../assets/uni.png' 
const Platforms = () => {
  return (
    <div className='flex justify-center flex-wrap px-8 pt-5'>
        <img className='mx-10 my-5' src={btcImg}/>
        <img className='mx-10 my-5' src={ethImg}/>
        <img className='mx-10 my-5' src={uniImg}/>
        <img className='mx-10 my-5' src={ordImg}/>
        <img className='mx-10 my-5' src={btcImg}/>
    </div>
  )
}

export default Platforms