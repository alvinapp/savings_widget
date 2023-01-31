import { dateFormat } from "client/utils/Formatters";
import { string } from "prop-types";
import React from "react";

type NotificaitonCardProps = {
  date: Date;
  image?: string;
  description?: string;
};
export const NotificaitonCard = ({
  date,
  image,
  description,
}: NotificaitonCardProps) => {
  const createdDate = new Date(date);
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-start">
          <div className="font-poppins font-medium text-xxxs tracking-subtitle text-skin-subtitle">
            {dateFormat(createdDate)}
          </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-2">
          <div className="flex flex-col">
            <div className="relative">
              <div className="rounded-full bg-skin-secondaryWithOpacity h-8 w-8 mr-3 shadow-card">
                <img src={image} />
              </div>
              <div className="rounded-full absolute top-0 right-2.5 bg-skin-danger h-2 w-2"></div>
            </div>
          </div>
          <div className="font-poppins text-xs text-skin-base tracking-wide mr-12">
            {description}
          </div>
        </div>
        <div className="flex flex-row justify-center mt-3">
          <div className="mr-2">
            <ActionButton
              label="Ask me later"
              bgColor="bg-skin-tertiary"
              labelColor="text-skin-neutral"
            />
          </div>
          <ActionButton
            label="Resume goal"
            bgColor="bg-skin-primary"
            labelColor="text-skin-white"
          />
        </div>
      </div>
      <div className="border border-1 rounded-full mt-4"></div>
    </div>
  );
};

type ActionButtonProps = {
  label?: string;
  onClick?: () => void;
  bgColor?: string;
  labelColor?: string;
};
const ActionButton = ({
  label,
  onClick,
  bgColor,
  labelColor,
}: ActionButtonProps) => {
  return (
    <div
      className={`rounded flex items-center justify-center font-poppins text-xs tracking-longtext ${bgColor} px-3.5 py-2`}
    >
      <div className={`${labelColor}`}>{label}</div>
    </div>
  );
};
