import React from "react";
import {
  CaliforniaFlagIcon,
  FacebookIcon,
  LinkedinIcon,
  NigeriaFlagIcon,
  TwitterIcon,
} from "./Icon";
import { companyLinks, siteMapLinks } from "./Helper";
import cliforniaflag from "../../assests/img/californiaflag.png";
import logo from "../../assests/img/logo.png";

const Footer = () => {
  return (
    <div className="bg-[#F5F9FF] w-full pt-[68px] pb-[73px] px-3">
      <div className="max-w-[1280px] 2xl:max-w-[1566px] w-full flex flex-col justify-center gap-[79px] mx-auto">
        <div className="w-full flex flex-col lg:flex-row max-lg:items-center justify-between gap-5 mx-auto">
          <div className="flex flex-col gap-5 max-w-[469px] w-full">
            <p className="text-[#5F6D7E] font-montserrat font-medium tex-[16px] leading-[30px]">
              Project Adashe is building a system for data federation and
              virtualization, tied to a smart contract it can enable automatic
              execution of commands.
            </p>
            <div className="flex gap-[19px] items-center">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 duration-300"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 duration-300"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-125 duration-300"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
          <div className="max-w-[650px] w-full flex max-lg:flex-wrap gap-5 justify-between items-start">
            <div className="flex flex-col gap-4 items-start">
              <div>
                <h2 className="text-[#2237B4] font-montserrat text-[19px] leding-9 font-medium">
                  SITEMAP
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {siteMapLinks.map((items, index) => (
                  <a
                    key={index}
                    href={items.link}
                    className="text-[#0B0B0B] font-montserrat text-[17px] leading-9 font-medium hover:opacity-50 duration-300 w-fit"
                  >
                    {items.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <div>
                <h2 className="text-[#2237B4] font-montserrat text-[19px] leding-9 font-medium">
                  SITEMAP
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {companyLinks.map((items, index) => (
                  <a
                    key={index}
                    href={items.link}
                    className="text-[#0B0B0B] font-montserrat text-[17px] leading-9 font-medium hover:opacity-50 duration-300 w-fit"
                  >
                    {items.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 items-start">
              <div>
                <h2 className="text-[#2237B4] font-montserrat text-[19px] leding-9 font-medium">
                  LOCATION
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex gap-[10px]">
                  <div>
                    <NigeriaFlagIcon />
                  </div>
                  <div>
                    <p className="text-[#0B0B0B] font-montserrat text-[17px] leading-9 font-medium">
                      Abuja Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div>
                    <img
                      src={cliforniaflag}
                      alt="California-flag"
                      className="w-[41px] h-[41px]"
                    />
                  </div>
                  <div>
                    <p className="text-[#0B0B0B] font-montserrat text-[17px] leading-9 font-medium">
                      Newport Beach, California
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center w-full">
          <div className="flex flex-col gap-[10px]">
            <div>
              <a href="">
                <img src={logo} alt="logo" className="w-[260px] h-[72px]" />
              </a>
            </div>
            <div>
              <p className="text-[#5F6D7E] font-montserrat text-[20px] leading-[34px] font-medium">
                © 2023 adashe
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[21px] max-w-[575px] w-full">
            <div>
              <p className="font-montserrat text-[21px] leading-6 font-medium text-[#7C7A7A]">
                Join Our Newsletter
              </p>
            </div>
            <div className="flex border border-[#D7D7D7] bg-white rounded-[28px] gap-3 justify-between items-center pl-2 sm:pl-[15px]">
              <div>
                <input
                  type="email"
                  className="outline-none placeholder:text-[#181433] placeholder:font-montserrat placeholder:text-[14px] placeholder:leading-[26px] placeholder:font-medium placeholder:tracking-[-0.28px] placeholder:opacity-50"
                  placeholder="Your email address"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="text-white px-3 sm:pl-[41px] sm:pr-[30px] py-[13px] rounded-[28px] bg-[linear-gradient(101deg,#4A3BE4_32.4%,#7A36EB_101.01%)] text-[16px] font-medium leading-6 tracking-[-0.32px] font-montserrat hover:bg-[linear-gradient(93deg,#8635ED_110.24%,#423CE3_-1.15%)] duration-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div>
              <p className="text-[#272626] font-montserrat text-[14px] leading-[26px] font-medium tracking-[-0.28px]">
                * Will send you weekly updates for your better engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
