import React from "react";
import { FiPlus } from "react-icons/fi";
type AddRuleButtonProps = {
  label?: string;
  onClick?: () => void;
};
export const AddRuleButton = ({ label, onClick }: AddRuleButtonProps) => {
  return (
    <div className="flex flex-row items-center ml-4" onClick={onClick}>
      <div className="w-8 h-8 text-skin-primary bg-skin-secondaryWithOpacity rounded-full mr-3 flex items-center justify-center">
        <FiPlus size="1rem" />
      </div>
      <div className="font-custom font-semibold text-tiny tracking-tab_text text-skin-neutral">
        {label}
      </div>
    </div>
  );
};
