import { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../../assets";
import { NavbarCategory, SearchBox } from "../../";
import { categoriesData, productData } from "../../../static/data";
import { IoIosArrowForward } from "react-icons/io";
import styles from "../../../styles/styles";
import { useSelector } from "react-redux";

const Header = ({activeHeading}) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false)

  const [openCart, setOpenCart] = useState(false)
  const [openWishlist, setOpenWishlist] = useState(false)

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearch(term);

    const filterProducts =
      productData &&
      productData.filter((product) =>
        product.name.toLowerCase().includes(term.toLowerCase())
      );

    setSearchData(filterProducts);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section}`}>
        <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
          <div>
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className="h-12 w-12 shadow rounded-full object-cover"
              />
            </Link>
          </div>
          <SearchBox
            searchTerm={search}
            onChange={handleSearch}
            searchData={searchData}
          />
          <div className={`${styles.button}`}>
            <Link to="/seller">
              <h1 className="text-white flex items-center">
                Become Seller <IoIosArrowForward className="ml-1" />
              </h1>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`${
          active ? "shadow-sm fixed top-0 left-0 z-10" : null
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <NavbarCategory
          dropDown={dropDown}
          onClick={() => setDropDown(!dropDown)}
          categoriesData={categoriesData}
          setDropDown={setDropDown}
          activeHeading={activeHeading}
          isAuthenticated={isAuthenticated}
          user={user}
          openCart={openCart}
          setOpenCart={setOpenCart}
          openWishlist={openWishlist}
          setOpenWishlist={setOpenWishlist}
          onClickCart={() => setOpenCart(true)}
          onClickCloseCart={() => setOpenCart(false)}
          onClickWishlist={() => setOpenWishlist(true)}
          onClickCloseWishlist={() => setOpenWishlist(false)}
        />
      </div>
    </>
  );
};

export default Header;
