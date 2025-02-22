import React from "react";

function Cart_quantity_div({ array, CartClicked, shopping_cart }) {
  return (
    <div className="flex justify-center items-center relative">
      {array.length > 0 && (
        <div className="w-[19px] h-[13px] rounded-[6.5px] bg-[#FF7E1B] flex justify-center items-center absolute top-[7px] right-[-7px] max-[500px]:top-[-6px] max-[500px]:left-[10px]">
          <p className="text-[10px] text-[#fff] font-[700]">{array.length}</p>
        </div>
      )}
      <img
        onClick={CartClicked}
        className=" cursor-pointer"
        src={shopping_cart}
        alt=""
      />
    </div>
  );
}

export default Cart_quantity_div;
