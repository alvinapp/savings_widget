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

const AddMonthlyIncome = () => {
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const navigate = useNavigate();
  
  // Set initial income to 200000
  const [finalAmount, setFinalAmount] = useState(200000);
  
  const monthlyIncome = useMonthlyIncomeStore((state: any) => state);

  const saveIncome = () => {
    saveMonthlyIncome({
      configuration: configuration,
      amount: finalAmount,
    }).then((result) => {
      if (result) {
        result.income;
        monthlyIncome.setMonthlyIncome(result.income);
      }
      navigate("/create-savings-goal");
    });
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
            addValue={(e) => setFinalAmount(e)}
            value={finalAmount}
            increment={() => {
              setFinalAmount(finalAmount + 1000);
            }}
            decrement={() => {
              // Prevent decrementing below 1000
              if (finalAmount > 1000) {
                setFinalAmount(finalAmount - 1000);
              }
            }}
          />
        </div>
      </div>
      
      <div className="fixed bottom-2 right-0 left-0 px-3.5">
        {/* Disable the button if finalAmount is 0 */}
        <MainButton
          title="Continue"
          click={() => refetch()}
          isDisabled={finalAmount === 0}
        />
      </div>
    </div>
  );
};

export default AddMonthlyIncome;