import React from "react";
import logo from "../../assests/img/logo2.png";
import { navLinks } from "./Helper";
import { CloseIcon } from "./Icon";

const Sidebar = ({ toggleNavbar }) => {
  return (
    <div className="flex flex-col bg-[#012B40] gap-5 pt-5 px-3 h-screen lg:hidden">
      <div className="flex justify-end">
        <button type="submit" onClick={toggleNavbar}>
          <CloseIcon />
        </button>
      </div>
      <div className="flex flex-col gap-5 items-center">
        <div>
          <a href="">
            <img src={logo} alt="Logo" className="w-[260px] h-[72px]" />
          </a>
        </div>
        <div className="flex flex-col gap-5 text-center">
          {navLinks.map((items, index) => (
            <div key={index}>
              <a
                href={items.link}
                className="text-white font-montserrat text-[17px] font-medium leading-[25px] hover:opacity-70 duration-300"
              >
                {items.name}
              </a>
            </div>
          ))}
        </div>
        <div>
          <button
            type="submit"
            className="bg-[linear-gradient(93deg,#423CE3_-1.15%,#8635ED_110.24%)] rounded-[36px] text-white font-montserrat text-[16px] leading-[24px] font-bold w-[187px] h-[67px] flex justify-center items-center hover:bg-[linear-gradient(75deg,#8635ED_110.24%,#423CE3_-1.15%)] duration-500"
          >
            BUY TOKEN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
