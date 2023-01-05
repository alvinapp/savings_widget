import {Emoji} from 'client/pages/components/Emoji';
import Transaction from 'client/models/Transaction';
import Category from 'client/models/Category';
import {accountLogo} from 'client/utils/AccountLogo';
import {checkIfDebitCredit, dateFormat} from 'client/utils/Formatters';
import useAccountStore from 'client/store/accountStore';
import Accounts from 'client/models/accounts';
import uncategorized from 'client/assets/images/uncategorized.svg';
const CategoryEmoji = ({category}: {category: Category}) => {
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

const TransactionCard = ({
  id,
  merchant,
  transacted_at,
  category,
  amount,
  institution,
  viewInstitutionLogo = false,
  type,
}: Transaction) => {
  const transactedAt = new Date(transacted_at);
  const {name} = merchant;
  const accounts = useAccountStore((state: any) => state.accounts) as Accounts;

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
                <div className="">
                  <CategoryEmoji category={category} />
                </div>
                {institution !== null &&
                accounts.length > 1 &&
                viewInstitutionLogo ? (
                  <div className="rounded-full bg-page_icon/20 absolute bottom-0 right-0 h-3.5 w-3.5 flex justify-center items-center">
                    <img
                      src={accountLogo(`${institution.name}`)}
                      className="rounded-full"
                      alt=""
                    ></img>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <div
                className="font-poppins text-sm font-medium text-black text-start text-ellipsis overflow-hidden whitespace-nowrap w-40"
                id="al-transaction-card--merchant-name"
              >
                {name}
              </div>
              <div
                className={`font-poppins text-xs font-medium ${
                  category === null
                    ? 'text-gray_light font-medium'
                    : 'text-caption'
                } tracking-wide text-start`}
                id="al-transaction-card--category-name"
              >
                {category === null ? 'Uncategorized' : category.name}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div
            className="font-poppins text-sm font-medium text-black text-end text-ellipsis overflow-hidden whitespace-nowrap flex-row"
            id="al-transaction-card--amount"
          >
            <span>{checkIfDebitCredit(type)}</span>
            <span className="font-poppins text-sm font-medium text-black mx-1">
              KES
            </span>
            {Math.round(amount).toLocaleString('en-US')}
          </div>
          <div
            className="font-poppins text-xxxs font-light text-gray text-end tracking-wide"
            id="al-transaction-card--date"
          >
            {dateFormat(transactedAt)}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransactionCard;
