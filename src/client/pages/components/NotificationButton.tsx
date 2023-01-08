import React from "react";
import notifications from "client/assets/images/savings/bell.svg";
type NotificaitonsButtonProps = {
  onClick?: () => void;
};
const NotificaitonsButton = ({ onClick }: NotificaitonsButtonProps) => {
  return (
    <button className="rounded-full" onClick={onClick}>
      <img src={notifications} />
    </button>
  );
};
export default NotificaitonsButton;
