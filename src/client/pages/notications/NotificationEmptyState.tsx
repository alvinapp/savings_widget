import React from "react";
import image from "client/assets/images/savings/notification-empty.svg";
export const NotificationEmptyState = () => {
  return (
    <div className="mt-24">
      <div className="flex flex-row justify-center mb-5">
        <img src={image} />
      </div>
      <div className="flex flex-row justify-center font-custom font-semibold text-base tracking-title text-skin-neutral mb-3">
        You’re all caught up!
      </div>
      <div className="flex flex-row justify-center font-custom font-medium text-tiny tracking-listtile_subtitle text-center text-skin-subtitle mx-2">
        We’ll notify you once we have something new for you!
      </div>
    </div>
  );
};
