import Goal from "client/models/Goal";
import create from "zustand";
const useGoalStore = create((set) => ({
  selectedGoal: {},
  confirmedGoals: [],
  confirmedGoal: {},
  contributionSettingsGoalId: 0,
  resume_at: new Date(),
  pauseGoalBottomSheet: false,
  pauseDeleteBottomSheet: false,
  deleteGoalBottomSheet: false,
  goalImageUrl: "",
  customImageUrl: "",
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
  setConfirmedGoals: (goals: any) => {
    return set((state: any) => {
      const result = {
        confirmedGoals: goals,
      };
      return result;
    });
  },
  setConfirmedGoal: (goal: any) => {
    return set((state: any) => {
      const result = {
        confirmedGoal: goal,
      };
      return result;
    });
  },
  setResumeAtDate: (date: any) => {
    return set((state: any) => {
      const result = {
        resume_at: date,
      };
      return result;
    });
  },
  openPauseGoalBottomSheet: (open: any) => {
    return set((state: any) => {
      const result = {
        pauseGoalBottomSheet: open,
      };
      return result;
    });
  },
  openPauseDeleteBottomSheet: (open: any) => {
    return set((state: any) => {
      const result = {
        pauseDeleteBottomSheet: open,
      };
      return result;
    });
  },
  openDeleteBottomSheet: (open: boolean) => {
    return set((state: any) => {
      const result = {
        deleteGoalBottomSheet: open,
      };
      return result;
    });
  },
  setCustomImageUrl: (image: string) => {
    return set((state: any) => {
      const result = {
        customImageUrl: image,
      };
      return result;
    });
  },
  setGoalImageUrl: (image: string) => {
    return set((state: any) => {
      const result = {
        goalImageUrl: image,
      };
      return result;
    });
  },
}));
export default useGoalStore;
