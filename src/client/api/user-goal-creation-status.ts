import * as Sentry from "@sentry/browser";

import { IConfig, useConfigurationStore } from "client/store/configuration";
import { fetchData, postData } from "client/api/api";

const checkStatusOfGoalCreation = async (configuration: IConfig) => {
  try {
    const res = await fetchData({
      endpoint: "/users/status/",
      token: configuration.token,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

export default checkStatusOfGoalCreation;
