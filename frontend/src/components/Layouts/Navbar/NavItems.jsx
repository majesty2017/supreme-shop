import React from "react";
import { NavItemRow, Navbar } from "../../";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const NavItems = ({ activeHeading }) => {
  return (
    <div className="flex items-center">
      <Navbar activeHeading={activeHeading} />
      <div className="flex">
        <NavItemRow number={0} Icon={AiOutlineHeart} />
        <NavItemRow number={1} Icon={AiOutlineShoppingCart} />
        <NavItemRow isProfile Icon={CgProfile} />
      </div>
    </div>
  );
};

export default NavItems;
