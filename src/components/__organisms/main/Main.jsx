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
import burger_menu_img from "../../../assets/images/CombinedShape2.svg";
import left_arrow from "../../../assets/images/Group18Copy2.svg";
import right_arrow from "../../../assets/images/Group18Copy3.svg";
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
  const [opacity, setopacity] = useState("");
  const [opacity2, setopacity2] = useState("");
  const [opacity3, setopacity3] = useState("");
  const [opacity4, setopacity4] = useState("");
  const FirstClick = () => {
    setmainimg(first_img);
    setopacity("opacity-[0.5]");
    setopacity2("opacity-[1]");
    setopacity3("opacity-[1]");
    setopacity4("opacity-[1]");
  };
  const SecondClick = () => {
    setmainimg(second_img);
    setopacity2("opacity-[0.5]");
    setopacity("opacity-[1]");
    setopacity3("opacity-[1]");
    setopacity4("opacity-[1]");
  };
  const ThirdClick = () => {
    setmainimg(third_img);
    setopacity3("opacity-[0.5]");
    setopacity("opacity-[1]");
    setopacity2("opacity-[1]");
    setopacity4("opacity-[1]");
  };
  const FourthClick = () => {
    setmainimg(fourth_img);
    setopacity4("opacity-[0.5]");
    setopacity("opacity-[1]");
    setopacity2("opacity-[1]");
    setopacity3("opacity-[1]");
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

  const [BurgerMenu, setBurgerMenu] = useState(false);
  const HandleBurgerClick = () => {
    setBurgerMenu(!BurgerMenu);
  };
  const [index, setindex] = useState(0);
  const Next = () => {
    if (index < 3) {
      setindex(index + 1);
    }
  };
  const Prev = () => {
    if (index > 0) {
      setindex(index - 1);
    }
  };
  const ImgArray = [first_img, second_img, third_img, fourth_img];
  return (
    <>
      <div
        className={`h-[100vh] flex flex-col items-center w-[100%] ${
          BurgerMenu ? "overflow-y-hidden" : "overflow-y-auto"
        }`}
      >
        <header className=" relative px-[165px] flex flex-col justify-between py-[45px]  w-[100%] max-[1400px]:px-[20px] max-[500px]:py-[20px]">
          <div className="flex justify-between w-[100%]">
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
                <p className="  hover:border-b-[4px] border-b-[#FF7E1B] cursor-pointer text-[15px] font-[400] text-[#69707D]">
                  Collections
                </p>
                <p className="hover:border-b-[4px] border-b-[#FF7E1B] cursor-pointer text-[15px] font-[400] text-[#69707D]">
                  Men
                </p>
                <p className="hover:border-b-[4px] border-b-[#FF7E1B] cursor-pointer text-[15px] font-[400] text-[#69707D]">
                  Women
                </p>
                <p className="hover:border-b-[4px] border-b-[#FF7E1B] cursor-pointer text-[15px] font-[400] text-[#69707D]">
                  About
                </p>
                <p className="hover:border-b-[4px] border-b-[#FF7E1B] cursor-pointer text-[15px] font-[400] text-[#69707D]">
                  Contact
                </p>
              </div>
            </div>
            <div className="relative flex gap-[45px]  max-[500px]:gap-[22px]">
              <div className="flex justify-center items-center relative">
                {array.length > 0 && (
                  <div className="w-[19px] h-[13px] rounded-[6.5px] bg-[#FF7E1B] flex justify-center items-center absolute top-[7px] right-[-7px] max-[500px]:top-[-6px] max-[500px]:left-[10px]">
                    <p className="text-[10px] text-[#fff] font-[700]">
                      {array.length}
                    </p>
                  </div>
                )}
                <img
                  onClick={CartClicked}
                  className=" cursor-pointer"
                  src={shopping_cart}
                  alt=""
                />
              </div>
              <img
                className=" cursor-pointer w-[50px] h-[50px] max-[500px]:w-[24px]  max-[500px]:h-[24px] "
                src={profile_img}
                alt=""
              />
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
          <div className="w-full h-[1px] bg-[#E4E9F2] mt-[34px]  max-[500px]:hidden"></div>
        </header>
        <div
          className={` z-4 bg-[#FFF] absolute top-0 left-0 flex h-[100vh] ${
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
        <div className="h-[100vh] flex max-w-[1100px] w-[100%] justify-between items-center max-[1210px]:px-[20px] max-[820px]:flex-col max-[500px]:w-[100%] max-[500px]:px-[0px]">
          <div className="flex flex-col max-[500px]:w-[100%]">
            <div className=" relative max-[500px]:w-[100%]">
              <button
                onClick={Prev}
                className=" cursor-pointer absolute left-[16px] top-[50%] min-[760px]:hidden"
              >
                <img src={left_arrow} alt="" />
              </button>
              <img
                className="w-[445px] h-[445px] max-[970px]:w-[380px] max-[970px]:h-[380px] max-[760px]:hidden"
                src={mainimg}
                alt=""
              />
              <img
                className="w-[445px] h-[445px] max-[970px]:w-[380px] max-[970px]:h-[380px] min-[760px]:hidden max-[500px]:w-[100%] max-[500px]:h-auto"
                src={ImgArray[index]}
                alt=""
              />
              <button
                onClick={Next}
                className=" absolute top-[50%] right-[16px] cursor-pointer min-[760px]:hidden"
              >
                <img src={right_arrow} alt="" />
              </button>
            </div>
            <div className="mt-[32px] flex w-full justify-between max-[970px]:mt-[15px] max-[760px]:hidden">
              <img
                onClick={FirstClick}
                className={`hover:opacity-[0.5] w-[88px] h-[88px] cursor-pointer max-[970px]:w-[70px] ${opacity}`}
                src={first_img}
                alt=""
              />
              <img
                className={`hover:opacity-[0.5] cursor-pointer max-[970px]:w-[70px] ${opacity2}`}
                onClick={SecondClick}
                src={second_img}
                alt=""
              />
              <img
                className={`hover:opacity-[0.5] cursor-pointer max-[970px]:w-[70px] ${opacity3}`}
                onClick={ThirdClick}
                src={third_img}
                alt=""
              />
              <img
                className={`hover:opacity-[0.5] cursor-pointer max-[970px]:w-[70px] ${opacity4}`}
                onClick={FourthClick}
                src={fourth_img}
                alt=""
              />
            </div>
          </div>
          <div className="max-[820px]:mt-[30px] max-[829px]:pb-[30px] max-[500px]:mt-[24px] max-[500px]:w-[100%] max-[500px]:px-[24px]">
            <p className="text-[13px] font-[700] tracking-[2px] text-[#FF7E1B] max-[500px]:text-[12px] max-[500px]:tracking-[1.8px ]">
              Sneaker Company
            </p>
            <h1 className="mt-[27px] text-[44px] text-[#1D2026] font-[700] leading-[48px] max-[970px]:text-[35px] max-[970px]:leading-[38px] max-[500px]:text-[28px] max-[500px]:leading-[32px] max-[500px]:mt-[19px]">
              Fall Limited Edition <br /> Sneakers
            </h1>
            <p className="text-[16px] font-[400] text-[#69707D] leading-[26px] mt-[32px] max-[970px]:text-[14px] max-[970px]:leading-[23px] max-[500px]:mt-[15px]">
              These low-profile sneakers are your perfect{" "}
              <br className="min-[500px]:hidden" /> casual wear{" "}
              <br className="max-[500px]:hidden" /> companion. Featuring a
              durable <br className="min-[500px]:hidden" /> rubber outer sole,
              they’ll <br className="max-[500px]:hidden" /> withstand everything{" "}
              <br className="min-[500px]:hidden" />
              the weather can offer.
            </p>
            <div className="mt-[24px] flex flex-col max-[500px]:flex-row max-[500px]:w-[100%] max-[500px]:justify-between">
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
                className=" hover:opacity-[0.5] flex px-[76px] h-[56px] items-center bg-[#FF7E1B] rounded-[10px] w-[272px] justify-between cursor-pointer max-[970px]:w-[200px] max-[970px]:px-[40px] max-[500px]:w-[100%] max-[500px]:px-[104px]"
              >
                <img src={white_cart} alt="" />
                <p className="text-[16px] font-[700] text-[#fff]">
                  Add to cart
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
