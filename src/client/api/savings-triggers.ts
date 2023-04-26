import { IConfig } from "client/store/configuration";
import { fetchData, postData } from "./api";
import * as Sentry from "@sentry/browser";
export const saveTrigger = async ({
  configuration,
  data,
}: {
  configuration: IConfig;
  data?: any;
}) => {
  try {
    const res = postData({
      endpoint: `/savings_trigger_endpoints/`,
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

export const fetchGoalTriggers = async ({
  configuration,
  goalId,
}: {
  configuration: IConfig;
  goalId: number;
}) => {
  try {
    const res = await fetchData({
      endpoint: `/savings_trigger_endpoints/goal/${goalId}`,
      token: configuration.token,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
export const fetchAllTriggers = async ({
  configuration,
}: {
  configuration: IConfig;
}) => {
  try {
    const res = await fetchData({
      endpoint: `/savings_trigger_endpoints`,
      token: configuration.token,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
