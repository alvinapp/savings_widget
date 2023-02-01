import React from "react";
type GoalCreationProgressProps = {
  inProgress?: boolean;
  title?: string;
  subtitle?: string;
  divider?: boolean;
  children?: React.ReactNode;
};
export default function GoalCreationProgress({
  inProgress,
  title,
  subtitle,
  children,
  divider = true,
}: GoalCreationProgressProps) {
  return (
    <div className="flex flex-col mt-3 relative">
      <div className="flex flex-row pt-4">
        <div className="relative">
          <div className="w-12 h-12 rounded-full border border-1 border-skin-secondary text-center bg-white flex justify-center items-center">
            {children}
          </div>
          <div className="">

          </div>
        </div>
        <div className="flex flex-col ml-3.5">
          <div className="text-skin-primary text-xs font-poppins tracking-longtext font-semibold">
            {title}
          </div>
          <div className="text-skin-subtitle text-xxxs font-poppins tracking-longest_text font-medium mt-2">
            {subtitle}
          </div>
        </div>
      </div>
      {divider ? (
        <div className="absolute top-18 left-6 w-px h-3.5 bg-skin-accent"></div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
