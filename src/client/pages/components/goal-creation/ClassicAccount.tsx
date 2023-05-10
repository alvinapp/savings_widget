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
        Classic savings account
      </div>
      <div className="font-poppins font-medium text-skin-subtitle text-xs text-center md:text-sm lg:text-base xl:text-lg mb-6">
        Something else that is a bit longer than the other one. Something else
        that is a bit longer.
      </div>
      <div className="w-full">
        <Accordion
          title="Interest rate"
          content="Something else that is a bit longer than the other one"
        />
        <Accordion
          title="Opening requirement"
          content="Something else that is a bit longer than the other one. Something else that is a bit longer than the other one"
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
