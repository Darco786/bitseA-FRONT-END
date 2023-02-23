import React from "react";
import img1 from "../assets/nft (1).png";
import img2 from "../assets/nft (2).png";
import img3 from "../assets/nft (3).png";
import img4 from "../assets/nft (4).png";
import img5 from "../assets/nft (5).png";
import img6 from "../assets/elements/bit2.png";
import img7 from "../assets/elements/blue.png";

const OrdinalNFTs = () => {
  return (
    <div className="mb-20">
      <h1 className="text-white mt-32 mb-20 font-primary font-[700] text-4xl leading-[46px] text-center">
        ORDINAL NFTs
      </h1>
      <div className="flex justify-center items-center flex-wrap ">
        <div className="h-60 w-60  rounded-lg flex flex-col mx-2 my-5 items-center justify-center">
          <img className="h-full w-full" src={img2}  alt='pt-img'/>
        </div>
        <div className="h-64 w-60 rounded-lg flex flex-col mx-2 my-5 items-center justify-center">
          {" "}
          <img className="h-full w-full" src={img1} alt='pt-img' />
        </div>
        <div className="h-72 w-60 rounded-lg flex flex-col mx-2 my-5 items-center justify-center">
          {" "}
          <img className="h-full w-full" src={img5}  alt='pt-img'/>
        </div>
        <div className="h-64 w-60 rounded-lg flex flex-col mx-2 my-5 items-center justify-center">
          {" "}
          <img className="h-full w-full" src={img4} alt='pt-img' />
        </div>
        <div className="h-60 w-60 rounded-lg flex flex-col mx-2 my-5 items-center justify-center">
          {" "}
          <img className="h-full w-full" src={img3}  alt='pt-img'/>
        </div>
      </div>
      <img src={img6} alt="" className="bit-2"/>
      <img src={img7} alt="" className="bit-3"/>
    </div>
  );
};

export default OrdinalNFTs;
