import { checkIfDebitCredit, dateFormat } from "client/utils/Formatters";
import useAccountStore from "client/store/accountStore";
import Accounts from "client/models/accounts";
import Transaction from "client/models/Transaction";

const TransactionCard = ({
  id,
  goalName,
  activityName,
  emoji,
  amount,
  transacted_at,
  type,
}: Transaction) => {
  const transactedAt = new Date(transacted_at);
  const currencySymbol = "₦";
  return (
    <div
      className="rounded-lg bg-white px-4 py-3 w-auto shadow-card mb-2 border-solid border-gray"
      id="al-transaction-card"
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col">
          <div className="flex flex-row items-center">
            <div className="flex flex-col mr-3">
              <div className="relative">
                {/* <div className=""></div> */}
                <div className="rounded-full bg-skin-secondaryWithOpacity h-8 w-8 flex justify-center items-center">
                  {emoji}
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className="font-poppins text-sm font-medium text-black text-start text-ellipsis overflow-hidden whitespace-nowrap w-40"
                id="al-transaction-card--merchant-name"
              >
                {activityName}
              </div>
              <div
                className={`font-poppins text-xs font-medium ${
                  goalName === null
                    ? "text-skin-subtitle"
                    : "text-skin-subtitle"
                } tracking-wide text-start`}
                id="al-transaction-card--category-name"
              >
                {goalName}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className="font-poppins text-sm font-medium text-skin-success text-end text-ellipsis overflow-hidden whitespace-nowrap flex-row"
            id="al-transaction-card--amount"
          >
            <span>{checkIfDebitCredit(type)}</span>
            <span className="font-poppins text-sm font-medium text-skin-success mx-1">
              {currencySymbol}
            </span>
            {Math.round(amount).toLocaleString("en-US")}
          </div>
          <div className="font-poppins text-xxxs text-skin-subtitle text-end tracking-wide font-medium">
            {dateFormat(transactedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransactionCard;
