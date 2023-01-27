import { checkNAN } from "client/utils/Formatters";
import React from "react";
import { Amount } from "../Amount";

type GoalCreationIntroProps = {
  contributedAmount?: number;
  amount?: number;
};

export const GoalViewBalanceView = ({
  contributedAmount,
  amount,
}: GoalCreationIntroProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <Amount balance={contributedAmount} textColor="text-white" />
      </div>
      <div className="flex flex-row text-white/80 font-semibold font-poppins text-xs tracking-subtitle justify-center">
        <div className="mr-1">of</div>
        <div className="mr-1">🎯</div>
        <div className="mr-1">
          {checkNAN(Math.round(amount!)).toLocaleString()}
        </div>
        <span>saved</span>
      </div>
    </div>
  );
};
