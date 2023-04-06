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
import {
  confirmGoal,
  getConfirmedGoals,
  saveAGoal,
  saveGoalImage,
} from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import deleteUnconfirmed from "client/api/delete-unconfirmed-goals";
import useUserStore from "client/store/userStore";
import useBankAccountStore from "client/store/BankAccountStore";
import { SelectBank } from "../components/goal-creation/SelectBank";
import getBankAccounts from "client/api/accounts";
import { maskAccountNo } from "client/utils/Formatters";
const AddGoalDetails = () => {
  const goalContributionSettings = useGoalContributionSettingsStore(
    (state: any) => state
  );
  const monthlyIncome = useMonthlyIncomeStore(
    (state: any) => state.monthlyIncome
  );
  const user = useUserStore((state: any) => state.user);
  const accountStore = useBankAccountStore((state: any) => state);
  const monthlyIncomeAmount = monthlyIncome || user.income;
  const goal = useGoalStore((state: any) => state);
  const [hasGoalAmount, setHasGoalAmount] = useState(true);
  const [hasGoalName, setHasGoalName] = useState(true);
  const navigate = useNavigate();
  const isValid =
    !!goalContributionSettings.contributionFrequency &&
    accountStore.account.bank_name;
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;

  const { isFetching: fetchingBankAccounts } = useQuery("bank-accounts", () =>
    getBankAccounts(configuration).then((result) => {
      if (result) {
        accountStore.setAccounts(result);
      }
    })
  );
  const { isFetching: saveGoalNameFetching, refetch: saveGoalNameAmount } =
    useQuery(
      "saving-goals",
      () =>
        saveAGoal({
          configuration: configuration,
          data: {
            extern_id: "",
            name: goal.goalName,
            title: "",
            amount: parseFloat(goal.goalAmount),
            contribute_from: "",
            is_customized: false,
          },
        }).then((result) => {
          if (result.id) {
            goal.setContributionSettingsGoalId(result.id);
            goal.setGoalId(result.id);
          }
        })
      // {
      //   refetchOnWindowFocus: false,
      //   enabled: false,
      // }
    );
  const { refetch: unconfirmedGoals } = useQuery(
    "delete-unconfirmed-goals",
    () =>
      deleteUnconfirmed(configuration).then((result: any) => {
        if (result) {
          goalContributionSettings.contributionFrequency("");
        }
      }),
    {
      refetchOnWindowFocus: false,
      enabled: false,
    }
  );
  const { isFetching: confirmIsFetching, refetch: confirmGoals } = useQuery(
    "confirmed-goals",
    () =>
      confirmGoal({
        configuration: configuration,
        goalId: goal.contributionSettingsGoalId,
        data: {},
      })
        .then((result) => {
          if (result) {
            goal.setGoalImageUrl("");
            goal.setGoalName("");
            goal.setGoalAmount("");
            goalContributionSettings.setContributionFrequency("");
            goal.setGoal({});
            accountStore.setAccount({});
            getConfirmedGoals({ configuration: configuration }).then(
              (result) => {
                goal.setConfirmedGoals(result);
              }
            );
          }
        })
        .finally(() => navigate("/")),
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
        goalId: goal.contributionSettingsGoalId,
      }),
    {
      refetchOnWindowFocus: false,
      enabled: !!goal.contributionSettingsGoalId,
    }
  );

  return (
    <div className="h-screen w-screen relative">
      <div className="h-1/2 absolute top-0 left-0 right-0">
        <div className="relative">
          <img
            src={goal.goalImageUrl ? goal.goalImageUrl : ""}
            className="absolute top-0 right-0 left-0 w-screen h-72"
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
                  unconfirmedGoals();
                  navigate(-1);
                }}
              />
              <CloseButton
                background="bg-skin-base"
                onClick={() => {
                  unconfirmedGoals();
                  navigate(-3);
                }}
              />
            </div>
          }
        />
      </div>
      <div className="w-screen rounded-t-3xl bg-skin-base absolute right-0 left-0 top-48 bottom-0 px-3.5 pt-9">
        <div className="mb-6">
          <GoalCreationInput
            placeHolder="Add goal name"
            label="Let’s name your goal"
            value={goal.goalName ? goal.goalName : ""}
            leadingIcon={<FiFlag size="1.375rem" />}
            addValue={(e) => goal.setGoalName(e)}
            hasValue={hasGoalName}
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
          <GoalCreationInput
            hasCurrencySymbol={true}
            type="number"
            placeHolder="Add target amount"
            label="What’s your target amount?"
            value={goal.goalAmount ? goal.goalAmount : ""}
            leadingIcon={<FiTarget size="1.375rem" />}
            addValue={(e) => goal.setGoalAmount(e)}
            hasValue={hasGoalAmount}
            clearInput={() => {
              setHasGoalAmount(false);
              goal.setGoalAmount("");
            }}
            onClick={() => {
              setHasGoalAmount(false);
            }}
          />
        </div>
        <div className="mb-6">
          <GoalCreationInput
            placeHolder="Add contribution"
            label="How would you like to contribute?"
            value={
              goalContributionSettings.contributionFrequency
                ? goalContributionSettings.contributionFrequency
                : ""
            }
            leadingIcon={<FiPocket size="1.375rem" />}
            hasValue={!!goalContributionSettings.contributionFrequency}
            onClick={() => {
              goalContributionSettings.openContributionSettingsBottomSheet(
                true
              );
              goalContributionSettings.setContributionAmount(
                (monthlyIncomeAmount * 5) / 100
              );
              goal.setPercentageOfSavings(5);
              goalContributionSettings.setStartFromDate(new Date());
            }}
            addValue={(e) => e}
            // isLoading={saveGoalNameFetching}
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
                onClick={() => {
                  goalContributionSettings.openContributionSettingsBottomSheet(
                    false
                  );
                  goalContributionSettings.setContributionAmount(0);
                  goalContributionSettings.setTabIndex(0);
                  // goalContributionSettings.setStartFromDate(new Date());
                }}
              />
            }
            defaultSnap={300}
          ></BottomSheet>
        </div>
        <div className="mb-6">
          <GoalCreationInput
            placeHolder="Link bank or wallet"
            label="Link an account and track savings with ease"
            value={
              accountStore.account.bank_name
                ? `${
                    accountStore.account.bank_name
                      ? accountStore.account.bank_name
                      : ""
                  }, ${
                    accountStore.account.account_number
                      ? maskAccountNo(
                          accountStore.account.account_number.toString(),
                          4
                        )
                      : ""
                  }`
                : ""
            }
            leadingIcon={<FiPocket size="1.375rem" />}
            hasValue={
              !!accountStore.account.bank_name &&
              accountStore.account.account_number
            }
            onClick={() => accountStore.openAccountBottomSheet(true)}
            addValue={(e) => e}
            clearInput={() => {
              accountStore.setAccount;
            }}
          />
          <BottomSheet
            onDismiss={() => accountStore.openAccountBottomSheet(false)}
            open={accountStore.accountBottomSheet}
            style={{
              borderRadius: 24,
            }}
            children={<SelectBank accountList={accountStore.accounts} />}
            defaultSnap={300}
          ></BottomSheet>
        </div>
        <div className="mb-10">
          <GoalCreationInput
            placeHolder="Apply savings rule"
            hasValue={false}
            label="Set rule"
            value=""
            leadingIcon={<FiTrendingUp size="1.375rem" />}
            addValue={(e) => e}
          />
        </div>
        <MainButton
          isDisabled={!isValid}
          title="Start saving"
          click={() => confirmGoals()}
          loading={confirmIsFetching}
        />
      </div>
    </div>
  );
};
export default AddGoalDetails;
