const FormInput = ({
  inputLabel,
  labelFor,
  inputType,
  inputId,
  inputName,
  ariaLabelName,
  value,
  onChange,
}) => {
  return (
    <div className="mt-6">
      <label
        className="block text-lg text-primary-dark dark:text-gray-900 mb-2"
        htmlFor={labelFor}
      >
        {inputLabel}
      </label>
      <input
        className="w-full px-5 py-2 border border-violet-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-violet-100 dark:bg-violet-100 rounded-3xl shadow-sm text-md focus:outline-none focus:ring-0 hover:border-none"
        type={inputType}
        id={inputId}
        name={inputName}
        aria-label={ariaLabelName}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;
