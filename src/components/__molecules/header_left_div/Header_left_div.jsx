import React from "react";

function Header_left_div({ HandleBurgerClick, burger_menu_img, logo }) {
  return (
    <div className="flex items-center justify-center gap-[55px]">
      <div className="flex items-center justify-center gap-[16px]">
        <img
          onClick={HandleBurgerClick}
          className="min-[760px]:hidden z-5"
          src={burger_menu_img}
          alt=""
        />
        <img className="cursor-pointer" src={logo} alt="" />
      </div>
      <div className=" cursor-pointer flex items-center justify-center  gap-[32px]  max-[760px]:hidden">
        <p className=" transition hover:border-b-[4px] border-b-[#FF7E1B] cursor-pointer text-[15px] font-[400] text-[#69707D]">
          Collections
        </p>
        <p className="transition hover:border-b-[4px] border-b-[#FF7E1B] cursor-pointer text-[15px] font-[400] text-[#69707D]">
          Men
        </p>
        <p className="transition hover:border-b-[4px] border-b-[#FF7E1B] cursor-pointer text-[15px] font-[400] text-[#69707D]">
          Women
        </p>
        <p className="transition hover:border-b-[4px] border-b-[#FF7E1B] cursor-pointer text-[15px] font-[400] text-[#69707D]">
          About
        </p>
        <p className="transition hover:border-b-[4px] border-b-[#FF7E1B] cursor-pointer text-[15px] font-[400] text-[#69707D]">
          Contact
        </p>
      </div>
    </div>
  );
}

export default Header_left_div;
