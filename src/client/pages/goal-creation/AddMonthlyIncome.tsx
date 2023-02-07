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
export const AddMonthlyIncome = () => {
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const saveIncome = () => {
    saveMonthlyIncome({ configuration: configuration, amount: value }).then(
      (result) => {
        console.log(result);
        if (result) navigate("/create-savings-goal");
      }
    );
  };
  const { data, refetch } = useQuery(["saveIncome"], () => saveIncome, {
    enabled: false,
  });
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
            addValue={(e) => setValue(e)}
            value={value}
            increment={() => {
              setValue(value + 1000);
            }}
            decrement={() => {
              if (value > 0) {
                setValue(value - 10000);
              }
            }}
          />
        </div>
      </div>
      <div className="fixed bottom-2 right-0 left-0 px-3.5">
        <MainButton
          title="Continue"
          click={() => navigate("/create-savings-goal")}
        />
      </div>
    </div>
  );
};
