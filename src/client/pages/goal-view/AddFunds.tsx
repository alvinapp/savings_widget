import React, { useState } from "react";
import { AddMonthlyIncomeInput } from "../components/goal-creation/Input";
import MainButton from "../components/MainButton";
import CloseButton from "../components/CloseButton";
import useAddFundsStore from "client/store/AddFundsStore";
import useGoalStore from "client/store/goalStore";
import { useQuery } from "react-query";
import { addContributionFunds } from "client/api/add_funds";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import { getConfirmedGoals } from "client/api/goal";

export const AddFunds = () => {
  const goal = useGoalStore((state: any) => state);
  const [finalAmount, setFinalAmount] = useState(
    goal.confirmedGoal.contribution_amount
  );
  const addFundsStore = useAddFundsStore((state: any) => state);
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const { isFetching: addingFunds, refetch: addTheFunds } = useQuery(
    "addfunds",
    () =>
      addContributionFunds({
        configuration: configuration,
        data: {
          amount: finalAmount,
        },
        goalId: goal.confirmedGoal.id,
      }).then((_) => {
        getConfirmedGoals({ configuration: configuration }).then((result) => {
          if (result) {
            goal.setConfirmedGoals(result);
            addFundsStore.openAddFundBottomSheet(false);
          }
        });
      }),
    { refetchOnWindowFocus: false, enabled: false }
  );
  return (
    <div className="flex flex-col mx-3.5 items-center relative">
      <div className="absolute top-0 right-1">
        <CloseButton
          background="bg-skin-secondaryWithOpacity"
          onClick={() => {
            addFundsStore.openAddFundBottomSheet(false);
          }}
        />
      </div>
      <div className="font-workSans text-skin-base text-base font-semibold tracking-title mt-16">
        I would like to fund my goal by depositing
      </div>
      <div className="mt-7 mx-3.5 flex flex-row justify-center">
        <AddMonthlyIncomeInput
          addValue={(e) => setFinalAmount(e)}
          value={finalAmount}
          increment={() => {
            setFinalAmount(finalAmount + 500);
          }}
          decrement={() => {
            if (finalAmount > 0) {
              setFinalAmount(finalAmount - 500);
            }
          }}
        />
      </div>
      <div className="w-full mt-10">
        <MainButton
          title="Fund my goal"
          click={() => addTheFunds()}
          loading={addingFunds}
        />
      </div>
    </div>
  );
};
