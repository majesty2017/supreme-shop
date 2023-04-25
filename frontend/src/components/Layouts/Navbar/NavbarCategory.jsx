import { SearchCategories } from "../..";
import styles from "../../../styles/styles";

const Navbar = ({
  dropDown,
  categoriesData,
  activeHeading,
  setDropDown,
  onClick,
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
      />
    </div>
  );
};

export default Navbar;
