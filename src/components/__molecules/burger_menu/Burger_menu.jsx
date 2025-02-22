import React from "react";

function Burger_menu({ BurgerMenu }) {
  return (
    <div
      className={` ease duration-[1s] z-4 bg-[#FFF] absolute top-0 left-0 flex h-[100vh] ${
        BurgerMenu ? "w-[250px] pl-[20px]" : "w-[0px] pl-[0px]"
      }`}
    >
      {BurgerMenu && (
        <div className="mt-[100px] flex flex-col gap-[20px]">
          <p className="cursor-pointer text-[18px] font-[700] text-[#1D2026]">
            Collections
          </p>
          <p className="cursor-pointer text-[18px] font-[700] text-[#1D2026]">
            Men
          </p>
          <p className="cursor-pointer text-[18px] font-[700] text-[#1D2026]">
            Women
          </p>
          <p className="cursor-pointer text-[18px] font-[700] text-[#1D2026]">
            About
          </p>
          <p className="cursor-pointer text-[18px] font-[700] text-[#1D2026]">
            Contact
          </p>
        </div>
      )}
    </div>
  );
}

export default Burger_menu;
