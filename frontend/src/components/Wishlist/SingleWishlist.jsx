import { useState } from "react";
import { BsCartPlus } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const SingleWishlist = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="flex items-center w-full">
        <RxCross1 className="cursor-pointer" />
        <img
          src="https://cdn.shopify.com/s/files/1/1706/9177/products/NEWAppleMacbookProwithM1ProChip14InchLaptop2021ModelMKGQ3LL_A_16GB_1TBSSD_custommacbd.jpg?v=1659592838"
          alt=""
          className="w-[80px] h-[80px] ml-2"
        />
        
        <div className="pl-[2px]">
          <h1>{data.name}</h1>
          <h4 className="font-[600] text-[17px] pt-[3px] text-[#d02222] font-Roboto">
            GHS{totalPrice.toFixed(2)}
          </h4>
        </div>

        <div>
          <BsCartPlus size={20} className="cursor-pointer" title="Add to cart" />
        </div>
      </div>
    </div>
  );
};

export default SingleWishlist;
