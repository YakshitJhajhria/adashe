import React from "react";
import { iconsData } from "./common/helper";

const Projectadashe = () => {
  return (
    <div className="bg-gray-100/90 px-3 py-[50px] sm:py-[80px] md:py-[100px] xl:py-[150px] 2xl:py-[216px]">
      <div className="max-w-[1586px] w-full mx-auto flex flex-col gap-[72px]">
        <div>
          <h2 className="text-bluemagenta font-montserrat font-bold text-[37px] leading-[45px] sm:text-[45px] sm:leading-[53px] md:text-[50px] md::leading-[58px] xl:text-[60px] xl:leading-[68px]">
            Project Adashe
          </h2>
          <div className="max-w-[1532px] w-full flex flex-col gap-[9px]">
            <p className="text-caddiessilk font-montserrat font-medium text-[15px] leading-[23px]">
              Adashe is a seamless fusion of Tradefi, DeFi, and Data systems, It
              is the future of Money, It is available across multiple
              Blockchains. Developed by crypto pioneers, aerospace inventors,
              engineers, data scientist and tech leaders, Adashe establishes a
              standardized industry framework for trade, finance, data and for
              adoption of blockchain and crypto.
            </p>
            <div>
              <button
                type="submit"
                className="text-platinateblue font-semibold font-montserrat text-[16px] leading-[24px] py-1 pr-[19px] w-[109px] h-[43px]"
              >
                View More
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap 2xl:flex-nowrap gap-[50px] justify-center">
          {iconsData.map((items, index) => (
            <div className="flex gap-4 max-w-[361px] w-full" key={index}>
              <div>{items.icon}</div>
              <div>
                <p className="text-midnightblue font-bold font-montserrat text-[20px] leading-[44px]">
                  {items.name}
                </p>
                <p>{items.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projectadashe;
