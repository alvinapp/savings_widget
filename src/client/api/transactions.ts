import * as Sentry from '@sentry/browser';

import {IConfig} from 'client/store/configuration';
import {fetchData} from 'client/api/api';
import Account from 'client/models/Account';

const getTransactions = async (configuration: IConfig, account?: Account) => {
  const endpoint = account
    ? `/transactions?mono_account_id=${account.account_id}`
    : '/transactions/all_accounts';

  return fetchData({
    endpoint: endpoint,
    token: configuration.token,
    publicKey: configuration.publicKey,
  })
    .then((data) => {
      if (data !== null) return data.slice(0, 10);
    })
    .catch((reason: any) => {
      console.debug(reason);
      Sentry.captureException(reason);
      return Promise.reject(reason);
    });
};

export default getTransactions;
