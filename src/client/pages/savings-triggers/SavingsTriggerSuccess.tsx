import React, { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";
import Clouds from "client/assets/json_lottie/clouds.json";
import { BallTriangle } from "react-loader-spinner";
import { useQuery } from "react-query";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { showCustomToast } from "client/utils/Toast";
const SavingsTriggerSuccess = () => {
  const navigate = useNavigate();
  const configurations = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;

  const [timer, setTimer] = useState(12);
  const timeOutCallback = useCallback(() => {
    setTimer((currTimer): number => currTimer - 1);
  }, []);
  const cloudImage = {
    loop: true,
    autoplay: true,
    animationData: Clouds,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
    if (timer === 0) {
      navigate(-2);
    }
  }, [timer, timeOutCallback]);
  return (
    <div className="h-screen bg-connectSuccessBg bg-cover w-screen relative">
      <div className="absolute w-full h-full">
        <Lottie options={cloudImage} />
      </div>
      <div className="flex flex-col mx-9 absolute top-28 left-0 right-0">
        <div className="mt-72 flex flex-row justify-center mx-4">
          <div className="font-workSans text-skin-white text-2xl text-center font-semibold">
            Whoop! Round It Up activated
          </div>
        </div>
        <div className="text-xxxs font-poppins tracking-longtext text-skin-white text-center mt-4">
          Every time you make a transaction at any merchant in a Category you
          selected, we will round up to the next ₦ 1,000 and contribute this
          change to your selected savings goal.
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <BallTriangle
          height={40}
          width={40}
          color="#ffffff"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    </div>
  );
};
export default SavingsTriggerSuccess;
