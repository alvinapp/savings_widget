import React from 'react';
import {FiX} from 'react-icons/fi';

type CloseButtonProps = {
  onClick?: () => void;
};
const CloseButton = ({onClick}: CloseButtonProps) => {
  return (
    <button className="rounded-full" onClick={onClick}>
      <FiX color="#6F89A5" size="1.4375rem" />
    </button>
  );
};
export default CloseButton;
