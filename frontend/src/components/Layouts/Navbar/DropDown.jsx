import { useNavigate } from "react-router-dom";

const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const handleSubmit = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };

  return (
    <div className="pb-4 w-[270px] bg-white absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((item, index) => (
          <div key={index} className="flex items-center" onClick={() => handleSubmit(item)}>
            <img src={item.image_Url} alt={item.title} className="w-[25px] h-[25px] object-contain ml-{10px} select-none" />
            <h3 className="m-3 cursor-pointer select-none">{item.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
