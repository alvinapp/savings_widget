import * as Sentry from '@sentry/browser';

import {IConfig} from 'client/store/configuration';
import {fetchData} from 'client/api/api';

const getAccounts = async (configuration: IConfig) =>
  fetchData({
    endpoint: '/users/',
    token: configuration.token,
    publicKey: configuration.publicKey,
  })
    .then((data) => {
      return data.external_linked_accounts.filter(
        (element: any) => element.is_linked === true
      );
    })
    .catch((reason: any) => {
      Sentry.captureException(reason);
      console.debug(reason);
      return Promise.reject(reason);
    });

export default getAccounts;
