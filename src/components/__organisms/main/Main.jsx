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
import Header from "../header/Header";
import Burger_menu from "../../__molecules/burger_menu/Burger_menu";
import Images_div from "../../__molecules/images_div/Images_div";
import Buttons_div from "../../__molecules/buttons_div/Buttons_div";
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
        className={` h-[100vh] flex flex-col items-center w-[100%] ${
          BurgerMenu ? "overflow-y-hidden" : "overflow-y-auto"
        }`}
      >
        <Header
          HandleBurgerClick={HandleBurgerClick}
          burger_menu_img={burger_menu_img}
          logo={logo}
          array={array}
          CartClicked={CartClicked}
          shopping_cart={shopping_cart}
          profile_img={profile_img}
          cartclick={cartclick}
          cartheight={cartheight}
          DeleteFunc={DeleteFunc}
          delete_img={delete_img}
        />
        <Burger_menu BurgerMenu={BurgerMenu} />
        <div className="h-[100vh] flex max-w-[1100px] w-[100%] justify-between items-center max-[1210px]:px-[20px] max-[820px]:flex-col max-[500px]:w-[100%] max-[500px]:px-[0px]">
          <Images_div
            Prev={Prev}
            left_arrow={left_arrow}
            mainimg={mainimg}
            ImgArray={ImgArray}
            index={index}
            Next={Next}
            right_arrow={right_arrow}
            FirstClick={FirstClick}
            first_img={first_img}
            opacity={opacity}
            opacity2={opacity2}
            opacity3={opacity3}
            opacity4={opacity4}
            SecondClick={SecondClick}
            second_img={second_img}
            ThirdClick={ThirdClick}
            third_img={third_img}
            FourthClick={FourthClick}
            fourth_img={fourth_img}
          />
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
            <Buttons_div
              dispath={dispath}
              state={state}
              minus_img={minus_img}
              plus_img={plus_img}
              AddToCart={AddToCart}
              white_cart={white_cart}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
