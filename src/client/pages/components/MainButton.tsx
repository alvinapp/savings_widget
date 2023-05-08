import React from "react";
import { TailSpin } from "react-loader-spinner";

type MainButonProps = {
  title?: string;
  click?: () => void;
  isDisabled?: boolean;
  loading?: boolean;
};

const MainButton = ({
  title,
  click,
  isDisabled = false,
  loading,
}: MainButonProps) => {
  return (
    <button
      className={`my-3.5 bg-skin-primary rounded-lg text-white font-poppins font-semibold tracking-widest w-full h-14 shadow-button text-base ${
        isDisabled ? "disabled:opacity-25 focus:outline-none" : ""
      }`}
      disabled={isDisabled}
      onClick={loading ? () => {} : click}
    >
      <div className="flex flex-row justify-center items-center">
        <div>
          {loading ? (
            <TailSpin
              height="30"
              width="30"
              color="#ffffff"
              ariaLabel="tail-spin-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          ) : (
            <div>{title}</div>
          )}
        </div>
      </div>
    </button>
  );
};
export default MainButton;
