import * as Sentry from '@sentry/browser';

import {IConfig} from 'client/store/configuration';
import {fetchData, postData} from 'client/api/api';

const getMonoPubKey = async (configuration: IConfig) => {
  return fetchData({
    endpoint: '/mono/pub-key',
    publicKey: configuration.publicKey,
  }).catch((err) => {
    console.debug(JSON.stringify(err));
    Sentry.captureException(err);

    return Promise.reject(err);
  });
};

const postCode = async (configuration: IConfig, code: string) => {
  return postData({
    endpoint: '/mono/code',
    token: configuration.token || null,
    data: {code},
    publicKey: configuration.publicKey,
  }).catch((err) => {
    Sentry.captureException(err);

    return Promise.reject(err);
  });
};

export {postCode, getMonoPubKey};
