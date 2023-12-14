import React from "react";
import logo from "../../assests/img/logo.png";
import { navLinks } from "./Helper";
import { MenuIcon } from "./Icon";
import Togglebtn from "./Togglebtn";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 px-3 py-[13px] h-[70px] sm:h-[98px] shadow-sm">
      <div className="max-w-[1280px] 2xl:max-w-[1602px] w-full mx-auto flex justify-between gap-5">
        <div>
          <a href="">
            <img
              src={logo}
              alt="logo"
              className="w-[160px] h-[52px] sm:w-[260px] sm:h-[72px]"
            />
          </a>
        </div>
        <div className="sm:max-w-[920px] sm:w-full w-fit flex items-center gap-5 justify-end lg:justify-between">
          <div className="hidden md:flex gap-5 justify-between items-center lg:max-w-[867px] lg:w-full">
            <div className="hidden lg:flex justify-between max-w-[575px] w-full">
              {navLinks.map((items, index) => (
                <div key={index} className="px-[10px] py-[24px]">
                  <a
                    href={items.link}
                    className="text-[#373737] text-[17px] font-montserrat font-medium leading-[24px] hover:text-[#4F3BE5] duration-300"
                  >
                    {items.name}
                  </a>
                </div>
              ))}
            </div>
            <div className="hidden md:flex gap-3 justify-between">
              <button
                type="submit"
                className="bg-[linear-gradient(93deg,#423CE3_-1.15%,#8635ED_110.24%)] rounded-[36px] text-white font-montserrat text-[16px] leading-[24px] font-bold w-[187px] h-[67px] flex justify-center items-center hover:bg-[linear-gradient(93deg,#8635ED_110.24%,#423CE3_-1.15%)] duration-300"
              >
                BUY TOKEN
              </button>
            </div>
          </div>
          <div className="flex justify-between gap-3 items-center w-fit sm:max-w-[125px] sm:w-full">
            <div>
              <Togglebtn />
            </div>
            <button type="submit" className="block lg:hidden">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
