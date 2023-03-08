import React, { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";
import UnlinkSuccessIcon from "../components/mono/unlink-success/connect-success/UnlinkSuccessIcon";
import SuccessProgress from "../components/SuccessProgress";
import Clouds from "client/assets/json_lottie/clouds.json";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { FiThumbsUp } from "react-icons/fi";
import { useStore } from "zustand";
import useGoalStore from "client/store/goalStore";
import { useNavigate } from "react-router-dom";
const DeleteGoalSuccess = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState(12);
  const [percentage, setPercentage] = useState(0);
  const timeOutCallback = useCallback(() => {
    setTimer((currTimer): number => currTimer - 1);
    setPercentage((currPercent): number => currPercent + 10);
  }, []);
  const cloudImage = {
    loop: true,
    autoplay: true,
    animationData: Clouds,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const goal = useGoalStore((state: any) => state);
  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
    if (timer === 0) {
      navigate(-2);
    }
  }, [timer, timeOutCallback]);
  return (
    <div className="h-screen bg-connectSuccessBg bg-cover w-full">
      <div className="absolute w-full h-full">
        <Lottie options={cloudImage} />
      </div>
      <div className="flex flex-col relative">
        <div className="mt-56 flex flex-row justify-center">
          <div className="w-44 h-44 rounded-full">
            <CircularProgressbarWithChildren
              strokeWidth={2}
              value={percentage}
              styles={buildStyles({
                pathColor: `#CDE0E7`,
                trailColor: `rgba(255,255,255,0.5)`,
              })}
            >
              <FiThumbsUp size="3rem" color="#CDE0E7" />
            </CircularProgressbarWithChildren>
          </div>
        </div>
        <div className="mx-9 flex flex-col mt-12">
          <SuccessProgress
            timer={timer}
            label={`Deleting ${goal.confirmedGoal.name ?? ""}`}
          />
        </div>
      </div>
    </div>
  );
};
export default DeleteGoalSuccess;
