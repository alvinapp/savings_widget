import React from "react";
type BuildGoalCard = {
  title?: string;
  click?: () => void;
};
export const BuildGoalCard = ({ title, click }: BuildGoalCard) => {
  return (
    <div
      className="rounded-lg bg-skin-base flex flex-row shadow-card p-3.5 items-center"
      onClick={click}
    >
      <div className="rounded-full h-10 w-10 bg-skin-secondaryWithOpacity mr-3"></div>
      <div className="font-workSans font-semibold text-sm text-skin-primary tracking-tab_text">
        {title}
      </div>
    </div>
  );
};
