import * as Sentry from '@sentry/browser';

import {IConfig} from 'client/store/configuration';

import {postData} from './api';
const unlinkAccount = async ({
  configuration,
  account_id,
}: {
  configuration?: IConfig;
  account_id?: string;
}) => {
  return postData({
    endpoint: '/mono/unlink/',
    data: {account_id: account_id},
    token: configuration!.token,
  })
    .then((data: any) => {
      return data;
    })
    .catch((reason: any) => {
      console.debug(reason);
      Sentry.captureException(reason);

      return Promise.reject(reason);
    });
};
export default unlinkAccount;
