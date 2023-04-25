import { Link } from "react-router-dom";

const NavItemRow = ({Icon, number, isProfile}) => {
  return (
    <div className="flex items-center">
      <div className="relative cursor-pointer mr-[15px]">
        {!isProfile ? (
          <Icon size={30} color="rgb(255 255 255 / 83%)" />
        ) : (
          <Link to="/login">
            <Icon size={30} color="rgb(255 255 255 / 83%)" />
          </Link>
        )}
        {!isProfile && (
          <span
            className="absolute top-0 right-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white 
            font-mono text-[12px] leading-tight text-center"
          >
            {number}
          </span>
        )}
      </div>
    </div>
  );
};

export default NavItemRow;
