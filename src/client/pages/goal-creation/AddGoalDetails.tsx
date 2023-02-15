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
import { useNavigate } from "react-router-dom";
import useGoalStore from "client/store/goalStore";
import useMonthlyIncomeStore from "client/store/monthlyIncome";
import { useQuery } from "react-query";
import saveAGoal from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
const AddGoalDetails = () => {
  const currencySymbol = useMonthlyIncomeStore(
    (state: any) => state.currencySymbol
  );
  const [openContributionSheet, setOpenContributionSheet] = useState(false);
  const goal = useGoalStore((state: any) => state.selectedGoal);
  const navigate = useNavigate();
  const [goalName, setGoalname] = useState(goal.goalName);
  const [amount, setAmount] = useState(`${currencySymbol} ${goal.amount}`);
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const saveGoalNameAndAmount = () => {
    saveAGoal({
      configuration: configuration,
      data: {
        extern_id: "",
        name: goalName,
        title: "",
        amount: parseFloat(amount.replace("₦ ", "").trim()),
        contribute_from: "",
        is_customized: false,
      },
    }).then((result) => {
      console.log(result.id);
      if (result) setOpenContributionSheet(true);
    });
  };
  const { refetch } = useQuery("saving-goals", () => saveGoalNameAndAmount, {
    refetchOnWindowFocus: true,
    enabled: false,
  });
  return (
    <div className="h-screen w-screen relative">
      <div className="h-1/2 absolute top-0 left-0 right-0">
        <div className="relative">
          <img
            src={goal.goalImage ?? ""}
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
              <BackButton
                background="bg-skin-base"
                onClick={() => navigate(-1)}
              />
              <CloseButton background="bg-skin-base" />
            </div>
          }
        />
      </div>
      <div className="w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-48 bottom-0 px-3.5 pt-9">
        <div className="mb-6">
          <GoalCreationInput
            label="Let’s name your goal"
            value={goalName}
            leadingIcon={<FiFlag size="1.375rem" />}
            addValue={(e) => setGoalname(e)}
          />
        </div>
        <div className="mb-6">
          <GoalCreationInput
            label="What’s your target amount?"
            value={amount}
            leadingIcon={<FiTarget size="1.375rem" />}
            addValue={(e) => setAmount(e)}
          />
        </div>
        <div className="mb-6">
          <GoalCreationInput
            label="How would you like to contribute?"
            value="₦ 10k weekly, on Tuesday"
            leadingIcon={<FiPocket size="1.375rem" />}
            hasValue={false}
            onClick={() => setOpenContributionSheet(true)}
            addValue={(e) => e}
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
            value="Link bank or wallet"
            leadingIcon={<FiPocket size="1.375rem" />}
            addValue={(e) => e}
          />
        </div>
        <div className="mb-10">
          <GoalCreationInput
            hasValue={false}
            label="Boost your savings journey with rules"
            value="Apply savings rule"
            leadingIcon={<FiTrendingUp size="1.375rem" />}
            addValue={(e) => e}
          />
        </div>
        <MainButton title="Start saving" click={() => navigate("/")} />
      </div>
    </div>
  );
};
export default AddGoalDetails;
