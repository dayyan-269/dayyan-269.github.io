"use client";

const PrimaryButton = ({
  children,
  className,
  compType = "button",
  onClickHandler,
}) => {
  return (
    <button
      className={`rounded p-2 bg-accent-color text-white ${className}`}
      type={compType}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
