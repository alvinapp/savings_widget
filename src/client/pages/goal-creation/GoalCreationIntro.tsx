import { useState } from "react";

import MainButton from "client/pages/components/MainButton";
import ConnectSlider from "client/pages/components/mono/connect/ConnectSlider";
import NavBar from "client/pages/components/NavBar";
import CloseButton from "client/pages/components/CloseButton";
import money1 from "client/assets/images/money1.svg";
import money2 from "client/assets/images/money2.svg";
import money3 from "client/assets/images/money3.svg";
import Routes from "client/pages/routes";
import useAccountStore from "client/store/bankAccountStore";
import useConnectInfoStore from "client/store/connectIntroStore";
import useUserStore from "client/store/userStore";
import { useNavigate } from "react-router-dom";
import useGoalCreationStore from "client/store/goalCreationStatus";

const connectDetailsList = [
  {
    title: "Save with ease",
    subtitle:
      "Set individual savings schedules or fun savings rules for each goal you have",
    image: money1,
  },
  {
    title: "Track with ease",
    subtitle:
      "Track your savings progress from your Your Bank app so you can spend day-to-day with peace of mind",
    image: money3,
  },
];
const GoalCreationIntro = () => {
  const navigate = useNavigate();
  const slideInfoStore = useConnectInfoStore((state: any) => state);
  const userStore = useUserStore((state: any) => state);
  const slideIndex = slideInfoStore.slideIndex;
  const goalCreationStatus = useGoalCreationStore(
    (state: any) => state.goalCreationStatus
  );
  const { has_income } = goalCreationStatus;
  const slidePages = () => {
    if (slideIndex >= 1) {
      if (userStore.user.tc_accepted) {
        slideInfoStore.setSlideIndex(0);
        if (has_income) {
          navigate("/create-savings-goal");
        } else {
          navigate("/monthly-income");
        }
      } else {
        navigate("/terms-and-conditons");
        slideInfoStore.setSlideIndex(0);
      }
    } else {
      slideInfoStore.setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="h-screen">
      <div className="flex flex-col bg-white">
        <div className="mt-4 mx-3.5">
          <NavBar
            children={
              <div className="flex flex-row justify-end">
                <CloseButton
                  onClick={() => {
                    navigate(-1);
                    slideInfoStore.setSlideIndex(0);
                  }}
                />
              </div>
            }
          />
        </div>
        <div className="mt-20 mb-16">
          <ConnectSlider details={connectDetailsList} index={slideIndex} />
        </div>
        <div className="flex flex-row mt-16 fixed bottom-0 left-3 right-3">
          <MainButton
            title={`${slideIndex === 1 ? "I understand" : "Next"}`}
            click={() => slidePages()}
          />
        </div>
      </div>
    </div>
  );
};

export default GoalCreationIntro;
