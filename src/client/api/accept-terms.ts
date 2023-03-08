import * as Sentry from "@sentry/browser";

import { IConfig } from "client/store/configuration";

import { fetchData, postData } from "./api";
export const acceptTerms = async ({
  configuration,
  accept,
}: {
  configuration?: IConfig;
  accept?: boolean;
}) => {
  return postData({
    endpoint: "/users/terms-and-conditions/",
    data: accept,
    token: configuration!.token,
  })
    .then((data: any) => {
      return data;
    })
    .catch((reason: any) => {
      Sentry.captureException(reason);

      return Promise.reject(reason);
    });
};
