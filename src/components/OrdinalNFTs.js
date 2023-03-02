import React from "react";
import img1 from "../assets/nft (1).png";
import img2 from "../assets/nft (2).png";
import img3 from "../assets/nft (3).png";
import img4 from "../assets/nft (4).png";
import img5 from "../assets/bat.svg";
import img6 from "../assets/elements/bit2.png";
import img7 from "../assets/elements/blue.png";
import img8 from "../assets/cornerImg.png";
import img9 from "../assets/cornerImg1.png";
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
        <div className="container relative">
          <Swiper
            autoplay={true}
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
            className="swiper_container mt-0 relative"
          >
            <img
              src={img8}
              style={{
                transitionDuration: "0ms",
                transform:
                  "translate3d(-270px, 25px, -270px) rotateX(0deg) rotateY(0deg) scale(1)",
                zIndex: 4,
                left:"0px"
              }}
              className="absolute left-[-10px] top-0 bottom-0 h-[280px] w-[280px] imgCorner"
              alt="slide_image"
            />

            <SwiperSlide>
              <img src={img1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="slide_image" />
            </SwiperSlide>
            <img
              src={img9}
              style={{
                transitionDuration: "0ms",
                transform:
                  "translate3d(1166px, 25px, -270px) rotateX(0deg) rotateY(0deg) scale(1)",
                zIndex: 4,
                left:"0px"
              }}
              className="absolute right-[-10px] top-0 bottom-0 imgCorner rounded-md"
              alt="slide_image"
            />
          </Swiper>

          <div className="slider-controler absolute top-0 bottom-0">
            <div className="swiper-button-prev slider-arrow h-10 w-10 rounded-full">
              <ion-icon
                name="arrow-back-outline "
                className="h-2 w-2"
              ></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>

          <img src={img6} alt="" className="bit-2" />
          <img src={img7} alt="" className="bit-3" />
        </div>
      </div>
    </>
  );
};

export default OrdinalNFTs;
