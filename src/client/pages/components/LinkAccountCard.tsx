import {FiChevronRight} from 'react-icons/fi';

import Accounts from 'client/models/accounts';
import Routes from 'client/pages/routes';
import useAccountStore from 'client/store/accountStore';
import linkAccountIcon from 'client/assets/images/link-accounts.svg';
type LinkAccountCardProps = {
  title?: string;
  subTitle?: string;
  isEnabled?: boolean;
};

const LinkAccountCard = ({
  title,
  subTitle,
  isEnabled = true,
}: LinkAccountCardProps) => {
  const accounts = useAccountStore((state: any) => state.accounts) as Accounts;
  const linkAccount = () => {
    if (accounts.length > 0) {
      document.dispatchEvent(
        new CustomEvent('toPage', {detail: {page: Routes.MONO}})
      );
    } else {
      document.dispatchEvent(
        new CustomEvent('toPage', {detail: {page: Routes.CONNECT}})
      );
    }
  };

  return (
    <div
      className="rounded-lg bg-white px-4 py-4 w-auto shadow-card al-link-account-card"
      onClick={() => {
        if (isEnabled) linkAccount();
      }}
    >
      <div className="flex justify-between">
        <div className="col">
          <div className="flex justify-start items-center">
            <div className="col flex justify-start mb-5">
              <div className="rounded-full bg-icon_bg/20 w-9 h-9 flex justify-center items-center mr-3">
                <img src={linkAccountIcon} />
              </div>
            </div>
            <div className="col">
              <div className="font-poppins text-xs font-semibold text-primary_light tracking-widest mb-2.5">
                {title}
              </div>
              <div className="font-poppins text-xs font-light text-gray_light tracking-widest text-center">
                {subTitle}
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <FiChevronRight color="#056489" size={18} />
          <i data-feather="chevron-right"></i>
        </div>
      </div>
    </div>
  );
};
export default LinkAccountCard;
