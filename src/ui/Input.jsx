function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  label,
  name,
  variant = "default",
  className = "",
  ...props
}) {
  const baseStyles =
    "font-poppins w-full px-4 py-3 rounded-lg border outline-none transition-all";

  const variants = {
    default:
      "border-[#D0D0D0] focus:border-teal focus:ring-1 focus:ring-teal",
    filled:
      "bg-light-bg border-transparent focus:border-teal focus:ring-1 focus:ring-teal",
    outline:
      "border-dark-blue focus:border-teal focus:ring-1 focus:ring-teal",
  };

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={name}
          className="font-family-poppins text-sm font-medium text-[#575757]"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      />
    </div>
  );
}

export default Input;
