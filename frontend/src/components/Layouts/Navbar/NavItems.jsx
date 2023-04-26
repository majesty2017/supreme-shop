import React from "react";
import { NavItemRow, Navbar } from "../../";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const NavItems = ({
  activeHeading,
  isAuthenticated,
  user,
  openCart,
  setOpenCart,
  openWishlist,
  setOpenWishlist,
  onClick,
  closeClick,
}) => {
  return (
    <div className="flex items-center">
      <Navbar activeHeading={activeHeading} />
      <div className="flex">
        <NavItemRow
          openWishlist={openWishlist}
          setOpenWishlist={setOpenWishlist}
          number={0}
          Icon={AiOutlineHeart}
          onClick={onClick}
          closeClick={closeClick}
        />
        <NavItemRow
          openCart={openCart}
          setOpenCart={setOpenCart}
          number={1}
          Icon={AiOutlineShoppingCart}
          onClick={onClick}
          closeClick={closeClick}
        />
        <NavItemRow
          isAuthenticated={isAuthenticated}
          user={user}
          isProfile
          Icon={CgProfile}
        />
      </div>
    </div>
  );
};

export default NavItems;
