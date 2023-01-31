import React from 'react';
import {FiPlus} from 'react-icons/fi';
type AddButtonProps = {
  onClick?: () => void;
};
const AddButton = ({onClick}: AddButtonProps) => {
  return (
    <button
      className="rounded-full text-page_icon"
      onClick={onClick}
    >
      <FiPlus color="currentColor" size="1.4375rem" />
    </button>
  );
};
export default AddButton;
