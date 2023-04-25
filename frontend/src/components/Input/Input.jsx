import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const Input = ({
  label,
  type,
  name,
  autoComplete,
  value,
  required,
  onChange,
  isPassword,
}) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className={`mt-1 ${isPassword && "relative"}`}>
        <input
          type={isPassword ? visible ? 'text' : 'password' : type}
          name={name}
          autoComplete={autoComplete}
          value={value}
          required={required}
          onChange={onChange}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 sm:text-sm shadow-sm rounded-md 
          placeholder:placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {isPassword && (
          <>
            {visible ? (
              <AiOutlineEye
                size={25}
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setVisible(false)}
              />
            ) : (
              <AiOutlineEyeInvisible
                size={25}
                className="absolute right-2 top-2 cursor-pointer"
                onClick={() => setVisible(true)}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;
