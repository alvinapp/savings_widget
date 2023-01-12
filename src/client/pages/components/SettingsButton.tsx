import React from "react";
import settings from "client/assets/images/savings/settings.svg";
type SettingsButtonProps = {
  onClick?: () => void;
};
const SettingsButton = ({ onClick }: SettingsButtonProps) => {
  return (
    <button className="rounded-full" onClick={onClick}>
      <img src={settings} />
    </button>
  );
};
export default SettingsButton;
