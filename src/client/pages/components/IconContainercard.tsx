import React from "react";

type IconContainerProps = {
  icon: JSX.Element;
};

export const IconContainer = ({ icon }: IconContainerProps) => {
  return (
    <div className="flex items-center justify-center w-32 h-32 border-4 border-black rounded-full my-4">
      {icon}
    </div>
  );
};
