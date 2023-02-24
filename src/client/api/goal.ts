import * as Sentry from "@sentry/browser";

import { IConfig } from "client/store/configuration";
import { fetchData, postData } from "client/api/api";

declare var AppConfig: AppConfig;

export const saveAGoal = async ({
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

export const saveGoalImage = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) =>
  postData({
    endpoint: `/goals/${goalId}/goal_image`,
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

export const confirmGoal = async ({
  configuration,
  goalId,
  data,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) =>
  postData({
    endpoint: `/goals/${goalId}/confirm`,
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

export const getConfirmedGoals = async ({
  configuration,
}: {
  configuration: IConfig;
}) =>
  fetchData({
    endpoint: `/goals/my_goals`,
    token: configuration.token,
  })
    .then((res) => {
      return res;
    })
    .catch((reason: any) => {
      Sentry.captureException(reason);
      console.debug(reason);
      return Promise.reject(reason);
    });

//Pause a goal
export const pauseGoal = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) =>
  postData({
    endpoint: `/goals/${goalId}/pause`,
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
//Resume a goal
export const resumeGoal = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) =>
  postData({
    endpoint: `/goals/${goalId}/resume`,
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

//Delete goal
export const deleteGoal = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) =>
  postData({
    endpoint: `/goals/${goalId}/delete`,
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

//Search for custom images
export const searchImages = async ({ searchText }: { searchText: string }) => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${AppConfig.ACCESS_KEY}`
  );
  const dataJ = await data.json();
  const result = dataJ.results;
  return result;
};
