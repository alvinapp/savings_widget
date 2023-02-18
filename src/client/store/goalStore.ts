import Goal from "client/models/Goal";
import create from "zustand";
const useGoalStore = create((set) => ({
  selectedGoal: {},
  contributionSettingsGoalId: 0,
  setGoal: (goal: Goal) => {
    return set((state: any) => {
      const result = {
        selectedGoal: goal,
      };
      return result;
    });
  },
  setContributionSettingsGoalId: (goalId: Goal) => {
    return set((state: any) => {
      const result = {
        contributionSettingsGoalId: goalId,
      };
      return result;
    });
  },
}));
export default useGoalStore;
