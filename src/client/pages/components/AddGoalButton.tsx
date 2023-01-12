import React from "react";
import addButtonFlag from "client/assets/images/savings/add-flag.webp";
type AddGoalButtonProps = {
  onClick?: () => void;
};
export const AddGoalButton = ({ onClick }: AddGoalButtonProps) => {
  return (
    <button
      className="rounded-full h-14 w-14 bg-skin-primary shadow-button"
      onClick={onClick}
    >
      <div className="p-3.5">
        <img src={addButtonFlag} />
      </div>
    </button>
  );
};
