import React from "react";
import logo from "../../assests/img/logo.png";

const Navbar = () => {
  return (
    <div className="bg-white sticky top-0 px-3 py-[13px] h-[98px] shadow-sm">
      <div className="max-w-[1280px] 2xl:max-w-[1602px] w-full mx-auto flex justify-between gap-5">
        <div>
          <a href="">
            <img src={logo} alt="logo" className="w-[260px] h-[72px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
