import { getConfirmedGoals, resumeGoal } from "client/api/goal";
import { IConfig, useConfigurationStore } from "client/store/configuration";
import useGoalStore from "client/store/goalStore";
const configuration = useConfigurationStore(
  (state: any) => state.configuration
) as IConfig;
const goal = useGoalStore((state: any) => state);
export const resumeAGoal = async (goal_id: number) => {
  resumeGoal({
    configuration: configuration,
    goalId: goal_id,
    data: {},
  }).then((result) => {
    if (result) {
      getConfirmedGoals({ configuration: configuration }).then((result) => {
        goal.setConfirmedGoals(result);
      });
    }
  });
};
