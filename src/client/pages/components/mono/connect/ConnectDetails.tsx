import React from "react";

type ConnectDetailsProps = {
  title?: string;
  subtitle?: string;
};

const ConnectDetails = ({ title, subtitle }: ConnectDetailsProps) => {
  return (
    <div className="flex flex-col justify-center mx-2">
      <div className="font-custom font-semibold text-2xl tracking-title text-skin-base text-center mb-3">
        {title}
      </div>
      <div className="font-custom text-skin-base text-sm text-center tracking-subtitle pr-6">
        {subtitle}
      </div>
    </div>
  );
};
export default ConnectDetails;
