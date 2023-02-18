import * as Sentry from "@sentry/browser";

import { IConfig } from "client/store/configuration";
import { deleteData, fetchData } from "client/api/api";

const deleteUnconfirmed = async (configuration: IConfig) =>
  deleteData({
    endpoint: "/goals/delete_unconfirm",
    token: configuration.token,
  })
    .then((result) => {
      return result;
    })
    .catch((reason: any) => {
      Sentry.captureException(reason);
      console.debug(reason);
      return Promise.reject(reason);
    });

export default deleteUnconfirmed;
