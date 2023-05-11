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
//Get list of checking accounts

export const getCheckingAccounts = async (configuration: IConfig) => {
  try {
    const res = await fetchData({
      endpoint: "/bank_accounts/checking_accounts",
      token: configuration.token,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

export const getSavingsAccounts = async (configuration: IConfig) => {
  try {
    const res = await fetchData({
      endpoint: "/bank_accounts/savings_accounts",
      token: configuration.token,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

//get my total accounts
export const getMyAccounts = async (configuration: IConfig) => {
  try {
    const res = await fetchData({
      endpoint: "/bank_accounts/my_acounts",
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
