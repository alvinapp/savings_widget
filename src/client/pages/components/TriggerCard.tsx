import { checkIfDebitCredit, dateFormat } from "client/utils/Formatters";
import useAccountStore from "client/store/BankAccountStore";
import Accounts from "client/models/Accounts";
import Transaction from "client/models/Transaction";
import Trigger from "client/models/Trigger";

const TriggerCard = ({
  id,
  appliedTo,
  percentage,
  triggerName,
  image,
  created_at,
}: Trigger) => {
  const createdAt = new Date(created_at);

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
                <div className="rounded-full bg-skin-secondaryWithOpacity h-8 w-8 flex justify-center">
                  <img src={image} />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="font-poppins text-sm font-medium text-skin-base text-start text-ellipsis overflow-hidden whitespace-nowrap w-40">
                {triggerName}
              </div>
              <div
                className={`font-poppins text-xs font-medium text-skin-subtitle tracking-wide text-start`}
              >
                {`x${percentage}, ${appliedTo}`}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col">
          <div
            className="font-poppins text-sm font-medium text-skin-successSecondary text-end text-ellipsis overflow-hidden whitespace-nowrap flex-row"
            id="al-transaction-card--amount"
          >
            <span>{checkIfDebitCredit(type)}</span>
            <span className="font-poppins text-sm font-medium text-skin-successSecondary mx-1">
              KES
            </span>
            {Math.round(amount).toLocaleString("en-US")}
          </div>
          <div className="font-poppins text-xxxs text-skin-subtitle text-end tracking-wide font-medium">
            {dateFormat(transactedAt)}
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default TriggerCard;
