import { FiCircle, FiCheckCircle } from "react-icons/fi";
type ConnectSuccessProps = {
  timer: number;
};

const UnlinkSuccessProgress = ({ timer }: ConnectSuccessProps) => {
  return (
    <>
      <div className="flex flex-row mb-10">
        <div>
          {timer <= 12 && timer >= 1 ? (
            <FiCircle color="rgba(255,255,255,0.5)" size="1.4375rem" />
          ) : (
            <FiCheckCircle color="#FFFFFF" size="1.4375rem" />
          )}
        </div>
        <div
          className={`${
            timer <= 12 && timer >= 1 ? " text-white/50" : " text-white "
          } font-custom text-base font-medium tracking-progress_label ml-4`}
        >
          Unlinking account
        </div>
      </div>
    </>
  );
};
export default UnlinkSuccessProgress;
