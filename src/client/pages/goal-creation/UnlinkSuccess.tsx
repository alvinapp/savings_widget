import { useCallback, useEffect, useState } from "react";

import CloudImage from "client/pages/components/mono/connect-success/ConnectSuccessCloud";
import cloud1 from "client/assets/images/cloud1.svg";
import cloud2 from "client/assets/images/cloud2.svg";
import successIcon from "client/assets/images/connect-success-icon.svg";
import Routes from "client/pages/routes";
import UnlinkSuccessIcon from "client/pages/components/mono/unlink-success/connect-success/UnlinkSuccessIcon";
import UnlinkSuccessProgress from "client/pages/components/mono/unlink-success/connect-success/UnlinkSuccessProgress";
import getAccounts from "client/api/accounts";
import useAccountStore from "client/store/BankAccountStore";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import usePageStore from "client/store/pageStore";
import getTransactions from "client/api/transactions";
import useTransactionStore from "client/store/transactionStore";
import Lottie from "react-lottie";
import Clouds from "client/assets/json_lottie/clouds.json";
import Confetti from "client/assets/json_lottie/confetti.json";

const UnlinkSuccess = () => {
  const [timer, setTimer] = useState(12);
  const timeOutCallback = useCallback(
    () => setTimer((currTimer): number => currTimer - 1),
    []
  );
  const filterAccountBy = useAccountStore((state: any) => state.filterBy);
  const accountsStore = useAccountStore((state: any) => state);
  const configuration = useConfigurationStore(
    (state: any) => state.configuration
  ) as IConfig;
  const transactionsStore = useTransactionStore((state: any) => state);
  const pageStore = usePageStore((state: any) => state);
  const refreshAccounts = async () => {
    getAccounts(configuration)
      .then((result) => {
        accountsStore.init(result);
        filterAccountBy(result.slice(0, 1)[0]);
        return result;
      })
      .then((data) => {
        transactionsStore.setFilterLoading(true);
        getTransactions(configuration, data.slice(0, 1)[0]).then((results) => {
          if (Array.isArray(results)) {
            transactionsStore.setFilteredTransactions(results);
            transactionsStore.setFilterLoading(false);
            transactionsStore.setFilterLoaded(true);
          }
        });
      })
      .catch((err) => {});
  };
  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
    if (timer === 0) {
      refreshAccounts()
        .then((_) => {
          if (pageStore.myAccountsPage) {
            if (accountsStore.accounts.length <= 1) {
              document.dispatchEvent(
                new CustomEvent("toPage", {
                  detail: { page: Routes.EMPTYMYACCOUNTSVIEW, replace: true },
                })
              );
            } else {
              document.dispatchEvent(
                new CustomEvent("toPage", {
                  detail: { page: Routes.MYACCOUNT, replace: true },
                })
              );
            }
          } else {
            document.dispatchEvent(
              new CustomEvent("toPage", {
                detail: { page: Routes.OVERVIEW, replace: true },
              })
            );
          }
        })
        .catch((error) => {
          Promise.reject(error);
        });
    }
  }, [timer, timeOutCallback]);

  const cloudImage = {
    loop: true,
    autoplay: true,
    animationData: Clouds,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="h-screen bg-connectSuccessBg bg-cover w-full">
      <div className="absolute w-full h-full">
        <Lottie options={cloudImage} />
      </div>
      <div className="flex flex-col relative">
        <div className="mt-28">
          <div className="mt-23 flex flex-row justify-center">
            <UnlinkSuccessIcon icon={successIcon} />
          </div>
          <div className="mx-9 flex flex-col mt-12">
            <UnlinkSuccessProgress timer={timer} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnlinkSuccess;
