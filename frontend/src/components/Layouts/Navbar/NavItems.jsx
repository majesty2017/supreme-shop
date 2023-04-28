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
  onClickCart,
  onClickCloseCart,
  onClickWishlist,
  onClickCloseWishlist,
}) => {
  return (
    <div className="flex items-center">
      <Navbar activeHeading={activeHeading} />
      <div className="flex">
        {/* Wishlist */}
        <NavItemRow
          openWishlist={openWishlist}
          setOpenWishlist={setOpenWishlist}
          number={0}
          Icon={AiOutlineHeart}
          onClickWishlist={onClickWishlist}
          onClickCloseWishlist={onClickCloseWishlist}
        />

        {/* Cart */}
        <NavItemRow
          openCart={openCart}
          setOpenCart={setOpenCart}
          number={1}
          Icon={AiOutlineShoppingCart}
          onClickCart={onClickCart}
          onClickCloseCart={onClickCloseCart}
        />
        
        {/* User profile */}
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
