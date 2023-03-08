import React from "react";
import cloud from "client/assets/images/savings/cloud.png";
type HeaderProps = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
};
export const Header = ({ children, title, subtitle }: HeaderProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between items-center pb-4">
        <div className="h-11 w-11 rounded-full bg-skin-tertiary border border-1 border-skin-secondary flex justify-center items-center">
          {children}
        </div>
        <div className="w-28">
          <img src={cloud} />
        </div>
      </div>
      <div className="font-workSans text-skin-base text-xl font-semibold tracking-title mb-4">
        {title}
      </div>
      <div className="tracking-widest font-poppins text-skin-secondary text-xxxs">
        {subtitle}
      </div>
    </div>
  );
};
