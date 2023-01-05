import React from 'react';

type ConnectDetailsProps = {
  title?: string;
  subtitle?: string;
};

const ConnectDetails = ({title, subtitle}: ConnectDetailsProps) => {
  return (
    <div className="flex flex-col justify-center mx-2">
      <div className="font-workSans font-semibold text-base tracking-title text-black text-center mb-3">
        {title}
      </div>
      <div className="font-poppins text-black text-xs text-center tracking-subtitle">
        {subtitle}
      </div>
    </div>
  );
};
export default ConnectDetails;
