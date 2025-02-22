import React from "react";

function Images_div({
  Prev,
  left_arrow,
  mainimg,
  ImgArray,
  index,
  Next,
  right_arrow,
  FirstClick,
  first_img,
  opacity,
  opacity2,
  opacity3,
  opacity4,
  SecondClick,
  second_img,
  ThirdClick,
  third_img,
  FourthClick,
  fourth_img,
}) {
  return (
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
  );
}

export default Images_div;
