import {checkNAN} from 'client/utils/Formatters';
import {FiChevronRight} from 'react-icons/fi';
type BalanceViewProps = {
  balance?: number;
  visible?: boolean;
  toggleVisibility?: () => void;
  viewBalance?: () => void;
};
const BalanceView = ({
  balance,
  visible = true,
  toggleVisibility,
  viewBalance,
}: BalanceViewProps) => {
  let accountBalance = checkNAN(Math.round(balance!)).toLocaleString();

  return (
    <div className="flex flex-row" id="al-balance-view">
      <div className="flex flex-col" onClick={viewBalance}>
        <div
          className="flex flex-row items-center justify-center"
          id="al-balance-title"
        >
          <div className="text-gray text-center font-poppins text-xs font-medium tracking-wide">
            Total Balance
          </div>
          <FiChevronRight color="#9BC1D0" size="1rem" />
        </div>
        <div className="flex flex-col mt-2" id="al-balance-amount">
          {visible ? (
            <div className="flex flex-row items-center">
              <div className="text-lg text-black font-bold font-workSans -translate-x-2 translate-y-1">
                KES
              </div>
              <div className="text-4xl text-black font-semibold font-workSans mr-12">
                {accountBalance}
              </div>
              {/* <div className="mt-7 ml-2" onClick={toggleVisibility}> */}
              {/* <div className="ml-2">
                <FiEye color="#9BC1D0" size="1.1875rem" />
              </div> */}
            </div>
          ) : (
            <div
              className="flex flex-row justify-evenly items-center"
              id="al-balance-amount"
            >
              <div className="text-lg text-black font-bold font-workSans -translate-y-6">
                KES
              </div>
              <div className="text-4xl text-black font-semibold font-workSans">
                xxxxx
              </div>
              {/* <div className="mt-7 ml-2" onClick={toggleVisibility}> */}
              {/* <div className="ml-2">
                <FiEyeOff color="#9BC1D0" size="1.1875rem" />
              </div> */}
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center"></div>
    </div>
  );
};
export default BalanceView;
