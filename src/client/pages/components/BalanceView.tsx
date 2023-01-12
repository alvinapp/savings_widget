import { checkNAN } from "client/utils/Formatters";
import { FiChevronRight } from "react-icons/fi";
type BalanceViewProps = {
  balance?: number;
  visible?: boolean;
  toggleVisibility?: () => void;
  viewBalance?: () => void;
  currency?: string;
};
const BalanceView = ({
  balance,
  visible = true,
  toggleVisibility,
  viewBalance,
  currency,
}: BalanceViewProps) => {
  let accountBalance = checkNAN(Math.round(balance!)).toLocaleString();

  return (
    <div className="flex flex-row">
      <div className="flex flex-col" onClick={viewBalance}>
        <div className="flex flex-row items-center justify-center">
          <div className="text-skin-subtitle text-center font-poppins text-xs font-medium tracking-wide">
            Total savings
          </div>
        </div>
        <div className="flex flex-col mt-1">
          {visible ? (
            <div className="flex flex-row items-center">
              <div className="text-xl text-skin-base font-semibold font-workSans -translate-x-1 translate-y-1">
                {currency}
              </div>
              <div className="text-4xl text-skin-base font-semibold font-workSans">
                {accountBalance}
              </div>
              {/* <div className="mt-7 ml-2" onClick={toggleVisibility}> */}
              {/* <div className="ml-2">
                <FiEye color="#9BC1D0" size="1.1875rem" />
              </div> */}
            </div>
          ) : (
            <div className="flex flex-row justify-evenly items-center">
              <div className="text-xl text-skin-base font-semibold font-workSans -translate-y-6">
                {currency}
              </div>
              <div className="text-4xl text-skin-base font-semibold font-workSans">
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
