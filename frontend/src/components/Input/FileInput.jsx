import { RxAvatar } from "react-icons/rx";

const FileInput = ({ avatar, onChange, name, visible, label, alt }) => {
  return (
    <div>
      <label
        htmlFor="avatar"
        className="block text-sm font-medium text-gray-700"
      ></label>
      <div className="mt-2 flex items-center">
        {visible && (
          <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
            {avatar ? (
              <img
                src={URL.createObjectURL(avatar)}
                alt={alt}
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              <RxAvatar className="h-8 w-8" />
            )}
          </span>
        )}
        <label
          htmlFor={name}
          className="ml-5 flex items-center justify-center px-4 py-2 border cursor-pointer 
          border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
        >
          {label}
        </label>
        <input
          type="file"
          name={name}
          id={name}
          accept=".jpg,.jpeg,.png"
          onChange={onChange}
          className="sr-only"
        />
      </div>
    </div>
  );
};

export default FileInput;
