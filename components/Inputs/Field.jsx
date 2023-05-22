const Field = ({
  className,
  value,
  isRequired,
  placeholder,
  compName,
  compType = "text",
}) => {
  return (
    <input
      className={`rounded p-2 bg-secondary-color text-white prose-sm border-none ${className}`}
      type={compType}
      defaultValue={value}
      required={isRequired}
      placeholder={placeholder}
      name={compName}
    />
  );
};

export default Field;
