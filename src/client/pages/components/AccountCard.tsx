import { FiMoreHorizontal } from "react-icons/fi";
import { useLongPress } from "use-long-press";

import Account from "client/models/Account";
import Routes from "client/pages/routes";
import useAccountStore from "client/store/bankAccountStore";
import { cardBackground } from "client/utils/CardBackground";
import { accountLogo } from "client/utils/AccountLogo";
import { applyAsterix } from "client/utils/Formatters";

const AccountCard = ({
  account,
  deleteAccount,
}: {
  account: Account;
  deleteAccount?: any;
}) => {
  const accountNumber = account.account_number!.toString();
  const filterAccountBy = useAccountStore((state: any) => state.filterBy);
  const accountStore = useAccountStore((state: any) => state);
  const unlinkAccount = useLongPress((e: any) => {
    e.stopPropagation();
    accountStore.selectAccount(account);
    deleteAccount();
  });
  const clickToUnlink = (e: any) => {
    e.stopPropagation();
    accountStore.selectAccount(account);
    deleteAccount();
  };
  const navigateToMyAccount = (e: any) => {
    e.stopPropagation();
    filterAccountBy(account);
    document.dispatchEvent(
      new CustomEvent("toPage", { detail: { page: Routes.MYACCOUNT } })
    );
  };

  return (
    <div className="relative h-44 ml-3" {...unlinkAccount()}>
      <div
        className={`rounded-3xl h-44 px-3.5 pt-3.5 pb-5.5 drop-shadow-md absolute left-0 right-0 top-0 bottom-0 ${cardBackground(
          account.name
        )} al-account-card`}
      >
        <div className="flex flex-col justify-end pt-8">
          <div className="flex flex-row justify-start mb-4 items-center">
            <div
              className={`rounded-full bg-icon_bg/20 w-7 h-7 flex justify-center mr-2 p-0.5 ${
                account.name === "M-Pesa"
                  ? "bg-mpesaIcon bg-120% bg-no-repeat bg-center"
                  : ""
              }`}
            >
              {account.name === "M-Pesa" ? (
                ""
              ) : (
                <img
                  src={accountLogo(`${account.name}`)}
                  className="rounded-full"
                  alt=""
                ></img>
              )}
            </div>
            <div
              className="uppercase text-lg text-white font-poppins font-light tracking-longtext"
              id="al-account-card--account-name"
            >
              {account.name}
            </div>
          </div>
          <div className="flex justify-start mb-4">
            <span className="font-workSans text-xxxxs text-semibold text-white mr-1 mt-2">
              KES
            </span>
            <div
              className="font-workSans text-lg text-semibold text-white"
              id="al-account-card--account-balance"
            >
              {Math.round(account.balance).toLocaleString()}
            </div>
          </div>
          <div
            className="flex justify-between items-center"
            id="al-account-card--account-number"
          >
            <span className="font-montserrat text-xs text-light text-white mr-1 tracking-wide">
              {applyAsterix({ str: accountNumber, mask: "*", n: 4 })}
            </span>
            <div
              className="font-poppins text-xxs font-medium text-white tracking-widest"
              id="al-account-card--account-type"
            >
              {account.type.replace("Account", "")}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-3 top-3" onClick={clickToUnlink}>
        <div
          className="rounded-full bg-icon_bg/20 w-9 h-9 flex justify-center items-center text-white"
          id="al__secondary-button"
        >
          <FiMoreHorizontal color="currentColor" size={18} />
        </div>
      </div>
      <div
        className="bg-cardOverlay absolute left-0 right-0 top-0 bottom-0 rounded-2x bg-cover"
        onClick={navigateToMyAccount}
      ></div>
    </div>
  );
};

export default AccountCard;
