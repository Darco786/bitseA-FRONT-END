import DaoImg from '../assets/dao.svg'
import {BsCalendar2Check} from 'react-icons/bs'
import {HiOutlineBuildingStorefront} from 'react-icons/hi2'
import {GiSwordSmithing} from 'react-icons/gi'
import React from "react";

const EchoSystems = () => {
  return (
    <>
      <h1 className="text-white mt-32 mb-14 font-primary font-[700] text-4xl leading-[46px] text-center">
        BTSEA ECOSYSTEM
      </h1>
      <div className="flex justify-center flex-wrap  mx-4">
        <div className="h-72 w-72 m-2 bg-[#ffffff14]  rounded-lg flex flex-col items-center justify-center hover:bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] cursor-pointer">
          <div className="h-20 w-20 rounded-full relative mt-8 shadow-lg bg-[#ffffff21] flex justify-center items-center mb-14">
           <span className='text-[28px]'><HiOutlineBuildingStorefront className=" text-white" /></span> 
          </div>
          <div className="text-white text-lg px-10 text-center">
            Ordinal exclusive NFT marketplace
          </div>
        </div>
        <div className="h-72 w-72 m-2 bg-[#ffffff14] hover:bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] cursor-pointer  rounded-lg flex flex-col items-center justify-center">
          <div className="h-20 w-20 rounded-full shadow-lg bg-[#ffffff21] flex justify-center items-center mb-14">
           
           <span className='text-[28px]'><GiSwordSmithing className=" text-white" /></span> 
          </div>
          <div className="text-white text-lg px-10 text-center">
            NFT Minter & launch pad{" "}
          </div>
        </div>
        <div className="h-72 w-72 m-2 bg-[#ffffff14] hover:bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] cursor-pointer  rounded-lg flex flex-col items-center justify-center">
          <div className="h-20 w-20 rounded-full shadow-lg bg-[#ffffff21] flex justify-center items-center mb-14">
            {/* <CalendarIcon  /> */}
            <img src={DaoImg} alt=' ' className="h-8 w-8 text-white"/>
          </div>
          <div className="text-white text-lg px-10 text-center">
            Governance DAO{" "}
          </div>
        </div>
        <div className="h-72 w-72 m-2 bg-[#ffffff14] hover:bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] cursor-pointer  rounded-lg flex flex-col items-center justify-center">
          <div className="h-20 w-20 rounded-full shadow-lg bg-[#ffffff21] flex justify-center items-center mb-14">
            <span className='text-[23px]'><BsCalendar2Check className=" text-white" /></span>
            
          </div>
          <div className="text-white text-lg px-10 text-center">
            Launch Calendar{" "}
          </div>
        </div>
      </div>

    </>
  );
};

export default EchoSystems;
