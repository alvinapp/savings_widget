import React from "react";

type MainButonProps = {
  title?: string;
  click?: () => void;
  isDisabled?: boolean;
};

const MainButton = ({ title, click, isDisabled = false }: MainButonProps) => {
  return (
    <button
      className={`my-3.5 bg-skin-primary rounded-lg text-white font-poppins font-semibold tracking-widest w-full h-14 shadow-button text-base ${
        isDisabled ? "disabled:opacity-25 focus:outline-none" : ""
      }`}
      disabled={isDisabled}
      onClick={click}
    >
      {title}
    </button>
  );
};
export default MainButton;
