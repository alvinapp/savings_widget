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
import { AddContributionSettings } from "./AddContributionSettings";
import { useNavigate } from "react-router-dom";
import useGoalStore from "client/store/goalStore";
import useMonthlyIncomeStore from "client/store/monthlyIncome";
import { useQuery } from "react-query";
import {
  confirmGoal,
  getConfirmedGoals,
  saveAGoal,
  saveGoalContributionSettings,
  saveGoalImage,
} from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalContributionSettingsStore from "client/store/goalContributionSettingsStore";
import deleteUnconfirmed from "client/api/delete-unconfirmed-goals";
import useUserStore from "client/store/userStore";
import useBankAccountStore from "client/store/bankAccountStore";
import { SelectBank } from "../components/goal-creation/SelectBank";
import getBankAccounts, {
  getCheckingAccounts,
  getSavingsAccounts,
  linkBankAccount,
} from "client/api/accounts";
import { convertDate, maskAccountNo } from "client/utils/Formatters";
import trigger from "client/assets/images/savings/trigger.png";
import { saveTrigger } from "client/api/savings-triggers";
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

  const saveGoalDetails = async () => {
    try {
      // Save goal and get goal id
      const goalResult = await saveAGoal({
        configuration: configuration,
        data: {
          extern_id: "",
          name: goal.goalName,
          title: "",
          amount: parseFloat(goal.goalAmount),
          contribute_from: "",
          is_customized: false,
        },
      });
      goal.setContributionSettingsGoalId(goalResult.id);
      goal.setGoalId(goalResult.id);

      const goalId = goalResult.id;

      // Run remaining tasks concurrently using Promise.all
      const [saveImage, goalContributionSchedule, linkAccount, saveRule] =
        await Promise.all([
          saveGoalImage({
            configuration: configuration,
            data: {
              image_url: goal.goalImageUrl,
            },
            goalId: goalId,
          }),
          saveGoalContributionSettings({
            configuration: configuration,
            data: {
              cron_string: goalContributionSettings.cron_string,
              savings_amount: goalContributionSettings.contributionAmount,
              contribute_from: convertDate(
                goalContributionSettings.startingFromDate.toString()
              ),
            },
            goalId: goalId,
          }),
          linkBankAccount({
            configuration: configuration,
            data: {
              goal_id: goalId,
              bank_account_id: accountStore.account.id,
            },
          }),
          saveTrigger({
            configuration: configuration,
            data: {
              round_up_percentage: goal.percentage,
              merchant_name: goal.merchant_name,
              goal_id: goalId,
            },
          }),
        ]);

      //Confirm the goal
      const confirmTheGoal = await confirmGoal({
        configuration: configuration,
        goalId: goalId,
        data: {},
      });
      return {
        goalResult: goalResult,
        saveImage: saveImage,
        goalContributionSchedule: goalContributionSchedule,
        linkAccount: linkAccount,
        confirmTheGoal: confirmTheGoal,
        saveRule: saveRule,
      };
    } catch (error) {
      throw error;
    }
  };

  const { isFetching: saveGoalFetching, refetch: saveTheGoal } = useQuery(
    "save-goal-details",
    () =>
      saveGoalDetails()
        .then((result) => {
          if (result) {
            goal.setGoalImageUrl("");
            goal.setGoalName("");
            goal.setGoalAmount("");
            goalContributionSettings.setContributionFrequency("");
            goal.setGoal({});
            accountStore.setAccount({});
            goal.setPercentage(0);
            goal.setMerchantName("");
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

  const { isFetching: fetchingCheckingAccounts } = useQuery(
    "checking-accounts",
    () =>
      getCheckingAccounts(configuration).then((result) => {
        if (result) {
          accountStore.setCheckingAccounts(result);
        }
      }),
    { enabled: !!configuration.token }
  );

  const { isFetching: fetchingSavingsAccounts } = useQuery(
    "savings-accounts",
    () =>
      getSavingsAccounts(configuration).then((result) => {
        if (result) {
          accountStore.setSavingsAccounts(result);
        }
      }),
    { enabled: !!configuration.token }
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
                  // unconfirmedGoals();
                  navigate(-1);
                }}
              />
              <CloseButton
                background="bg-skin-base"
                onClick={() => {
                  // unconfirmedGoals();
                  navigate(-3);
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
            // hasValue={hasGoalName}
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
            // hasValue={hasGoalAmount}
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
          <TextInputWithPopup
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
          <TextInputWithPopup
            placeHolder="Setup a funding account"
            label="Setup a savings funding account and track your savings with ease"
            value={
              accountStore.savingAccount.bank_name
                ? `${
                    accountStore.savingAccount.bank_name
                      ? accountStore.savingAccount.bank_name
                      : ""
                  }, ${
                    accountStore.savingAccount.account_number
                      ? maskAccountNo(
                          accountStore.savingAccount.account_number.toString(),
                          4
                        )
                      : ""
                  }`
                : ""
            }
            leadingIcon={<FiPocket size="1.375rem" />}
            hasValue={
              !!accountStore.savingAccount.bank_name &&
              accountStore.savingAccount.account_number
            }
            onClick={() => {
              accountStore.openAccountBottomSheet(true);
            }}
            addValue={(e) => e}
            clearInput={() => {
              accountStore.setSavingAccount({});
            }}
          />
          <BottomSheet
            onSpringEnd={() =>
              accountStore.setSavingAccount(accountStore.savingAccounts[0])
            }
            onDismiss={() => accountStore.openAccountBottomSheet(false)}
            open={accountStore.accountBottomSheet}
            style={{
              borderRadius: 24,
            }}
            children={<SelectBank />}
            defaultSnap={300}
          ></BottomSheet>
        </div>
        <div className="mb-10">
          <TextInputWithPopup
            placeHolder="Apply savings rule"
            hasValue={!!goal.percentage && goal.merchant_name}
            label="Set rule"
            value={goal.merchant_name ? `Round it up x${goal.percentage}%` : ""}
            leadingIcon={<img src={trigger} />}
            addValue={(e) => e}
            onClick={() => {
              goal.setPercentage(1);
              goal.setMerchantName("All merchants");
              navigate("/create-goal-savings-trigger");
            }}
            clearInput={() => {
              goal.setPercentage(1);
              goal.setMerchantName("All merchants");
            }}
          />
        </div>
        <MainButton
          isDisabled={!isValid}
          title="Start saving"
          click={() => saveTheGoal()}
          loading={saveGoalFetching}
        />
      </div>
    </div>
  );
};
export default AddGoalDetails;
