import Account from 'client/models/Account';
import FilterButton from 'client/pages/components/FilterButton';

type MyAccountFiltersProps = {
  accounts?: Array<Account>;
  activeAccount?: Account;
  onClick?: (account: Account) => void;
};

const MyAccountFilters = ({
  accounts,
  activeAccount,
  onClick,
}: MyAccountFiltersProps) => {
  return (
    <div className="whitespace-nowrap overflow-auto no-scrollbar py-3">
      {accounts?.map((element: Account, i) => {
        const isActive = element.account_id == activeAccount?.account_id;
        return (
          <FilterButton
            label={element.name}
            key={i}
            isActive={isActive}
            onClick={() => {
              if (onClick) {
                onClick(element);
              }
            }}
            id={`${i}`}
          />
        );
      })}
    </div>
  );
};

export default MyAccountFilters;
