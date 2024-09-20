import MainButton from "../MainButton";
import { BsBank } from "react-icons/bs";
import { IconContainer } from "../IconContainercard";
export type SuccessClassicAccountCreationProps = {
  onClick?: () => void;
};
export const SuccessClassicAccountCreation = ({
  onClick,
}: SuccessClassicAccountCreationProps) => {
  return (
    <div className="">
      <div className="flex flex-col items-center mx-3.5 mb-5">
        <IconContainer icon={<BsBank size={55} />} />
        <div className="font-workSans text-base font-bold text-skin-base tracking-title mb-2 mt-3 text-center">
          Hooray! savings account created successfully.
        </div>
        <div className="font-poppins font-medium text-skin-subtitle text-xs text-center md:text-sm lg:text-base xl:text-lg mb-6">
          Nice work! Your new savings account has been created. We've sent an
          email with your account details.
        </div>
      </div>
      <div className="flex flex-col items-center mx-3.5 pt-12">
        <div className="text-base font-semibold font-poppins tracking-longest_text text-skin-primary border border-skin-primary w-full rounded-lg h-14 flex flex-row items-center justify-center">
          View account details
        </div>
        <MainButton
          // isDisabled={!isValid}
          title="Continue"
          click={onClick}
          // loading={saveGoalFetching}
        />
      </div>
    </div>
  );
};
