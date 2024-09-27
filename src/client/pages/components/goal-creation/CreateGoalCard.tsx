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
    <div
      className="rounded-lg shadow-card w-40"
      onClick={onClick}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div className="flex flex-col ">
        <div className="h-32">
          <img
            src={goalImage ?? ""}
            className="h-32 w-40 rounded-t-lg"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
        <div className="flex flex-row px-2.5 py-2 font-custom font-medium text-xs -tracking-tight text-skin-primary">
          {goalName}
        </div>
      </div>
    </div>
  );
};
export default CreateGoalCard;
