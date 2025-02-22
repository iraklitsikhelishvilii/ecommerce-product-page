import React from "react";

function Buttons_div({
  dispath,
  state,
  minus_img,
  plus_img,
  AddToCart,
  white_cart,
}) {
  return (
    <div className="mt-[32px] flex gap-[16px] max-[500px]:flex-col max-[500px]:w-[100%]">
      <div className=" flex px-[16px] h-[56px] items-center bg-[#F6F8FD] rounded-[10px] w-[157px] justify-between max-[500px]:w-[100%] max-[500px]:px-[24px] ">
        <button
          onClick={() => {
            dispath({ type: "Decrease" });
          }}
          className="cursor-pointer"
        >
          <img src={minus_img} alt="" />
        </button>
        <p>{state.count}</p>
        <button
          onClick={() => {
            dispath({ type: "Increase" });
          }}
          className="cursor-pointer"
        >
          <img src={plus_img} alt="" />
        </button>
      </div>
      <button
        onClick={AddToCart}
        className="transition hover:opacity-[0.5] flex px-[76px] h-[56px] items-center bg-[#FF7E1B] rounded-[10px] w-[272px] justify-between cursor-pointer max-[970px]:w-[200px] max-[970px]:px-[40px] max-[500px]:w-[100%] max-[500px]:px-[104px]"
      >
        <img src={white_cart} alt="" />
        <p className="text-[16px] font-[700] text-[#fff]">Add to cart</p>
      </button>
    </div>
  );
}

export default Buttons_div;
