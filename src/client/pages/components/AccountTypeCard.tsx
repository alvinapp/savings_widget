import React from "react";

type AccountTypeCardProps = {
  title?: string;
  description?: string;
  onClick?: () => void;
  disabled?: boolean;
};

export const AccountTypeCard = ({
  title,
  description,
  onClick,
  disabled = false,
}: AccountTypeCardProps) => {
  return (
    <div
      className={`flex flex-row mb-4 border-gray-300 rounded-lg p-4 cursor-pointer shadow-card hover:shadow-md ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col justify-start">
        <div
          className={`font-custom font-medium text-skin-base text-tiny md:text-sm lg:text-base xl:text-lg mb-2 ${
            disabled ? "text-gray-400" : ""
          }`}
        >
          {title}
        </div>
        <div
          className={`font-custom font-medium text-skin-subtitle text-xs md:text-sm lg:text-base xl:text-lg ${
            disabled ? "text-gray-400" : ""
          }`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};
