import React, { useState } from "react";
import overlay from "client/assets/images/savings/overlay.svg";
import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";
import CloseButton from "../components/CloseButton";
import { AddPhotoButton } from "../components/AddPhotoButton";
import { GoalCreationInput } from "../components/goal-creation/Input";
import { FiFlag, FiTarget, FiPocket, FiTrendingUp } from "react-icons/fi";
import MainButton from "../components/MainButton";
import { BottomSheet } from "react-spring-bottom-sheet";
import { AddContributionSettings } from "./AddContributionSettings";
const AddGoalDetails = () => {
  const [openContributionSheet, setOpenContributionSheet] = useState(false);
  return (
    <div className="h-screen w-screen relative">
      <div className="h-1/2 absolute top-0 left-0 right-0">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1459257831348-f0cdd359235f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
            className="absolute top-0 right-0 left-0"
          />
          <img src={overlay} className="absolute object-cover w-screen h-72" />
          <div className="absolute top-28 left-0 right-0 flex flex-col items-center">
            <div className="mb-3">
              <AddPhotoButton />
            </div>
            <div className="font-poppins font-medium text-xs text-white tracking-subtitle">
              Tap to personalize cover photo
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 absolute top-0 right-0 left-0 px-3.5">
        <NavBar
          children={
            <div className="flex flex-row justify-between items-center">
              <BackButton background="bg-skin-base" />
              <CloseButton background="bg-skin-base" />
            </div>
          }
        />
      </div>
      <div className="w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-48 bottom-0 px-3.5 pt-9">
        <div className="mb-6">
          <GoalCreationInput
            label="Let’s name your goal"
            inputValue="Spend responsibly"
            leadingIcon={<FiFlag size="1.375rem" />}
          />
        </div>
        <div className="mb-6">
          <GoalCreationInput
            label="What’s your target amount?"
            inputValue="₦ 1,085,776"
            leadingIcon={<FiTarget size="1.375rem" />}
          />
        </div>
        <div className="mb-6">
          <GoalCreationInput
            label="How would you like to contribute?"
            inputValue="₦ 10k weekly, on Tuesday"
            leadingIcon={<FiPocket size="1.375rem" />}
            hasValue={false}
            onClick={() => {
              setOpenContributionSheet(true);
            }}
          />
          <BottomSheet
            open={openContributionSheet}
            style={{
              borderRadius: 24,
            }}
            children={
              <AddContributionSettings
                onClick={() => setOpenContributionSheet(false)}
              />
            }
            defaultSnap={300}
          ></BottomSheet>
        </div>
        <div className="mb-6">
          <GoalCreationInput
            hasValue={false}
            label="Link an account and track savings with ease"
            inputValue="Link bank or wallet"
            leadingIcon={<FiPocket size="1.375rem" />}
          />
        </div>
        <div className="mb-10">
          <GoalCreationInput
            hasValue={false}
            label="Boost your savings journey with rules"
            inputValue="Apply savings rule"
            leadingIcon={<FiTrendingUp size="1.375rem" />}
          />
        </div>
        <MainButton title="Start saving" />
      </div>
    </div>
  );
};
export default AddGoalDetails;
