import { useEffect, useState } from "react";
import { productData } from "../../static/data";
import styles from "../../styles/styles";
import {ProductCard} from "../";

const SuggestedProducts = ({ data }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const dt =
      productData &&
      productData.filter((item) => item.category === data.category);
    setProducts(dt);
  }, [products, data.category]);

  return (
    <div>
      {data && (
        <div className={`${styles.section} p-4`}>
          <h2
            className={`${styles.heading} text-[25px] font-[500] border-b mb-5`}
          >
            Related Products
          </h2>
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
            {products &&
              products.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestedProducts;
