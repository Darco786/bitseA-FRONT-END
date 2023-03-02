import React from "react";
import img1 from "../assets/nft (1).png";
import img2 from "../assets/nft (2).png";
import img3 from "../assets/nft (3).png";
import img4 from "../assets/nft (4).png";
import img5 from "../assets/bat.svg";
import img6 from "../assets/elements/bit2.png";
import img7 from "../assets/elements/blue.png";
import "./Swiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper";

const OrdinalNFTs = () => {
  return (
    <>
      <div className="mb-20">
        <h1 className="text-white mt-32 mb-20 font-primary font-[700] text-4xl leading-[46px] text-center">
          ORDINAL NFTs
        </h1>
        <div className="container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container"
          >
            <SwiperSlide>
            
                <img className="h-full w-full" src={img2} alt="pt-img" />
             
            </SwiperSlide>
            <SwiperSlide>
     
         
                <img className="h-full w-full" src={img1} alt="pt-img" />
       
            </SwiperSlide>

            <SwiperSlide>
              
                {" "}
                <img className="h-full w-full" src={img5} alt="pt-img" />
     
            </SwiperSlide>
            <SwiperSlide>
              
                {" "}
                <img className="h-full w-full" src={img4} alt="pt-img" />
           
            </SwiperSlide>
            <SwiperSlide>
         
                {" "}
                <img className="h-full w-full" src={img3} alt="pt-img" />
           
            </SwiperSlide>
            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>

        <img src={img6} alt="" className="bit-2" />
        <img src={img7} alt="" className="bit-3" />
      </div>
    </>
  );
};

export default OrdinalNFTs;
