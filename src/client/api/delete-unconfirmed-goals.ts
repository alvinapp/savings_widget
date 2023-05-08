import * as Sentry from "@sentry/browser";

import { IConfig } from "client/store/configuration";
import { deleteData, fetchData } from "client/api/api";

const deleteUnconfirmed = async (configuration: IConfig) => {
  try {
    const res = await deleteData({
      endpoint: "/goals/delete_unconfirm",
      token: configuration.token,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

export default deleteUnconfirmed;
