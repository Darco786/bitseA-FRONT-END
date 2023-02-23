import React from "react";
import img1 from "../assets/nft (1).png";
import img2 from "../assets/nft (2).png";
import img3 from "../assets/nft (3).png";
import img4 from "../assets/nft (4).png";
import img5 from "../assets/nft (5).png";

const OrdinalNFTs = () => {
  return (
    <div className="mb-20">
      <h1 className="text-white mt-32 mb-20 font-primary font-[700] text-4xl leading-[46px] text-center">
        ORDINAL NFTs
      </h1>
      <div className="flex justify-between items-center">
        <div className="h-60 w-60  rounded-lg flex flex-col items-center justify-center">
          <img className="h-full w-full" src={img2} />
        </div>
        <div className="h-64 w-60 rounded-lg flex flex-col items-center justify-center">
          {" "}
          <img className="h-full w-full" src={img1} />
        </div>
        <div className="h-72 w-60 rounded-lg flex flex-col items-center justify-center">
          {" "}
          <img className="h-full w-full" src={img5} />
        </div>
        <div className="h-64 w-60 rounded-lg flex flex-col items-center justify-center">
          {" "}
          <img className="h-full w-full" src={img4} />
        </div>
        <div className="h-60 w-60 rounded-lg flex flex-col items-center justify-center">
          {" "}
          <img className="h-full w-full" src={img3} />
        </div>
      </div>
    </div>
  );
};

export default OrdinalNFTs;
