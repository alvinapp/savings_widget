import React from 'react';

type MainButonProps = {
  title?: string;
  click?: () => void;
  isDisabled?: boolean;
};

const MainButton = ({title, click, isDisabled = false}: MainButonProps) => {
  return (
    <button
      className={`my-3.5 bg-primary rounded-lg text-white font-poppins font-semibold tracking-widest w-full h-14 shadow-button text-base ${
        isDisabled ? 'disabled:opacity-25 focus:outline-none' : ''
      } al-main-button`}
      disabled={isDisabled}
      onClick={click}
      id="al__primary-button"
    >
      {title}
    </button>
  );
};
export default MainButton;
