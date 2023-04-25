import { SearchCategories } from "../..";
import styles from "../../../styles/styles";

const Navbar = ({ dropDown, categoriesData, setDropDown, onClick }) => {
  return (
    <div
      className={`${styles.section} relative flex items-center justify-between`}
    >
      <SearchCategories
        dropDown={dropDown}
        onClick={onClick}
        categoriesData={categoriesData}
        setDropDown={setDropDown}
      />
    </div>
  );
};

export default Navbar;
