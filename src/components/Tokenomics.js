import React from "react";
import radarChart from '../assets/radar-chart.png';


export default function Tokenomics() {
    return (
        <div className="text-white">
            <div>
                <h1 className="text-white font-primary font-[700] text-4xl leading-[46px] text-center">TOKENOMICS & TOKEN INFO</h1>
            </div>
            <div class="flex justify-center content-center my-10">
                <div className="w-11/12 bg-gray-primary h-auto p-[49px] rounded-[29px]">
                    <div class="flex space-x-14">
                        <div className="w-8/12">
                            <h1 className="text-white font-primary font-[700] text-2xl leading-[31px]">TOKENOMICS</h1>
                            <p className="text-white font-primary font-[500] text-base leading-[20px] mt-[18px]">TOTAL SUPPLY 21,000,000</p>
                            <div className="mt-[43px] flex flex-col space-y-2.5">
                                <div className="rounded-[17px] bg-gray-primary px-[16px] pt-[14px] pb-[13px] flex justify-between space-x-[19px]">
                                    <div className="w-[21px] h-[21px] bg-gray rounded-[8px] flex"></div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px] flex-1">Marketing</div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px]">10%</div>
                                </div>
                                <div className="rounded-[17px] bg-gray-primary px-[16px] pt-[14px] pb-[13px] flex justify-between space-x-[19px]">
                                    <div className="w-[21px] h-[21px] bg-gray rounded-[8px] flex"></div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px] flex-1">Team/Early Backers</div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px]">10%</div>
                                </div>
                                <div className="rounded-[17px] bg-gray-primary px-[16px] pt-[14px] pb-[13px] flex justify-between space-x-[19px]">
                                    <div className="w-[21px] h-[21px] bg-gray rounded-[8px] flex"></div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px] flex-1">Liquidity</div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px]">40%</div>
                                </div>
                                <div className="rounded-[17px] bg-gray-primary px-[16px] pt-[14px] pb-[13px] flex justify-between space-x-[19px]">
                                    <div className="w-[21px] h-[21px] bg-gray rounded-[8px] flex"></div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px] flex-1">Airdrop</div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px]">20%</div>
                                </div>
                                <div className="rounded-[17px] bg-gray-primary px-[16px] pt-[14px] pb-[13px] flex justify-between space-x-[19px]">
                                    <div className="w-[21px] h-[21px] bg-gray rounded-[8px] flex"></div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px] flex-1">Partnerships</div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px]">5%</div>
                                </div>
                                <div className="rounded-[17px] bg-gray-primary px-[16px] pt-[14px] pb-[13px] flex justify-between space-x-[19px]">
                                    <div className="w-[21px] h-[21px] bg-gray rounded-[8px] flex"></div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px] flex-1">Treasury</div>
                                    <div className="text-white font-primary font-[600] text-base leading-[20px]">10%</div>
                                </div>

                            </div>
                        </div>
                        <div className="flex relative items-center mt-24">
                            <img className="" src={radarChart} alt='' />
                            <p className="text-white font-primary font-[600] text-base leading-[20px] text-center mt-[19px]">TAX: 0%</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

