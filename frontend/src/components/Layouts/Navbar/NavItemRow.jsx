import { Link } from "react-router-dom";
import { backend_url } from "../../../server";
import { Cart, Wishlist } from "../../";

const NavItemRow = ({
  Icon,
  number,
  isAuthenticated,
  user,
  isProfile,
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
    <>
      <div className="flex items-center">
        <div
          className="relative cursor-pointer mr-[15px]"
          onClick={onClickCart ? onClickCart : onClickWishlist}
        >
          {!isProfile ? (
            <Icon size={30} color="rgb(255 255 255 / 83%)" />
          ) : (
            <>
              {isAuthenticated ? (
                <Link to="/profile">
                  <img
                    src={`${backend_url}/${user.avatar}`}
                    alt={user.name}
                    className="w-[35px] h-[35px] rounded-full object-cover"
                  />
                </Link>
              ) : (
                <Link to="/login">
                  <Icon size={30} color="rgb(255 255 255 / 83%)" />
                </Link>
              )}
            </>
          )}
          {!isProfile && (
            <span
              className="absolute top-0 right-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white 
            font-mono text-[12px] leading-tight text-center"
            >
              {number}
            </span>
          )}
        </div>
      </div>

      {/* cart popup */}
      {openCart ? (
        <Cart
          openCart={openCart}
          setOpenCart={setOpenCart}
          onClickCloseCart={onClickCloseCart}
        />
      ) : null}

      {/* wishlist popup */}
      {openWishlist ? (
        <Wishlist
          openWishlist={openWishlist}
          setOpenWishlist={setOpenWishlist}
          onClickCloseWishlist={onClickCloseWishlist}
        />
      ) : null}
    </>
  );
};

export default NavItemRow;
