import { Emoji } from "client/pages/components/Emoji";
import Transaction from "client/models/Transaction";
import Category from "client/models/Category";
import useAccountStore from "client/store/accountStore";
import Accounts from "client/models/accounts";
import uncategorized from "client/assets/images/uncategorized.svg";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import Goal from "client/models/Transaction";
import UpcomingSaving from "client/models/UpcomingSaving";
import { dateFormat } from "client/utils/Formatters";
import { DepositButton } from "./DepositButton";

const UpcomingSavingsCard = ({
  id,
  goalName,
  amount,
  goalImage,
  transacted_at,
}: UpcomingSaving) => {
  const currencySymbol = "₦";
  return (
    <div className="rounded-lg bg-white px-4 py-3 w-auto shadow-card mb-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-3">
              <div className="shadow-card rounded-full flex items-center">
                <img
                  className="rounded-full max-w-full align-middle border-none h-8 w-8
                      "
                  src={goalImage}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className="font-poppins text-sm font-medium text-black text-start text-ellipsis overflow-hidden whitespace-nowrap w-40"
                id="al-transaction-card--merchant-name"
              >
                {goalName}
              </div>
              <div className="flex flex-row items-center">
                <div className="font-poppins text-xs font-medium text-skin-primary tracking-wide text-start mr-1">
                  {currencySymbol}
                </div>
                <div
                  className={`font-poppins text-xs font-medium text-skin-primary tracking-wide text-start mr-1`}
                >
                  {amount}
                </div>
                <div className=" text-skin-subtitle font-medium text-xxxs">
                  / {dateFormat(transacted_at)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <DepositButton />
        </div>
      </div>
    </div>
  );
};
export default UpcomingSavingsCard;
