import { TailSpin } from "react-loader-spinner";

type MainButonProps = {
  title?: string;
  click?: () => void;
  isDisabled?: boolean;
  loading?: boolean;
  width?: string;
  shadow?: boolean;
};

const MainButton = ({
  title,
  click,
  isDisabled = false,
  loading = false,
  width,
  shadow,
}: MainButonProps) => {
  return (
    <button
      className={`rounded-full text-white font-primary font-medium text-lg tracking-widest w-full h-14 ${
        shadow ? "shadow-button" : ""
      } ${
        isDisabled
          ? "focus:outline-none bg-[#E7E7E7] text-[#B8B8B8]"
          : " bg-skin-primary"
      }`}
      disabled={isDisabled}
      onClick={loading ? () => {} : click}
    >
      <div className="flex flex-row justify-center items-center">
        <div className={`${loading ? "mr-3" : ""}`}>{loading ? "" : title}</div>
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
          <div></div>
        )}
      </div>
    </button>
  );
};
export default MainButton;
