import React, { useState } from "react";
import BackButton from "../components/BackButton";
import NavBar from "../components/NavBar";
import triggersOverlay from "../../assets/images/savings/goalviewoverlay.svg";
import { useNavigate } from "react-router-dom";
import Slider from "rc-slider";
import { CustomAmountButton } from "../components/CustomAmountButton";
import { CustomDropDown } from "../components/CustomDropDown";
import { FiArrowRight, FiCreditCard, FiFlag } from "react-icons/fi";
import arrowRight from "../../assets/images/savings/bell.svg";
/* @ts-ignore */
import SlideButton from "react-slide-button";

const SavingsTrigger = () => {
  const navigate = useNavigate();
  const [sliderValue, setSliderValue] = useState(0);
  return (
    <div className="h-screen w-screen relative">
      <div className="h-1/2 absolute top-0 left-0 right-0">
        <div className="relative">
          <img
            src={triggersOverlay}
            className="absolute object-cover w-screen"
          />
          <div className="absolute top-28 left-0 right-0 flex flex-col items-center"></div>
        </div>
      </div>
      <div className="mt-6 absolute top-0 right-0 left-0 px-3.5">
        <NavBar
          children={
            <div className="flex flex-row justify-between items-center">
              <BackButton
                background="bg-skin-base"
                onClick={() => navigate(-1)}
              />
            </div>
          }
        />
      </div>
      <div className="w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-40 bottom-0 px-3.5 pt-9">
        <div className="flex flex-row justify-center">
          <div className="font-workSans font-semibold text-2xl text-skin-base">
            Round it up
          </div>
        </div>
        <div className="flex flex-row justify-center mt-2 mx-12">
          <div className="font-poppins font-medium text-tiny text-skin-subtitle tracking-listtile_subtitle text-center">
            Save the change by rounding up, everytime you use your card.
          </div>
        </div>
        <div className="flex flex-row justify-center mt-6">
          <div className="font-workSans font-semibold text-base text-skin-base tracking-title">
            I would like to round up by
          </div>
        </div>
        <div className="flex flex-row  mx-4 mt-5">
          <Slider
            value={sliderValue}
            onChange={(value: any) => setSliderValue(value)}
            ariaLabelledByForHandle="2"
            step={33.33}
            dots
            dotStyle={{
              background: "#6F89A5",
              height: "1.925rem",
              width: "1.925rem",
              borderRadius: "50%",
              top: "-13px",
            }}
            activeDotStyle={{
              height: "0.75rem",
              width: "0.75rem",
              borderRadius: "50%",
              background: "#056489",
              top: "-4px",
              border: "none",
            }}
            trackStyle={{
              background: "#056489",
            }}
            handleStyle={{
              height: "2.75rem",
              width: "2.75rem",
              borderRadius: "50%",
              background: "#056489",
              boxShadow: "0 2px 4px -1px #9BC1D0, 0 8px 16px -1px #9BC1D0",
              top: "-10px",
              border: "none",
              opacity: 1,
            }}
          />
        </div>
        <div className="flex flex-row mt-6 justify-center">
          <div className="font-workSans font-semibold text-base text-skin-base tracking-title mr-2">
            or by
          </div>
          <CustomAmountButton />
        </div>
        <div className="flex flex-row justify-center mt-6">
          <div className="font-workSans font-semibold text-base text-skin-base tracking-title">
            every time i use my card at
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-center">
          <CustomDropDown dataset={["All merchants"]} icon={<FiCreditCard />} />
        </div>
        <div className="border rounded-full bg-skin-divider mt-5.5 mb-4"></div>
        <div className="flex flex-row justify-center mt-6">
          <div className="font-workSans font-semibold text-base text-skin-base tracking-title">
            and fund my
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-center">
          <CustomDropDown dataset={["Spend responsibly"]} icon={<FiFlag />} />
        </div>
        <div className="flex flex-row justify-center mt-8">
          <div className="font-poppins font-medium text-xs text-skin-subtitle tracking-listtile_subtitle text-center">
            savings goal
          </div>
        </div>
        <div className="flex flex-row mx-3.5 mt-1 mb-8 font-poppins tracking-widest text-skin-primary">
          <SlideButton
            mainText="Swipe to activate"
            caret={<FiArrowRight color="#ffffff" className="absolute" />}
            onSlideDone={function () {}}
            classList="my-class"
            caretClassList="my-caret-class"
            overlayClassList="my-overlay-class"
            overlayWrapperClassList="my-overlay-wrapper-class"
          />
        </div>
      </div>
    </div>
  );
};
export default SavingsTrigger;
