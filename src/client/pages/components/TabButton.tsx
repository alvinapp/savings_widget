import React from "react";
type TabButtonProps = {
  label?: string;
  onClick?: () => void;
  isActive?: boolean;
  children?: React.ReactNode;
};
const TabButton = ({
  label,
  onClick,
  isActive = false,
  children,
}: TabButtonProps) => {
  return (
    <div
      className={`${
        isActive
          ? " bg-[rgb(155,176,247,0.3)] rounded-full mr-2.5"
          : "bg-transparent"
      } px-3.5 py-3`}
      onClick={onClick}
    >
      <div className="flex flex-row items-center">
        <div
          className={`${
            isActive ? "text-skin-primary" : "text-skin-base"
          } mr-2`}
        >
          {children}
        </div>
        <div
          className={`${
            isActive
              ? "text-[#001D82] font-custom text-sm font-medium tracking-tab_text"
              : "text-skin-base font-custom text-sm font-medium tracking-tab_text"
          }`}
        >
          {label}
        </div>
      </div>
    </div>
  );
};
export default TabButton;
