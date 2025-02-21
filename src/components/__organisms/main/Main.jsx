import React, { useReducer, useState } from "react";
import logo from "../../../assets/images/sneakers2.svg";
import shopping_cart from "../../../assets/images/Group14.svg";
import profile_img from "../../../assets/images/Oval.png";
import first_img from "../../../assets/images/Rectangle.svg";
import second_img from "../../../assets/images/RectangleCopy2.svg";
import third_img from "../../../assets/images/RectangleCopy3.svg";
import fourth_img from "../../../assets/images/RectangleCopy4.svg";
import minus_img from "../../../assets/images/Group4.svg";
import plus_img from "../../../assets/images/plus.svg";
import white_cart from "../../../assets/images/Shape.svg";
import delete_img from "../../../assets/images/Mask2.svg";
const Initialvalue = {
  count: 0,
};

function Reducer(state, action) {
  switch (action.type) {
    case "Increase":
      return { count: state.count + 1 };
    case "Decrease":
      return state.count != 0 ? { count: state.count - 1 } : state;
  }
}
function Main() {
  const [mainimg, setmainimg] = useState(first_img);
  const FirstClick = () => {
    setmainimg(first_img);
  };
  const SecondClick = () => {
    setmainimg(second_img);
  };
  const ThirdClick = () => {
    setmainimg(third_img);
  };
  const FourthClick = () => {
    setmainimg(fourth_img);
  };
  const [state, dispath] = useReducer(Reducer, Initialvalue);
  const [array, setarray] = useState([]);
  const AddToCart = () => {
    if (state.count > 0) {
      const item = {
        img: first_img,
        heading: "Fall Limited Edition Sneakers",
        price: 125,
        quantity: state.count,
      };
      setarray([...array, item]);
    }
  };
  const DeleteFunc = (key) => {
    setarray(array.filter((_, i) => i !== key));
  };
  const [cartclick, setcartclick] = useState(false);
  const CartClicked = () => {
    setcartclick(!cartclick);
  };
  let cartheight;
  if (array.length === 0) {
    cartheight = "h-[256px]";
  } else if (array.length > 0 && array.length < 5) {
    cartheight = "h-auto";
  } else {
    cartheight = "h-[525px]";
  }
  return (
    <>
      <header className=" relative px-[165px] flex flex-col justify-between py-[45px]  w-[100%] ">
        <div className="flex justify-between w-[100%]">
          <div className="flex items-center justify-center gap-[55px]">
            <img className="cursor-pointer" src={logo} alt="" />
            <div className=" cursor-pointer flex items-center justify-center gap-[32px]">
              <p className="cursor-pointer text-[15px] font-[400] text-[#69707D]">
                Collections
              </p>
              <p className="cursor-pointer text-[15px] font-[400] text-[#69707D]">
                Men
              </p>
              <p className="cursor-pointer text-[15px] font-[400] text-[#69707D]">
                Women
              </p>
              <p className="cursor-pointer text-[15px] font-[400] text-[#69707D]">
                About
              </p>
              <p className="cursor-pointer text-[15px] font-[400] text-[#69707D]">
                Contact
              </p>
            </div>
          </div>
          <div className="relative flex gap-[45px]">
            <img
              onClick={CartClicked}
              className=" cursor-pointer"
              src={shopping_cart}
              alt=""
            />
            <img
              className=" cursor-pointer w-[50px] h-[50px]"
              src={profile_img}
              alt=""
            />
            {cartclick && (
              <div
                className={` overflow-y-auto  bg-[#fff]  w-[360px] absolute top-[60px] right-[0px] rounded-[10px] ${cartheight}`}
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
                    <div
                      className="px-[24px] mt-[24px] flex gap-[16px] "
                      key={key}
                    >
                      <img
                        className="w-[50px] h-[50px]"
                        src={item.img}
                        alt=""
                      />
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
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#E4E9F2] mt-[34px]"></div>
      </header>
      <div className="h-[100vh] flex max-w-[1100px] w-[100%] justify-between items-center">
        <div className="flex flex-col">
          <img className="w-[445px] h-[445px]" src={mainimg} alt="" />
          <div className="mt-[32px] flex w-full justify-between">
            <img
              onClick={FirstClick}
              className=" w-[88px] h-[88px] cursor-pointer"
              src={first_img}
              alt=""
            />
            <img
              className="cursor-pointer"
              onClick={SecondClick}
              src={second_img}
              alt=""
            />
            <img
              className="cursor-pointer"
              onClick={ThirdClick}
              src={third_img}
              alt=""
            />
            <img
              className="cursor-pointer"
              onClick={FourthClick}
              src={fourth_img}
              alt=""
            />
          </div>
        </div>
        <div>
          <p className="text-[13px] font-[700] tracking-[2px] text-[#FF7E1B]">
            Sneaker Company
          </p>
          <h1 className="mt-[27px] text-[44px] text-[#1D2026] font-[700] leading-[48px]">
            Fall Limited Edition <br /> Sneakers
          </h1>
          <p className="text-[16px] font-[400] text-[#69707D] leading-[26px] mt-[32px]">
            These low-profile sneakers are your perfect casual wear <br />{" "}
            companion. Featuring a durable rubber outer sole, they’ll <br />{" "}
            withstand everything the weather can offer.
          </p>
          <div className="mt-[24px] flex flex-col">
            <div className="flex items-end gap-[16px]">
              <p className="text-[28px] font-[700] text-[#1D2026]">$125.00</p>
              <div className=" flex justify-center items-center w-[51px] h-[27px] rounded-[8px] bg-[#FFEEE2]">
                <p className="text-[16px] text-[#FF7E1B] font-[700]">50%</p>
              </div>
            </div>
            <p className="mt-[10px] text-[16px] text-[#B6BCC8] font-[700] leading-[26px] line-through">
              $250.00
            </p>
          </div>
          <div className="mt-[32px] flex gap-[16px]">
            <div className=" flex px-[16px] h-[56px] items-center bg-[#F6F8FD] rounded-[10px] w-[157px] justify-between ">
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
              className="flex px-[76px] h-[56px] items-center bg-[#FF7E1B] rounded-[10px] w-[272px] justify-between cursor-pointer"
            >
              <img src={white_cart} alt="" />
              <p className="text-[16px] font-[700] text-[#fff]">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
