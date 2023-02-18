import * as Sentry from "@sentry/browser";

import { IConfig } from "client/store/configuration";
import { fetchData, postData } from "client/api/api";

const saveAGoal = async ({
  configuration,
  data,
}: {
  configuration: IConfig;
  data: any;
}) =>
  postData({
    endpoint: "/goals",
    token: configuration.token,
    data: data,
  })
    .then((res) => {
      return res;
    })
    .catch((reason: any) => {
      Sentry.captureException(reason);
      console.debug(reason);
      return Promise.reject(reason);
    });

export const saveGoalContributionSettings = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) =>
  postData({
    endpoint: `/goals/${goalId}/schedule`,
    token: configuration.token,
    data: data,
  })
    .then((res) => {
      return res;
    })
    .catch((reason: any) => {
      Sentry.captureException(reason);
      console.debug(reason);
      return Promise.reject(reason);
    });

export default saveAGoal;
