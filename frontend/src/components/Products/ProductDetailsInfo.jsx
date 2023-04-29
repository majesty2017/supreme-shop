import { useState } from "react";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";

const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px-10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative">
          <h5
            className="text-black text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-black text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
        <div className="relative">
          <h5
            className="text-black text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(3)}
          >
            Seller Information
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`} />
          ) : null}
        </div>
      </div>

      <div>
        {active === 1 && (
          <>
            <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
              Product details are a crucial part of any eCommerce website or
              online marketplace. These details help the potential customers to
              make an informed decision about the product they are interested in
              buying. A well-written product description can also be a powerful
              marketing tool that can help to increase sales.Product details
              typically include information about the product's features,
              specifications, dimensions, weight, materials, and other relevant
              information that can help customers to understand the product
              better. The product details section should also include
              high-quality images and videos of the product, as well as customer
              reviews and ratings.
            </p>

            <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
              Sound Quality: The Asus gaming headphone provides excellent sound
              quality with its powerful 7.1 virtual surround sound system.
              <br />
              <br />
              Microphone: The headphone has a built-in microphone that is
              adjustable and can be easily detached when not in use.
              <br />
              <br />
              Comfort: The headphones are designed for maximum comfort, with
              soft ear cups and an adjustable headband to fit any head size.
              <br />
              <br />
              Compatibility: The headphone is compatible with most gaming
              systems and devices, including PC, Mac, Xbox, PlayStation, and
              more. Multi-Platform
              <br />
              <br />
              Compatibility: This gaming headphone is compatible with most
              platforms like Windows, Mac, Linux, PlayStation, Xbox, Nintendo
              Switch, and mobile devices with 3.5mm jack.
            </p>

            <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
              Sound Quality: The Asus gaming headphone provides excellent sound
              quality with its powerful 7.1 virtual surround sound system.
              <br />
              <br />
              Microphone: The headphone has a built-in microphone that is
              adjustable and can be easily detached when not in use.
              <br />
              <br />
              Comfort: The headphones are designed for maximum comfort, with
              soft ear cups and an adjustable headband to fit any head size.
              <br />
              <br />
              Compatibility: The headphone is compatible with most gaming
              systems and devices, including PC, Mac, Xbox, PlayStation, and
              more. Multi-Platform
              <br />
              <br />
              Compatibility: This gaming headphone is compatible with most
              platforms like Windows, Mac, Linux, PlayStation, Xbox, Nintendo
              Switch, and mobile devices with 3.5mm jack.
            </p>
          </>
        )}

        {active === 2 && (
          <div className="w-full min-h-[40vh] flex items-center justify-center">
            <p>No Rewiews yet!</p>
          </div>
        )}

        {active === 3 && (
          <div className="w-full block 800px:flex p-5">
            <div className="w-full 800px:w-[50%]">
              <div className="flex items-center">
                <img
                  src={data.shop.shop_avatar.url}
                  alt=""
                  className="w-[50px] h-[50px] rounded-full"
                />
                <div className="pl-3">
                  <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                  <h5 className="pb-2 text-[15px]">
                    ({data.shop.ratings}) Ratings
                  </h5>
                </div>
              </div>
              <p className="pt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                distinctio quas sunt, ab libero, consectetur mollitia fugit nemo
                sequi deleniti dolor error, quidem eius. Sit enim ut labore
                repellendus nemo.
              </p>
            </div>

            <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
              <div className="text-left">
                <h5 className="font-[600]">
                  Joined on: <span className="font-[500]">29 April, 2023</span>
                </h5>
                <h5 className="font-[600] mt-3">
                  Total Products: <span className="font-[500]">2,092</span>
                </h5>
                <h5 className="font-[600] mt-3">
                  Total Reviews: <span className="font-[500]">223</span>
                </h5>
                <Link to="/">
                  <div
                    className={`${styles.button} !rounded-[4px] !h-[39.5px] mt-3`}
                  >
                    <h4 className="text-white">Visit Shop</h4>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsInfo;
