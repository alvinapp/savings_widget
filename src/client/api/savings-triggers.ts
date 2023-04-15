import { IConfig } from "client/store/configuration";
import { postData } from "./api";
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
