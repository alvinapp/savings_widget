import { Emoji } from "client/pages/components/Emoji";
import Transaction from "client/models/Goal";
import Category from "client/models/Category";
import useAccountStore from "client/store/bankAccountStore";
import Accounts from "client/models/Accounts";
import uncategorized from "client/assets/images/uncategorized.svg";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import Goal from "client/models/Goal";
import UpcomingSaving from "client/models/UpcomingSaving";
import { dateFormat, isYesterday } from "client/utils/Formatters";
import { DepositButton } from "./DepositButton";

const UpcomingSavingsCard = ({
  id,
  goalName,
  amount,
  goalImage,
  due_date,
  onClick,
}: UpcomingSaving) => {
  const currencySymbol = "₦";
  const now = new Date();
  const warning = isYesterday(due_date);
  return (
    <div
      className="rounded-lg bg-white px-4 py-4 w-auto shadow-card mb-2"
      onClick={onClick}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-3">
              <div className="shadow-card rounded-full flex items-center">
                <img
                  className="rounded-full max-w-full align-middle border-none h-10 w-10
                      "
                  src={goalImage}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-custom text-sm font-semibold text-skin-title text-start text-ellipsis overflow-hidden whitespace-nowrap w-40 tracking-tab_text">
                {goalName}
              </div>
              <div className="flex flex-row items-center mt-1">
                <div
                  className={`font-custom text-xs font-medium tracking-wide text-start mr-1 ${
                    warning ? "text-skin-warning" : "text-skin-primary"
                  }`}
                >
                  {currencySymbol}
                </div>
                <div
                  className={`font-custom text-xs font-medium tracking-wide text-start mr-1 ${
                    warning ? "text-skin-warning" : "text-skin-primary"
                  }`}
                >
                  {amount}
                </div>
                <div className=" text-skin-subtitle font-medium text-xxxs">
                  / {dateFormat(due_date)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <DepositButton warning={warning} />
        </div>
      </div>
    </div>
  );
};
export default UpcomingSavingsCard;
