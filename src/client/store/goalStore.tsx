import Goal from "client/models/Goal";
import create from "zustand";
const useGoalStore = create((set) => ({
  selectedGoal: {},
  setGoal: (goal: Goal) => {
    return set((state: any) => {
      const result = {
        selectedGoal: goal,
      };
      return result;
    });
  },
}));
export default useGoalStore;
