import * as Sentry from "@sentry/browser";

import { IConfig } from "client/store/configuration";
import { fetchData, postData } from "client/api/api";

export const linkBankAccount = async ({
  configuration,
  data,
}: {
  configuration: IConfig;
  data: any;
}) => {
  try {
    const res = await postData({
      endpoint: `/bank_accounts/goal_bank_accounts/create`,
      token: configuration.token,
      data: data,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
//Get a list of bank accounts
const getBankAccounts = async (configuration: IConfig) => {
  try {
    const res = await fetchData({
      endpoint: "/bank_accounts/",
      token: configuration.token,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
export default getBankAccounts;
