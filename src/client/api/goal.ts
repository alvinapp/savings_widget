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
}) => {
  try {
    const res = await postData({
      endpoint: "/goals",
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

export const saveGoalImage = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/${goalId}/goal_image`,
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

//Get Frequency text for give contribution settings

export const getScheduleFrequencyText = async ({
  configuration,
  data,
}: {
  configuration: IConfig;
  data: any;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/get_schedule`,
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

export const saveGoalContributionSettings = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/${goalId}/schedule`,
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
export const confirmGoal = async ({
  configuration,
  goalId,
  data,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/${goalId}/confirm`,
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

//Get all confirmed goals
export const getConfirmedGoals = async ({
  configuration,
}: {
  configuration: IConfig;
}) => {
  try {
    const res = await fetchData({
      endpoint: `/goals/my_goals`,
      token: configuration.token,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
//Pause a goal
export const pauseGoal = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/${goalId}/pause`,
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

//Resume a goal
export const resumeGoal = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/${goalId}/resume`,
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

//Delete goal
export const deleteGoal = async ({
  configuration,

  goalId,
}: {
  configuration: IConfig;

  goalId: number;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/${goalId}/delete`,
      token: configuration.token,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};

//Search for custom images
export const searchImages = async ({ searchText }: { searchText: string }) => {
  const data = await fetch(
    `https://api.unsplash.com/search/photos?page=1&query=${searchText}&client_id=${AppConfig.ACCESS_KEY}`
  );
  const dataJ = await data.json();
  const result = dataJ.results;
  return result;
};
//Update Goal
export const updateGoal = async ({
  configuration,
  goalId,
  data,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/${goalId}/update`,
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

//Update Contribution Settings
export const updateGoalContributionSettings = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/${goalId}/schedule/update`,
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
//Get total contribution
export const totalContribution = async ({
  configuration,
}: {
  configuration: IConfig;
}) => {
  try {
    const res = await fetchData({
      endpoint: `/goals/total_contributions`,
      token: configuration.token,
    });
    return res;
  } catch (reason: any) {
    Sentry.captureException(reason);
    console.debug(reason);
    return Promise.reject(reason);
  }
};
//Get maturity date
export const getMaturityDate = async ({
  configuration,
  data,
  goalId,
}: {
  configuration: IConfig;
  data: any;
  goalId: number;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/${goalId}/maturity`,
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
//Get default frequency
export const defaultFrequency = async ({
  configuration,
  data,
}: {
  configuration: IConfig;
  data?: any;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/schedule_text`,
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
//Get Contribution settings maturity date

export const contributionMaturityDate = async ({
  configuration,
  data,
}: {
  configuration: IConfig;
  data?: any;
}) => {
  try {
    const res = await postData({
      endpoint: `/goals/maturity`,
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

//update goal bank account
export const updateGoalBankAccount = async ({
  configuration,
  data,
}: {
  configuration: IConfig;
  data: any;
}) => {
  try {
    const res = await postData({
      endpoint: `/bank_accounts/goal_bank_accounts/update`,
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
