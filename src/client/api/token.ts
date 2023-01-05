import * as Sentry from '@sentry/browser';

import {IConfig} from 'client/store/configuration';
import {postData} from 'client/api/api';

const getToken = async (configuration: IConfig) => {
  const {identifier, publicKey} = configuration;
  if (!identifier || !publicKey)
    throw new Error('publicKey and identifier must be provided');

  return postData({
    endpoint: '/users/create/',
    data: {email: identifier, sdk_key: publicKey},
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

export default getToken;
