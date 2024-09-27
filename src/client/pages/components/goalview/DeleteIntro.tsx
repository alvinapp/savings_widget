import React from "react";
import CloseButton from "../CloseButton";
import { FiTrash2 } from "react-icons/fi";
type PauseDeleteGoalProps = {
  deleteGoal?: () => void;
  onClick?: () => void;
};
export const DeleteIntro = ({ deleteGoal, onClick }: PauseDeleteGoalProps) => {
  return (
    <div className="flex flex-col mx-3.5 mt-16 mb-8 relative">
      <div className="absolute -top-16 right-1">
        <CloseButton
          background="bg-skin-secondaryWithOpacity"
          onClick={onClick}
        />
      </div>
      <button
        className="rounded-lg border border-1 border-skin-danger text-skin-danger py-3.5 mt-3"
        onClick={deleteGoal}
      >
        <div className="flex flex-row justify-center items-center">
          <FiTrash2 />
          <div className="text-base font-semibold font-custom tracking-longest_text ml-2">
            Delete goal
          </div>
        </div>
      </button>
    </div>
  );
};
