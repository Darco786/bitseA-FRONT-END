import React from "react";
import Line from "../assets/Line.png";
import designImg from "../assets/design.png";
const RoadMaps = () => {
  return (
    <section id="roadmap" className="mt-12 mb-6 pb-60 mx-auto">
      <div className="text-center mb-20 ">
        <h1 className="text-white mt-32 mb-20 font-primary font-[700] text-4xl leading-[46px] text-center">
          ROADMAP
        </h1>
      </div>
      <div className="container mx-auto">
        <div className=" mx-auto flex justify-around mb-32 flex-wrap ">
          <div className="box-1">
            <div className="bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] rounded-[85px] text-center phase-btn">
              <h1>PHASE 2</h1>
            </div>

            <div className="sub-box w-[80vw] z-50 sm:w-[400px] md:w-[450px] lg:w-[500px] relative">
              <img src={designImg} className="absolute inset-0" />
              <ul>
                <li> STAKING</li>
                <li>FULL DAPP RELEASE</li>
                <li> LAUNCH PAD PLEASE</li>
                <li> BUILS COMUNITY</li>
                <li> PARTNERSHIP</li>
              </ul>
            </div>
          </div>

          <div className="box-2">
            <div className="bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] rounded-[85px] text-center phase-btn">
              <h1>PHASE 1</h1>
            </div>

            <div className="sub-box w-[80vw] z-50 sm:w-[400px] md:w-[450px] lg:w-[500px] relative">
              <img src={designImg} className="absolute inset-0" />
              <ul>
                <li> CONCEPT BUILDING</li>
                <li> STEALTH LAUNCH</li>
                <li> COINGECKO LISTING</li>
                <li> DAPP PUBLIC ALPHA TESTING</li>
                <li> CALENDAR LAUNCH</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={Line} alt="" className="line-road z-10" />
      </div>
      <div className="container mx-auto">
        <div className="flex justify-around mt-16 flex-wrap">
          <div className="box-1">
            <div className="bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] rounded-[85px] text-center phase-btn">
              <h1>PHASE 4</h1>
            </div>

            <div className="sub-box w-[80vw] z-50 sm:w-[400px] md:w-[450px] lg:w-[500px] relative">
              <img src={designImg} className="absolute inset-0" />
              <ul>
                <li> MAJOR MARKETING CAMPAIGN AFTER FULL </li>
                <li>PRODUCT LAUNCH</li>
                <li> TIER 1 CEX LISTING</li>
                <li> MAJOR NFT PARTNERSHIPS</li>
                <li> ART BASEL 2023 PARTY TO SHOW OUR</li>
                <li>COMMUNITY LOVE.</li>
              </ul>
            </div>
          </div>

          <div className="box-2">
            <div className="bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] rounded-[85px] text-center phase-btn">
              <h1>PHASE 3</h1>
            </div>

            <div className="sub-box w-[80vw] z-50 sm:w-[400px] md:w-[450px] lg:w-[500px] h-fit relative">
              <img src={designImg} className="absolute inset-0" />
              <ul>
                <li> EXCHANGE LISTING</li>
                <li>V.2.0 LAUNCH</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadMaps;
