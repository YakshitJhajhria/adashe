import React from "react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "./Icon";

const Footer = () => {
  return (
    <div className="bg-[#F5F9FF] w-full pt-[68px] pb-[73px] px-3">
      <div className="max-w-[1280px] 2xl:max-w-[1566px] w-full flex justify-between gap-5 mx-auto">
        <div className="flex flex-col gap-5 max-w-[469px] w-full">
          <p className="text-[#5F6D7E] font-montserrat font-medium tex-[16px] leading-[30px]">
            Project Adashe is building a system for data federation and
            virtualization, tied to a smart contract it can enable automatic
            execution of commands.
          </p>
          <div className="flex gap-[19px] items-center">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 duration-300"
            >
              <TwitterIcon />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 duration-300"
            >
              <FacebookIcon />
            </a>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-125 duration-300"
            >
              <LinkedinIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
