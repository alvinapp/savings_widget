import React, { useState } from "react";
import overlay from "client/assets/images/savings/overlay.svg";
import NavBar from "../components/NavBar";
import BackButton from "../components/BackButton";
import CloseButton from "../components/CloseButton";
import { AddPhotoButton } from "../components/AddPhotoButton";
import {
  TextInput,
  TextInputWithPopup,
} from "../components/goal-creation/Input";
import { FiFlag, FiTarget, FiPocket, FiTrendingUp } from "react-icons/fi";
import MainButton from "../components/MainButton";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useNavigate } from "react-router-dom";
import useGoalStore from "client/store/goalStore";
import useMonthlyIncomeStore from "client/store/monthlyIncome";
import { useQuery } from "react-query";
import {
  confirmGoal,
  saveAGoal,
  saveGoalImage,
  updateGoal,
  updateGoalBankAccount,
} from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import deleteUnconfirmed from "client/api/delete-unconfirmed-goals";
import { AddContributionSettings } from "../goal-creation/AddContributionSettings";
import { maskAccountNo } from "client/utils/Formatters";
import useBankAccountStore from "client/store/BankAccountStore";
import { SelectBank } from "../components/goal-creation/SelectBank";
const UpdateGoalDetails = () => {
  const goalContributionSettings = useGoalContributionSettingsStore(
    (state: any) => state
  );
  const goal = useGoalStore((state: any) => state);
  const { bank_account } = goal.confirmedGoal.bank_account_details ?? "";
  const navigate = useNavigate();
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const accountStore = useBankAccountStore((state: any) => state);
  const { isLoading, refetch: updateGoals } = useQuery(
    "update-goals",
    () =>
      updateGoal({
        configuration: configuration,
        goalId: goal.confirmedGoal.id,
        data: {
          extern_id: "",
          name: goal.goalName,
          title: "",
          amount: parseFloat(goal.goalAmount),
          contribute_from: "",
          is_customized: false,
        },
      })
        .then((result) => {
          if (result.id) {
            //update bank account
            updateGoalBankAccount({
              configuration: configuration,
              goalId: result.id,
              data: {
                name: "Chase Checking",
                account_number: "1234567890",
                routing_number: "123456789",
                bank_name: "Chase",
                account_type: "checking",
              },
            });
            goal.setContributionSettingsGoalId(result.id);
          }
        })
        .finally(() => navigate(-2)),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
  const { data: saveImage } = useQuery(
    "save-goal-image",
    () =>
      saveGoalImage({
        configuration: configuration,
        data: {
          image_url: goal.goalImageUrl,
        },
        goalId: goal.confirmedGoal.id,
      }),
    {
      refetchOnWindowFocus: false,
      enabled: !!goal.confirmedGoal.id,
    }
  );
  const [hasGoalAmount, setHasGoalAmount] = useState(true);
  const [hasGoalName, setHasGoalName] = useState(true);
  return (
    <div className="h-screen w-screen relative">
      <div className="h-1/2 absolute top-0 left-0 right-0">
        <div className="relative">
          <img
            src={goal.goalImageUrl ? goal.goalImageUrl : ""}
            className="absolute top-0 right-0 left-0"
          />
          <img src={overlay} className="absolute object-cover w-screen h-72" />
          <div className="absolute top-28 left-0 right-0 flex flex-col items-center">
            <div className="mb-3">
              <AddPhotoButton onClick={() => navigate("/image-selection")} />
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
                onClick={() => {
                  // unconfirmedGoals();
                  navigate(-1);
                }}
              />
              <CloseButton
                background="bg-skin-base"
                onClick={() => {
                  // unconfirmedGoals();
                  navigate(-1);
                }}
              />
            </div>
          }
        />
      </div>
      <div className="w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-48 bottom-0 px-3.5 pt-9">
        <div className="mb-6">
          <TextInput
            placeHolder="Add goal name"
            label="Let’s name your goal"
            value={goal.goalName ? goal.goalName : ""}
            leadingIcon={<FiFlag size="1.375rem" />}
            addValue={(e) => goal.setGoalName(e)}
            // hasValue={!!goal.goalName}
            clearInput={() => {
              setHasGoalName(false);
              goal.setGoalName("");
            }}
            onClick={() => {
              setHasGoalName(false);
            }}
          />
        </div>
        <div className="mb-6">
          <TextInput
            hasCurrencySymbol={true}
            type="number"
            placeHolder="Add target amount"
            label="What’s your target amount?"
            value={goal.goalAmount ? goal.goalAmount : ""}
            leadingIcon={<FiTarget size="1.375rem" />}
            addValue={(e) => goal.setGoalAmount(e)}
            // hasValue={!!goal.goalAmount}
            clearInput={() => goal.setGoalAmount("")}
          />
        </div>
        <div className="mb-6">
          <TextInputWithPopup
            placeHolder="Add contribution"
            value={`${goal.confirmedGoal.frequency_text}`}
            leadingIcon={<FiPocket size="1.375rem" />}
            hasValue={
              !!goal.confirmedGoal.frequency_text ||
              !!goalContributionSettings.contributionFrequency
            }
            onClick={() =>
              goalContributionSettings.openContributionSettingsBottomSheet(true)
            }
            addValue={(e) => e}
            clearInput={() =>
              goalContributionSettings.setContributionFrequency("")
            }
          />
          <BottomSheet
            open={goalContributionSettings.openContributionSettingsSheet}
            style={{
              borderRadius: 24,
            }}
            children={
              <AddContributionSettings
                updatingGoal={true}
                onClick={() => {
                  goalContributionSettings.openContributionSettingsBottomSheet(
                    false
                  );
                  goalContributionSettings.setContributionAmount(0);
                }}
              />
            }
            defaultSnap={300}
          ></BottomSheet>
        </div>
        <div className="mb-6">
          <TextInputWithPopup
            placeHolder="Link bank or wallet"
            label="Link an account and track savings with ease"
            value={
              goal.confirmedGoal.bank_account_details !== null
                ? `${bank_account.bank_name ? bank_account.bank_name : ""},${
                    bank_account.account_number
                      ? maskAccountNo(bank_account.account_number.toString(), 4)
                      : ""
                  }`
                : ""
            }
            hasValue={!!bank_account.bank_name || !!accountStore.account}
            leadingIcon={<FiPocket size="1.375rem" />}
            addValue={(e) => e}
            onClick={() => {
              accountStore.openUpdateAccountBottomSheet(true);
            }}
            clearInput={() => {
              console.log("Clicked");
              accountStore.setAccount("");
            }}
          />
          <BottomSheet
            onDismiss={() => accountStore.openUpdateAccountBottomSheet(false)}
            open={accountStore.updateAccountBottomSheet}
            style={{
              borderRadius: 24,
            }}
            children={<SelectBank accountList={accountStore.accounts} />}
            defaultSnap={300}
          ></BottomSheet>
        </div>
        {/* <div className="mb-10">
          <TextInputWithPopup
            placeHolder="Apply savings rule"
            hasValue={false}
            label="Boost your savings journey with rules"
            value=""
            leadingIcon={<FiTrendingUp size="1.375rem" />}
            addValue={(e) => e}
          />
        </div> */}
        <MainButton
          title="Save changes"
          click={() => updateGoals()}
          loading={isLoading}
        />
      </div>
    </div>
  );
};
export default UpdateGoalDetails;
