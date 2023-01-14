import React from "react";
import { FiChevronLeft } from "react-icons/fi";
type BackButtonProps = {
  onClick?: () => void;
};
const BackButton = ({ onClick }: BackButtonProps) => {
  return (
    <button className="rounded text-page_icon" onClick={onClick}>
      <FiChevronLeft color="#6F89A5" size="1.4375rem" />
      <i data-feather="chevron-left"></i>
    </button>
  );
};
export default BackButton;
