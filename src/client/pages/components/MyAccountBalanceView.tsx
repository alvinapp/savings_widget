import { FiMoreHorizontal } from "react-icons/fi";

import Account from "client/models/Account";
import useAccountStore from "client/store/bankAccountStore";
import { accountLogo } from "client/utils/AccountLogo";
import { checkNAN } from "client/utils/Formatters";

type AccountBalanceViewProps = {
  balance?: number;
  accountName?: string;
  deleteAccount?: any;
  account?: Account;
};
const MyAccountBalanceView = ({
  balance,
  accountName,
  deleteAccount,
}: AccountBalanceViewProps) => {
  return (
    <div
      className="flex flex-row items-center justify-between"
      id="al-balance-view"
    >
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col mr-3.5">
            <div
              className={`rounded-full bg-icon_bg/20 w-12 h-12 flex justify-center items-center ${
                accountName === "M-Pesa"
                  ? "bg-mpesaIcon bg-120% bg-no-repeat bg-center"
                  : ""
              }`}
            >
              {accountName === "M-Pesa" ? (
                ""
              ) : (
                <img src={accountLogo(`${accountName}`)} alt=""></img>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <div
              className="text-gray font-poppins text-xs font-medium tracking-wide text-start"
              id="al-balance-title"
            >
              Account balance
            </div>
            <div className="flex flex-row">
              <div className="text-xs text-black font-bold font-workSans mr-1 mt-4">
                KES
              </div>
              <div className="text-2xl text-black font-semibold font-workSans mt-1">
                {checkNAN(Math.round(balance!)).toLocaleString()}
              </div>
              {/* <div className="mt-4 ml-1">
                <FiEye color="#9BC1D0" size="1rem" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div
          className="rounded-full bg-icon_bg/20 w-10 h-10 flex justify-center items-center text-gray_light"
          onClick={deleteAccount}
          id="al__secondary-button"
        >
          <FiMoreHorizontal color="currentColor" size="0.875rem" />
        </div>
      </div>
    </div>
  );
};
export default MyAccountBalanceView;
