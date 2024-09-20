import { AccountTypeCard } from "../AccountTypeCard";
export type SelectSavingsTypeProps = {
  click?: () => void;
};
export const SelectSavingsType = ({ click }: SelectSavingsTypeProps) => {
  return (
    <div className="flex flex-col items-start mx-3.5 mb-8 mt-10">
      <div className="font-workSans text-base font-semibold text-skin-base tracking-title mb-6 mt-3">
        Which savings account would you like to use for this goal?
      </div>
      <div className="ml-3">
        <AccountTypeCard
          title="ARM Savings Account"
          description="A flexible accounts where you can earn an extra 2% on your savings to get to your goal faster."
          onClick={click}
        />
        <AccountTypeCard
          title="Fixed savings account"
          description="A higher yield savings account appropriate for longer term savings goals.Earn 6% interest to get to your goal faster."
          disabled={true}
        />
      </div>
    </div>
  );
};
