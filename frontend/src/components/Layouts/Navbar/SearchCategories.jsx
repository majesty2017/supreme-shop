import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { DropDown, NavItems } from "../..";

const Categories = ({
  dropDown,
  categoriesData,
  activeHeading,
  setDropDown,
  onClick,
}) => {
  return (
    <>
      <div onClick={onClick}>
        <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
          <BiMenuAltLeft
            size={30}
            className="absolute top-3 left-2 cursor-pointer"
          />
          <button
            className={`h-full w-full flex items-center justify-between pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}
          >
            All Categories
          </button>
          <IoIosArrowDown
            size={20}
            className="absolute top-2 right-4 cursor-pointer"
            onClick={onClick}
          />
          {dropDown ? (
            <DropDown
              categoriesData={categoriesData}
              setDropDown={setDropDown}
            />
          ) : null}
        </div>
      </div>

      <NavItems activeHeading={activeHeading} />
    </>
  );
};

export default Categories;
