import React from "react";
import Header_left_div from "../../__molecules/header_left_div/Header_left_div";
import Cart_quantity_div from "../../__molecules/cart_quantity_div/Cart_quantity_div";
import Cart_list_div from "../../__molecules/cart_list_div/Cart_list_div";

function Header({
  HandleBurgerClick,
  burger_menu_img,
  logo,
  array,
  CartClicked,
  shopping_cart,
  profile_img,
  cartclick,
  cartheight,
  DeleteFunc,
  delete_img,
}) {
  return (
    <header className=" relative px-[165px] flex flex-col justify-between py-[45px]  w-[100%] max-[1400px]:px-[20px] max-[500px]:py-[20px]">
      <div className="flex justify-between w-[100%]">
        <Header_left_div
          HandleBurgerClick={HandleBurgerClick}
          burger_menu_img={burger_menu_img}
          logo={logo}
        />
        <div className="relative flex gap-[45px]  max-[500px]:gap-[22px]">
          <Cart_quantity_div
            array={array}
            CartClicked={CartClicked}
            shopping_cart={shopping_cart}
          />
          <img
            className=" cursor-pointer w-[50px] h-[50px] max-[500px]:w-[24px]  max-[500px]:h-[24px] "
            src={profile_img}
            alt=""
          />
          <Cart_list_div
            cartclick={cartclick}
            cartheight={cartheight}
            array={array}
            DeleteFunc={DeleteFunc}
            delete_img={delete_img}
          />
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#E4E9F2] mt-[34px]  max-[500px]:hidden"></div>
    </header>
  );
}

export default Header;
