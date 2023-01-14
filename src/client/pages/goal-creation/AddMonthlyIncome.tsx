import React from "react";
import BackButton from "client/pages/components/BackButton";
import MainButton from "client/pages/components/MainButton";
import NavBar from "client/pages/components/NavBar";
import { useNavigate } from "react-router-dom";
import CloseButton from "client/pages/components/CloseButton";
import { Header } from "../components/goal-creation/Header";
import { FiBriefcase } from "react-icons/fi";
import { AddMonthlyIncomeInput } from "../components/goal-creation/Input";
export const AddMonthlyIncome = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen relative">
      <div className="bg-curvedBg pt-8 bg-no-repeat h-64 bg-cover">
        <NavBar
          children={
            <div className="flex flex-row justify-between items-center px-3.5">
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
          <AddMonthlyIncomeInput />
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
