import React from 'react'
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Autoplay, Pagination } from "swiper";

function MobRoad() {
  return (
    <>
  <div className='mob-road'>
    
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="box-1">
            <div className="bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] rounded-[85px] text-center phase-btn">
              <h1>PHASE 1</h1>
            </div>

            <div className="sub-box">
              <ul>
                <li> CONCEPT BUILDING</li>
                <li> STEALTH LAUNCH</li>
                <li> COINGECKO LISTING</li>
                <li> DAPP PUBLIC ALPHA TESTING</li>
                <li> CALENDAR LAUNCH</li>
              </ul>
            </div>
          </div>


        </SwiperSlide>
        <SwiperSlide>


        <div className="box-1">
            <div className="bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] rounded-[85px] text-center phase-btn">
              <h1>PHASE 2</h1>
            </div>

            <div className="sub-box">
              <ul>
                <li> STAKING</li>
                <li>FULL DAPP RELEASE</li>
                <li> LAUNCH PAD PLEASE</li>
                <li> BUILS COMUNITY</li>
                <li> PARTNERSHIP</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="box-1">
            <div className="bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] rounded-[85px] text-center phase-btn">
              <h1>PHASE 3</h1>
            </div>

            <div className="sub-box2">
              <ul>



                <li> EXCHANGE LISTING</li>
                <li>V.2.0 LAUNCH</li>
                
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>


        <div className="box-1">
            <div className="bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] rounded-[85px] text-center phase-btn">
              <h1>PHASE 4</h1>
            </div>

            <div className="sub-box">
              <ul>
                <li>MAJOR MARKETING CAMPAIGN AFTER FULL </li>
                <li>PRODUCT LAUNCH</li>
                <li> TIER 1 CEX LISTING</li>
                <li> MAJOR NFT PARTNERSHIPS</li>
                <li> ART BASEL 2023 PARTY TO SHOW OUR</li>
                <li>COMMUNITY LOVE.</li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      
       
      </Swiper>
      </div>
    </>
  )
}

export default MobRoad