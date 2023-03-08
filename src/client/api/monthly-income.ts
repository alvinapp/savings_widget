import * as Sentry from "@sentry/browser";

import { IConfig } from "client/store/configuration";
import { postData } from "client/api/api";

const saveMonthlyIncome = async ({
  configuration,
  amount,
}: {
  configuration: IConfig;
  amount: number;
}) => {
  const res = await postData({
    endpoint: "/users/income/",
    data: { amount: amount },
    token: configuration.token,
  });
  return res;
};

export default saveMonthlyIncome;
