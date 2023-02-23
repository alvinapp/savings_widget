import React from "react";
type CreateGoalCardProps = {
  goalImage?: string;
  goalName?: string;
  onClick?: () => void;
};
const CreateGoalCard = ({
  goalImage,
  goalName,
  onClick,
}: CreateGoalCardProps) => {
  return (
    <div className="rounded-lg shadow-card w-40" onClick={onClick}>
      <div className="flex flex-col ">
        <div className="h-32 w-40">
          <img src={goalImage ?? ""} className="h-32 w-40 rounded-t-lg" />
        </div>
        <div className="flex flex-row px-2.5 py-2 font-poppins font-medium text-xs -tracking-tight text-skin-primary">
          {goalName}
        </div>
      </div>
    </div>
  );
};
export default CreateGoalCard;
