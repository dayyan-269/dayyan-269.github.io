const Textarea = ({
  className,
  value,
  placeholder,
  compName,
  isRequired = false,
  cols = 15,
  rows = 10,
}) => {
  return (
    <textarea
      className={`rounded px-2 py-1 bg-secondary-color text-white ${className}`}
      name={compName}
      cols={cols}
      rows={rows}
      defaultValue={value}
      required={isRequired}
      placeholder={placeholder}
    ></textarea>
  );
};

export default Textarea;
