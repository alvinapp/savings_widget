import React, { useState } from "react";
import BackButton from "../../components/BackButton";
import NavBar from "../../components/NavBar";
import triggersOverlay from "../../../assets/images/savings/goalviewoverlay.svg";
import { useNavigate } from "react-router-dom";
import Slider from "rc-slider";
import { CustomAmountButton } from "../../components/CustomAmountButton";
import { CustomDropDown } from "../../components/CustomDropDown";
import { FiArrowRight, FiCreditCard, FiFlag } from "react-icons/fi";
import arrowRight from "../../assets/images/savings/bell.svg";
/* @ts-ignore */
import SlideButton from "react-slide-button";
import ReactSlider from "react-slider";
import useGoalStore from "client/store/goalStore";
import useSavingsTriggerStore from "client/store/savingsTriggerStore";
import { useQuery } from "react-query";
import { saveTrigger } from "client/api/savings-triggers";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { TailSpin } from "react-loader-spinner";
import successTrigger from "client/assets/images/savings/trigger-success.svg";
const CreateGoalSavingsTrigger = () => {
  const navigate = useNavigate();
  const goal = useGoalStore((state: any) => state);
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const savingsTriggerStore = useSavingsTriggerStore((state: any) => state);
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
                onClick={() => {
                  navigate(-1);
                  goal.setPercentage(0);
                  goal.setMerchantName("");
                }}
              />
            </div>
          }
        />
      </div>
      <div className="w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-40 bottom-0 px-3.5 pt-12">
        <div className="flex flex-row justify-center">
          <div className="font-custom font-semibold text-2xl text-skin-base">
            Round it up
          </div>
        </div>
        <div className="flex flex-row justify-center mt-2 mx-12">
          <div className="font-custom font-medium text-tiny text-skin-subtitle tracking-listtile_subtitle text-center">
            Automatically save on your daily spending
          </div>
        </div>
        <div className="flex flex-row justify-center mt-6">
          <div className="font-custom font-semibold text-base text-skin-base tracking-title">
            I would like to round up by
          </div>
        </div>
        <div className="flex flex-row  mx-4 mt-5">
          <ReactSlider
            className="horizontal-slider"
            defaultValue={1}
            marks={[1, 2, 5, 10]}
            markClassName="example-mark"
            min={0}
            max={10}
            thumbClassName="example-thumb"
            trackClassName="example-track"
            renderThumb={(props, state) => (
              <div {...props}>{`${state.valueNow}%`}</div>
            )}
            onChange={(value) => {
              goal.setPercentage(value);
            }}
          />
        </div>
        {/* <div className="flex flex-row mt-6 justify-center">
          <div className="font-custom font-semibold text-base text-skin-base tracking-title mr-2">
            or by
          </div>
          <CustomAmountButton />
        </div> */}
        <div className="flex flex-row justify-center mt-6">
          <div className="font-custom font-semibold text-base text-skin-base tracking-title">
            every time I transact at
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-center">
          <CustomDropDown
            height="h-56"
            dataset={savingsTriggerStore.merchants_dataset}
            icon={<FiCreditCard />}
            onClick={(merchantName: string) => {
              goal.setMerchantName(merchantName);
            }}
            exactData={goal.merchant_name}
          />
        </div>
        <div className="border rounded-full bg-skin-divider mt-5.5 mb-4"></div>
        <div className="flex flex-row justify-center mt-6">
          <div className="font-custom font-semibold text-base text-skin-base tracking-title">
            and fund my
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-center">
          <CustomDropDown
            dataset={[`${goal.goalName}`]}
            icon={<FiFlag />}
            height="h-4"
            exactData={`${goal.goalName}`}
          />
        </div>
        <div className="flex flex-row justify-center mt-8">
          <div className="font-custom font-medium text-xs text-skin-subtitle tracking-listtile_subtitle text-center">
            savings goal
          </div>
        </div>
        <div className="flex flex-row mx-3.5 mt-1 mb-8 font-custom tracking-widest text-skin-primary justify-center">
          <SlideButton
            mainText="Swipe to activate"
            caret={<FiArrowRight color="#ffffff" className="absolute" />}
            onSlideDone={() => {
              navigate(-1);
            }}
            classList="my-class"
            caretClassList="my-caret-class"
            overlayClassList="my-overlay-class"
            overlayWrapperClassList="my-overlay-wrapper-class"
          />
        </div>
      </div>
      <div className="flex flex-row justify-center items-center absolute left-0 right-0 top-28">
        <div className="h-23 w-23">
          <img src={successTrigger} />
        </div>
      </div>
    </div>
  );
};
export default CreateGoalSavingsTrigger;
