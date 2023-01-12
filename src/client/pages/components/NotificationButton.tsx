import React from "react";
import notifications from "client/assets/images/savings/bell.svg";
type NotificaitonsButtonProps = {
  notificationCount?: number;
  onClick?: () => void;
};
const NotificaitonsButton = ({
  onClick,
  notificationCount,
}: NotificaitonsButtonProps) => {
  return (
    <div className="relative">
      <button className="rounded-full" onClick={onClick}>
        <img src={notifications} />
      </button>
      <div className="absolute top-0 right-0 rounded-full bg-skin-danger h-2 w-2"></div>
    </div>
  );
};
export default NotificaitonsButton;
