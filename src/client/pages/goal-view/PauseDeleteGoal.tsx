import React from "react";
import { FiPauseCircle, FiTrash2 } from "react-icons/fi";
import CloseButton from "../components/CloseButton";
type PauseDeleteGoalProps = {
  pauseGoal?: () => void;
  deleteGoal?: () => void;
  onClick?: () => void;
};

export const PauseDeleteGoal = ({
  pauseGoal,
  deleteGoal,
  onClick,
}: PauseDeleteGoalProps) => {
  return (
    <div className="flex flex-col mx-3.5 mt-16 mb-8 relative">
      <div className="absolute -top-16 right-1">
        <CloseButton
          background="bg-skin-secondaryWithOpacity"
          onClick={onClick}
        />
      </div>
      <button
        className="rounded-lg border border-1 border-skin-primary text-skin-primary py-3.5 mt-5"
        onClick={pauseGoal}
      >
        <div className="flex flex-row justify-center items-center">
          <FiPauseCircle />
          <div className="text-base font-semibold font-poppins tracking-longest_text ml-2">
            Pause goal
          </div>
        </div>
      </button>
      <button
        className="rounded-lg text-skin-danger py-3.5 mt-3"
        onClick={deleteGoal}
      >
        <div className="flex flex-row justify-center items-center">
          <FiTrash2 />
          <div className="text-base font-semibold font-poppins tracking-longest_text ml-2">
            Delete goal
          </div>
        </div>
      </button>
    </div>
  );
};
