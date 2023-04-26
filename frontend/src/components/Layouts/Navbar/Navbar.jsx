import { Link } from "react-router-dom";
import { navItems } from "../../../static/data";

const Navbar = ({ activeHeading }) => {
  return (
    <div className="flex items-center">
      {navItems &&
        navItems.map((item, index) => (
          <div className="flex"
              key={item.title}>
            <Link
              to={item.url}
              className={`${
                activeHeading === index + 1 ? "text-[#17dd1f]" : "text-white"
              } font-[500] px-6 cursor-pointer`}
            >
              {item.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
