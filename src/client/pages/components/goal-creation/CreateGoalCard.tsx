import React from "react";
type CreateGoalCardProps = {
  goalImage?: string;
  goalName?: string;
};
const CreateGoalCard = ({ goalImage, goalName }: CreateGoalCardProps) => {
  return (
    <div className="rounded-lg shadow-card w-40">
      <div className="flex flex-col ">
        <div className="h-32 w-40">
          <img src={goalImage} className="h-32 w-40 rounded-t-lg" />
        </div>
        <div className="flex flex-row px-2.5 py-2 font-poppins font-medium text-xs -tracking-tight text-skin-primary">{goalName}</div>
      </div>
    </div>
  );
};
export default CreateGoalCard;
