import { useState } from "react";

import MainButton from "client/pages/components/MainButton";
import ConnectSlider from "client/pages/components/mono/connect/ConnectSlider";
import NavBar from "client/pages/components/NavBar";
import CloseButton from "client/pages/components/CloseButton";
import money1 from "client/assets/images/money1.svg";
import money2 from "client/assets/images/money2.svg";
import money3 from "client/assets/images/money3.svg";
import Routes from "client/pages/routes";
import useAccountStore from "client/store/accountStore";
import useConnectInfoStore from "client/store/connectIntroStore";
import useUserStore from "client/store/userStore";
import { useNavigate } from "react-router-dom";

const connectDetailsList = [
  {
    title: "Save with ease",
    subtitle:
      "Double your money by automatically folding it over and putting it it back into your pocket",
    image: money1,
  },
  {
    title: "Track with ease",
    subtitle:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: money3,
  },
];
const GoalCreationIntro = () => {
  const navigate = useNavigate();
  const slideInfoStore = useConnectInfoStore((state: any) => state);
  const userStore = useUserStore((state: any) => state);
  const slideIndex = slideInfoStore.slideIndex;
  const slidePages = () => {
    if (slideIndex >= 1) {
      if (userStore.user.tc_accepted) {
        slideInfoStore.setSlideIndex(0); 
        if (userStore.user.income != null) {
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
