import React, { ReactNode } from "react";
type SettingCardProps = {
  iconBackground?: string;
  iconColor?: string;
  leading?: React.ReactNode;
  trailing?: React.ReactNode;
  title?: string;
  subtitle?: string;
  trailingColor?: string;
  onClick?: () => void;
};
export const SettingsCard = ({
  iconBackground,
  leading,
  trailing,
  title,
  subtitle,
  iconColor,
  trailingColor,
  onClick,
}: SettingCardProps) => {
  return (
    <div
      className="shadow-card flex flex-row items-center pt-4.5 pb-3.5 pr-4 pl-3 rounded-lg relative"
      onClick={onClick}
    >
      <div className="flex flex-col items-center mr-3">
        <div
          className={`h-10 w-10 rounded-full flex items-center justify-center ${iconBackground} ${iconColor}`}
        >
          {leading}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className=" font-custom font-medium text-tiny text-skin-base tracking-listtile_subtitle">
              {title}
            </div>
            {subtitle ? (
              <div className=" font-custom font-medium text-xs text-skin-subtitle tracking-listtile_subtitle">
                {subtitle}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute right-2 top-1/3">
        <div className={`${trailingColor}`}>{trailing}</div>
      </div>
    </div>
  );
};
