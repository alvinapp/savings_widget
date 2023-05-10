import { AccountTypeCard } from "../AccountTypeCard";
export type SelectSavingsTypeProps = {};
export const SelectSavingsType = ({
}: SelectSavingsTypeProps) => {
    return (
        <div className="flex flex-col items-start mx-3.5 mb-5">
            <div className="font-workSans text-base font-semibold text-skin-base tracking-title mb-6 mt-3">
                Which savings account would you like to open and link towards your goal?
            </div>
            <div className="ml-3">
                <AccountTypeCard title="Classic savings account" description="Something else that is a bit longer than the other one" />
                <AccountTypeCard title="Fixed savings account" description="Something else that is a bit longer than the other one" disabled={true}/>
            </div>
        </div>
    );
};
