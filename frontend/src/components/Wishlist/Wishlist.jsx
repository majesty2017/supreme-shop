import { RxCross1 } from "react-icons/rx";
import {SingleWishlist} from "..";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";


const Wishlist = ({
  openWishlist,
  setOpenWishlist,
  onClickWishlist,
  onClickCloseWishlist,
}) => {
  const cartData = [
    {
      name: "iPhone 14 pro max 256 gb ssd",
      description: "test",
      price: 999.5,
    },
    {
      name: "iPhone 14 pro max 256 gb ssd",
      description: "test",
      price: 700.99,
    },
    {
      name: "iPhone 14 pro max 256 gb ssd",
      description: "test",
      price: 1024.9,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div>
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={onClickCloseWishlist}
            />
          </div>
          {/* Item length */}
          <div className="flex items-center p-4">
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] fon-[500]">3 items</h5>
          </div>
          {/* single cart item */}
          <div className="w-full border-t">
            {cartData &&
              cartData.map((item, index) => (
                <SingleWishlist key={index} data={item} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist