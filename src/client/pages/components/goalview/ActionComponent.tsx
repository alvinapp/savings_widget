import React from "react";
type ActionSectionProps = {
  child: React.ReactNode;
  title: string;
};
export const ActionComponent = ({ child, title }: ActionSectionProps) => {
  return (
    <div className="flex flex-col items-center mx-3.5">
      <div>{child}</div>
      <div className="mt-2 font-poppins text-xs text-skin-primary tracking-longtext font-semibold">
        {title}
      </div>
    </div>
  );
};
