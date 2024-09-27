import { FiCircle, FiCheckCircle } from "react-icons/fi";
type ConnectSuccessProps = {
  timer: number;
};

const ConnectSuccessProgress = ({ timer }: ConnectSuccessProps) => {
  return (
    <>
      <div className="flex flex-row mb-10">
        <div>
          {timer <= timer && timer >= 13 ? (
            <FiCircle color="rgba(255,255,255,0.5)" size="1.4375rem" />
          ) : (
            <FiCheckCircle color="#FFFFFF" size="1.4375rem" />
          )}
        </div>
        <div
          className={`${
            timer <= timer && timer >= 13 ? " text-white/50" : " text-white "
          } font-custom text-base font-medium tracking-progress_label ml-4`}
        >
          Syncing transactions
        </div>
      </div>
      {timer <= 12 ? (
        <div className="flex flex-row mb-10">
          <div>
            {timer <= 12 && timer >= 8 ? (
              <FiCircle color="rgba(255,255,255,0.5)" size="1.4375rem" />
            ) : (
              <FiCheckCircle color="#FFFFFF" size="1.4375rem" />
            )}
          </div>
          <div
            className={`${
              timer <= 12 && timer >= 8 ? " text-white/50" : " text-white "
            } font-custom text-base font-medium tracking-progress_label ml-4`}
          >
            Categorizing transactions
          </div>
        </div>
      ) : (
        <div className="flex flex-row mb-10">
          <div>
            <FiCircle color="rgba(255,255,255,0.5)" size="1.4375rem" />
          </div>
          <div className="font-custom text-base font-medium tracking-progress_label ml-4 text-white/50">
            Categorizing transactions
          </div>
        </div>
      )}
      {timer <= 7 ? (
        <div className="flex flex-row mb-10">
          <div>
            {timer <= 7 && timer >= 4 ? (
              <FiCircle color="rgba(255,255,255,0.5)" size="1.4375rem" />
            ) : (
              <FiCheckCircle color="#FFFFFF" size="1.4375rem" />
            )}
          </div>
          <div
            className={`${
              timer <= 7 && timer >= 4 ? " text-white/50" : " text-white "
            } font-custom text-base font-medium tracking-progress_label ml-4`}
          >
            Preparing your app experience
          </div>
        </div>
      ) : (
        <div className="flex flex-row mb-10">
          <div>
            {<FiCircle color="rgba(255,255,255,0.5)" size="1.4375rem" />}
          </div>
          <div className="text-white/50 font-custom text-base font-medium tracking-progress_label ml-4">
            Preparing your app experience
          </div>
        </div>
      )}
    </>
  );
};
export default ConnectSuccessProgress;
