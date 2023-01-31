import React from "react";
import NavBar from "client/pages/components/NavBar";
import BackButton from "client/pages/components/BackButton";
import { useNavigate } from "react-router-dom";
import CloseButton from "client/pages/components/CloseButton";
import { Header } from "client/pages/components/goal-creation/Header";
import { FiFlag } from "react-icons/fi";
import MainButton from "client/pages/components/MainButton";
import { BuildGoalCard } from "../components/goal-creation/BuildGoalCard";
import { predefinedGoals } from "client/utils/MockData";
import Goal from "client/models/Goal";
import CreateGoalCard from "../components/goal-creation/CreateGoalCard";

export const CreateSavingsGoal = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen relative">
      <div className="bg-curvedBg pt-8 bg-no-repeat h-64 bg-cover">
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
            title="Create a savings goal."
            children={<FiFlag color="#6F89A5" />}
            subtitle="Excepteur sint occaecat cupidatat non proident"
          />
        </div>
        <div className="mt-16 mx-3.5">
          <BuildGoalCard title="Let's buld one together" />
        </div>
        <div className="mx-3.5 mt-6">
          <div className="font-workSans text-skin-base text-sm font-semibold tracking-title mb-3">
            Tailored inspirations just for you
          </div>
          <div className="tracking-widest font-poppins text-skin-secondary text-xxxs">
            Excepteur sint occaecat cupidatat non proident
          </div>
        </div>
        <div className=" mt-4.5 mx-3.5">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
            {predefinedGoals.map((goal: Goal, index) => {
              return (
                <div className="mb-4">
                  <CreateGoalCard
                    key={index}
                    goalImage={goal.goalImage}
                    goalName={goal.goalName}
                    onClick={() => navigate("/add-contribution-settings")}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
