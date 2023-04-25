import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

const SearchBox = ({ searchTerm, searchData, onChange }) => {
    console.log(searchData);
  return (
    <div className="w-[50%] relative">
      <input
        type="text"
        placeholder="Search Product..."
        value={searchTerm}
        onChange={onChange}
        className="h-[40px] w-full px-2 border-[#3057db] border-2 rounded-md"
      />
      <AiOutlineSearch
        size={25}
        className="absolute top-2 right-2 cursor-pointer"
      />
      {searchData && searchData.length !== 0 ? (
        <div className="absolute min-h-[30vh] border-slate-50 shadow-sm z-[9] p-4">
          {searchData &&
            searchData.map((item, index) => {
              const d = item.name;
              const product_name = d.replace(/\s+/g, "-");
              return (
                <Link to={`/product/${product_name}`} key={index}>
                  <div className="w-full flex items-start py-3">
                    <img
                      src={item.image_Url[0].url}
                      alt={item.name}
                      className="w-[40px] h-[40px] mr-[10px]"
                    />
                    <h1>{item.name}</h1>
                  </div>
                </Link>
              );
            })}
        </div>
      ) : null}
    </div>
  );
};

export default SearchBox;
