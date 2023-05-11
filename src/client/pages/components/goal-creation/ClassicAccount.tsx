import { Accordion } from "../AccordionCard";
import MainButton from "../MainButton";
import { BsBank } from "react-icons/bs";
import { IconContainer } from "../IconContainercard";
export type ClassicAccountProps = {
  onClick?: () => void;
};
export const ClassicAccount = ({ onClick }: ClassicAccountProps) => {
  return (
    <div className="flex flex-col items-center mx-3.5 mb-5">
      <IconContainer icon={<BsBank size={55} />} />
      <div className="font-workSans text-base font-bold text-skin-base tracking-title mb-2 mt-3 text-center">
        Wesley Savings Account
      </div>
      <div className="font-poppins font-medium text-skin-subtitle text-xs text-center md:text-sm lg:text-base xl:text-lg mb-6">
        A flexible accounts where you can earn an extra 2% on your savings to get to your goal faster.
      </div>
      <div className="w-full">
        <Accordion
          title="Interest rate"
          content="A high yield, fee-free savings account that pays you 2% per annum interest toward your savings goal"
        />
        <Accordion
          title="Opening requirement"
          content="If this is your first account with us, we will need a government-issued ID, proof of address and your BVN. If this is an added savings account, click 'Open new account' below to proceed."
          isOpen={true}
        />
      </div>
      <MainButton
        // isDisabled={!isValid}
        title="Open new account"
        click={onClick}
        // loading={saveGoalFetching}
      />
    </div>
  );
};
