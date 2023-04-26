import { SearchCategories } from "../..";
import styles from "../../../styles/styles";

const Navbar = ({
  dropDown,
  categoriesData,
  activeHeading,
  setDropDown,
  onClick,
  isAuthenticated,
  user,
  openCart,
  setOpenCart,
  openWishlist,
  setOpenWishlist,
  onClick1,
  closeClick,
}) => {
  return (
    <div
      className={`${styles.section} relative flex items-center justify-between`}
    >
      <SearchCategories
        dropDown={dropDown}
        onClick={onClick}
        categoriesData={categoriesData}
        setDropDown={setDropDown}
        activeHeading={activeHeading}
        isAuthenticated={isAuthenticated}
        user={user}
        openCart={openCart}
        setOpenCart={setOpenCart}
        openWishlist={openWishlist}
        setOpenWishlist={setOpenWishlist}
        onClick1={onClick1}
        closeClick={closeClick}
      />
    </div>
  );
};

export default Navbar;
