import CloseButton from "../components/CloseButton";
type DeleteGoalProps = {
  keepGoal?: () => void;
  deleteGoal?: () => void;
  onClick?: () => void;
  goalName?: string;
};

export const DeleteGoal = ({
  deleteGoal,
  onClick,
  keepGoal,
  goalName,
}: DeleteGoalProps) => {
  return (
    <div className="flex flex-col mx-3.5 mt-16 mb-8 relative">
      <div className="absolute -top-16 right-1">
        <CloseButton
          background="bg-skin-secondaryWithOpacity"
          onClick={onClick}
        />
      </div>
      <div className="flex flex-row justify-start item-start font-medium text-tiny font-custom text-skin-base tracking-subtitle mr-4 mb-8">
        {`Are you sure you’d like to delete your ${goalName ?? ""} goal?`}
      </div>
      <button
        className="rounded-lg text-skin-primary py-3.5 bg-skin-danger"
        onClick={deleteGoal}
      >
        <div className="flex flex-row justify-center items-center">
          <div className="text-base font-semibold font-custom tracking-longest_text ml-2 text-skin-white">
            Yes, delete goal
          </div>
        </div>
      </button>
      <button
        className="rounded-lg text-skin-danger py-3.5 mt-3"
        onClick={keepGoal}
      >
        <div className="flex flex-row justify-center items-center">
          <div className="text-base font-semibold font-custom tracking-longest_text ml-2 text-skin-primary border border-skin-primary w-screen rounded-lg h-14 flex flex-row items-center justify-center">
            No, let's keep the goal
          </div>
        </div>
      </button>
    </div>
  );
};
