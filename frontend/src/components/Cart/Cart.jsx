import { RxCross1 } from "react-icons/rx";

const Cart = ({
  openCart,
  setOpenCart,
  openWishlist,
  setOpenWishlist,
  onClick,
  closeClick
}) => {
    const cartData = [
      {
        name: "iPhone 14 pro max 256 gb ssd",
        description: "test",
        price: 999,
      },
      {
        name: "iPhone 14 pro max 256 gb ssd",
        description: "test",
        price: 700,
      },
      {
        name: "iPhone 14 pro max 256 gb ssd",
        description: "test",
        price: 1024,
      },
    ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#0000004b] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div className="flex w-full justify-end pt-5 pr-5">
          <RxCross1 size={25} className="cursor-pointer" onClick={closeClick} />
        </div>
      </div>
    </div>
  );
};

export default Cart