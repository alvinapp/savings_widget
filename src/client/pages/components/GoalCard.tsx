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

const CategoryEmoji = ({ category }: { category: Category }) => {
  if (!category)
    return (
      <div
        className="rounded-full bg-icon_bg/20 w-9 h-9 flex justify-center items-center
      "
      >
        <img src={uncategorized} alt="" />
      </div>
    );

  return (
    <div className="rounded-full w-9 h-9 flex justify-center bg-icon_bg/20 items-center">
      <Emoji symbol={category.emoji} label={category.name} />
    </div>
  );
};

const GoalCard = ({
  id,
  goalName,
  amount,
  progress,
  status,
  goalImage,
}: Goal) => {
  const accounts = useAccountStore((state: any) => state.accounts) as Accounts;
  const currencySymbol = "₦";
  return (
    <div className="rounded-lg bg-white px-4 py-3 w-auto shadow-card mb-2">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-3">
              <div className="h-10 w-10">
                <CircularProgressbarWithChildren
                  value={progress}
                  styles={buildStyles({
                    pathColor: "#33982A",
                    trailColor: "#D6EAD4",
                  })}
                >
                  <div className="">
                    <img
                      className="rounded-full max-w-full align-middle border-none h-8 w-8
                      "
                      src={goalImage}
                    />
                  </div>
                </CircularProgressbarWithChildren>
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className="font-poppins text-sm font-medium text-black text-start text-ellipsis overflow-hidden whitespace-nowrap w-40"
                id="al-transaction-card--merchant-name"
              >
                {goalName}
              </div>
              <div
                className={`font-poppins text-xs font-medium text-skin-subtitle tracking-wide text-start`}
              >
                {status === null ? "" : status}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className="font-poppins text-sm font-medium text-black text-end text-ellipsis overflow-hidden whitespace-nowrap flex-row"
            id="al-transaction-card--amount"
          >
            <span className="font-poppins text-sm font-medium text-black mx-1">
              {currencySymbol}
            </span>
            {Math.round(amount).toLocaleString("en-US")}
          </div>
          <div
            className="font-poppins text-xxxs font-light text-gray text-end tracking-wide"
            id="al-transaction-card--date"
          ></div>
        </div>
      </div>
    </div>
  );
};
export default GoalCard;
