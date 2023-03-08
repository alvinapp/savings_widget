import * as Sentry from "@sentry/browser";

import { IConfig, useConfigurationStore } from "client/store/configuration";
import { fetchData, postData } from "client/api/api";

const checkStatusOfGoalCreation = async (configuration: IConfig) => {
  const res = await fetchData({
    endpoint: "/users/status/",
    token: configuration.token,
  });
  return res;
};

export default checkStatusOfGoalCreation;
