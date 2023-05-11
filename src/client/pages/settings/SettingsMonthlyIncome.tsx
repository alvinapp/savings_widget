import React, { useState } from "react";
import BackButton from "client/pages/components/BackButton";
import MainButton from "client/pages/components/MainButton";
import NavBar from "client/pages/components/NavBar";
import { useNavigate } from "react-router-dom";
import CloseButton from "client/pages/components/CloseButton";
import { Header } from "../components/goal-creation/Header";
import { FiBriefcase } from "react-icons/fi";
import { AddMonthlyIncomeInput } from "../components/goal-creation/Input";
import { useQuery } from "react-query";
import saveMonthlyIncome from "client/api/monthly-income";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useMonthlyIncomeStore from "client/store/monthlyIncome";
import useUserStore from "client/store/userStore";
const SettingsMonthlyIncome = () => {
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const navigate = useNavigate();
  const user = useUserStore((state: any) => state.user);
  const [finalAmount, setFinalAmount] = useState(user.income);
  const monthlyIncome = useMonthlyIncomeStore((state: any) => state);

  const {
    isFetching: savingsMonthlyIncome,
    data,
    refetch,
  } = useQuery(
    ["saveIncome"],
    () =>
      saveMonthlyIncome({
        configuration: configuration,
        amount: finalAmount,
      }).then((result) => {
        if (result) {
          console.log(result);
          monthlyIncome.setMonthlyIncome(result.income);
          navigate("/");
        }
      }),
    {
      enabled: false,
    }
  );
  return (
    <div className="h-screen w-screen relative">
      <div className="bg-curvedBg pt-4 bg-no-repeat h-64 bg-cover">
        <NavBar
          children={
            <div className="flex flex-row justify-between items-center">
              <BackButton
                onClick={() => {
                  navigate(-1);
                }}
              />
              <CloseButton
                onClick={() => {
                  navigate(-3);
                }}
              />
            </div>
          }
        />
        <div className="px-3.5 pt-6 pb-4">
          <Header
            title="What’s your take-home monthly income?"
            children={<FiBriefcase color="#6F89A5" />}
          />
        </div>
        <div className="mt-24 mx-3.5 flex flex-row justify-center">
          <AddMonthlyIncomeInput
            addValue={(e) => setFinalAmount(e)}
            value={finalAmount}
            increment={() => {
              setFinalAmount(finalAmount + 1000);
            }}
            decrement={() => {
              if (finalAmount > 0) {
                setFinalAmount(finalAmount - 1000);
              }
            }}
          />
        </div>
      </div>
      <div className="fixed bottom-2 right-0 left-0 px-3.5">
        <MainButton
          title="Save"
          click={() => refetch()}
          loading={savingsMonthlyIncome}
        />
      </div>
    </div>
  );
};
export default SettingsMonthlyIncome;
