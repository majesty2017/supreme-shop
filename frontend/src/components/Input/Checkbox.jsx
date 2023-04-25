import styles from "../../styles/styles";

const RememberMe = ({name, label}) => {
  return (
      <div className={`${styles.noramlFlex}`}>
        <input
          type="checkbox"
          name={name}
          id={name}
          className="h-4 w-4 text-blue-600 focus:ring-offset-blue-500 border-gray-300 rounded"
        />
        <label htmlFor={name} className="ml-2 block text-sm text-gray-900">
            {label}
        </label>
      </div>
  );
};

export default RememberMe;
