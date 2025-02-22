import React from "react";

function Cart_list_div({
  cartclick,
  cartheight,
  array,
  DeleteFunc,
  delete_img,
}) {
  return (
    <>
      {cartclick && (
        <div
          className={` z-3 overflow-y-auto  bg-[#fff]  w-[360px] absolute top-[60px] right-[0px] rounded-[10px] ${cartheight} max-[500px]:top-[50px] max-[500px]:right-[-10px]`}
        >
          <h1 className="pl-[24px] text-[16px] font-[700] text-[#1D2026]">
            Cart
          </h1>
          <div className=" mt-[27px] w-[100%] h-[1px] bg-[#E4E9F2]"></div>
          {array.length === 0 ? (
            <div className=" pt-[77px] flex justify-center items-center ">
              <p className=" text-[16px] font-[700] text-[#69707D] leading-[26px]">
                Your cart is empty.
              </p>
            </div>
          ) : (
            array.map((item, key) => (
              <div className="px-[24px] mt-[24px] flex gap-[16px] " key={key}>
                <img className="w-[50px] h-[50px]" src={item.img} alt="" />
                <div className="flex flex-col">
                  <p className=" text-[#69707D] text-[16px] font-[400]">
                    {item.heading}
                  </p>
                  <div className=" flex gap-[6px]">
                    <p className="text-[#69707D] text-[16px] font-[400]">
                      ${item.price} x {item.quantity}
                    </p>
                    <p className=" text-[#1D2026] text-[16px] font-[700]">
                      ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <img
                  onClick={() => DeleteFunc(key)}
                  className="cursor-pointer"
                  src={delete_img}
                  alt=""
                />
              </div>
            ))
          )}
          {array.length > 0 && (
            <button className="m-[24px] cursor-pointer bg-[#FF7E1B] w-[312px] h-[56px] text-[#fff] text-[16px] font-[700] rounded-[10px]">
              Checkout
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default Cart_list_div;
