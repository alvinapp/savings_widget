import { useCallback, useEffect, useState } from "react";
import Lottie from "react-lottie";

import ConnectSuccessIcon from "client/pages/components/mono/connect-success/ConnectSuccessIcon";
import ConnectSuccessTitle from "client/pages/components/mono/connect-success/ConnectSuccessTitle";
import ConnectSuccessProgress from "client/pages/components/mono/connect-success/ConnectSuccessProgress";
import CloudImage from "client/pages/components/mono/connect-success/ConnectSuccessCloud";
import cloud1 from "client/assets/images/cloud1.svg";
import cloud2 from "client/assets/images/cloud2.svg";
import successIcon from "client/assets/images/connect-success-icon.svg";
import Routes from "client/pages/routes";
import useAccountStore from "client/store/BankAccountStore";
import getAccounts from "client/api/accounts";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useFilterStore from "client/store/filterStore";
import getTransactions from "client/api/transactions";
import useTransactionStore from "client/store/transactionStore";
import scrollViewTo from "client/utils/ScrollView";
import usePageStore from "client/store/pageStore";
import Clouds from "client/assets/json_lottie/clouds.json";
import Confetti from "client/assets/json_lottie/confetti.json";

const ConnectSuccess = () => {
  const pageStore = usePageStore((state: any) => state);
  const [timer, setTimer] = useState(21);
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
  const refreshAccounts = async () => {
    getAccounts(configuration)
      .then((result) => {
        accountsStore.init(result);
        filterAccountBy(result[result.length - 1]);
        scrollViewTo(result.indexOf(result[result.length - 1]));

        return result;
      })
      .then((data) => {
        transactionsStore.setFilterLoading(true);
        getTransactions(configuration, data[data.length - 1]).then(
          (results) => {
            if (Array.isArray(results)) {
              transactionsStore.setFilteredTransactions(results);
              transactionsStore.setFilterLoading(false);
              transactionsStore.setFilterLoaded(true);
            }
          }
        );
      })
      .catch((err) => {});
  };
  useEffect(() => {
    timer > 0 && setTimeout(timeOutCallback, 1000);
    if (timer === 0) {
      refreshAccounts()
        .then((_) => {
          document.dispatchEvent(
            new CustomEvent("toPage", {
              detail: { page: Routes.MYACCOUNT, replace: true },
            })
          );
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

  const confettiImage = {
    loop: false,
    autoplay: true,
    animationData: Confetti,
    speed: 0.02,
    direction: -1,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const confettiImage2 = {
    loop: false,
    autoplay: true,
    animationData: Confetti,
    speed: 0.02,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="h-screen bg-connectSuccessBg bg-cover w-full">
      <div className="absolute w-full h-full">
        <Lottie options={cloudImage} />
      </div>
      <div className="absolute max-w-full mt-[20%]">
        <Lottie options={confettiImage} />
      </div>
      <div className="absolute max-w-full mt-[21%] scale-x-[-1]">
        <Lottie options={confettiImage2} />
      </div>

      <div className="flex flex-col relative">
        <div className="mt-28">
          <div className=" mt-23 flex flex-row justify-center">
            <ConnectSuccessIcon icon={successIcon} />
          </div>
          <div className="mt-13 mb-10 text-center">
            <ConnectSuccessTitle title=" Hurray! Account Linked." />
          </div>
          <div className=" mx-9 flex flex-col">
            <ConnectSuccessProgress timer={timer} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConnectSuccess;
