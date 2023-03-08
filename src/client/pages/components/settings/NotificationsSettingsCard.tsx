import React, { useState } from "react";
import Switch from "react-switch";
export const NotificationsSettingsCard = () => {
  const [enableNotification, setEnableNotification] = useState(false);
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <div className="tracking-listtile_subtitle font-poppins text-tiny text-skin-base font-medium">
          Smart savings
        </div>
        <div className="tracking-subtitle font-poppins text-xs text-skin-subtitle font-medium mt-2 text-start mr-10">
          Stay on top of your savings journey without having to check the app.
        </div>
      </div>
      <div className="flex flex-col">
        <Switch
          onChange={() => setEnableNotification(!enableNotification)}
          checked={enableNotification}
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#056489"
          offColor="#878787"
          boxShadow="#ffffff"
          activeBoxShadow="#ffffff"
        />
      </div>
    </div>
  );
};
