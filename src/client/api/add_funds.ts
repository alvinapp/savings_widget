import * as Sentry from "@sentry/browser";

import { IConfig } from "client/store/configuration";
import { postData } from "./api";
export const addContributionFunds = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/${goalId}/contribute`,
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
