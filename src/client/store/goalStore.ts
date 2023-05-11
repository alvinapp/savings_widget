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
  moreBottomSheet: false,
  goalImageUrl: "",
  goalId: 0,
  goalName: "",
  goalAmount: "",
  goalContributionFrequency: "",
  goalBankAccount: null,
  customImageUrl: "",
  totalContribution: 0,
  maturityDate: "",
  percentageOfSavings: 0,
  goalSavingsTriggers: [],
  percentage: 1,
  merchant_name: "All merchants",

  setBankAccount: (account: any) => {
    return set(() => {
      const results = {
        goalBankAccount: account,
      };
      return results;
    });
  },

  setGoalFrequency: (frequency: string) => {
    return set(() => {
      const results = {
        goalContributionFrequency: frequency,
      };
      return results;
    });
  },

  setPercentage: (value: number) => {
    return set(() => {
      const results = {
        percentage: value,
      };
      return results;
    });
  },
  setMerchantName: (name: string) => {
    return set(() => {
      const results = {
        merchant_name: name,
      };
      return results;
    });
  },
  setGoalSavingsTriggers: (triggers: Array<any>) => {
    return set(() => {
      const result = {
        goalSavingsTriggers: triggers,
      };
      return result;
    });
  },
  setGoalId: (id: number) => {
    return set(() => {
      const result = {
        goalId: id,
      };
      return result;
    });
  },
  setPercentageOfSavings: (perc: number) => {
    return set(() => {
      const result = {
        percentageOfSavings: perc,
      };
      return result;
    });
  },
  setMaturityDate: (date: any) => {
    return set(() => {
      const result = {
        maturityDate: date,
      };
      return result;
    });
  },
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
  openMoreBottomSheet: (open: boolean) => {
    return set((state: any) => {
      const result = {
        moreBottomSheet: open,
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
  setGoalName: (name: string) => {
    return set((state: any) => {
      const result = {
        goalName: name,
      };
      return result;
    });
  },
  setGoalAmount: (amount: number) => {
    return set((state: any) => {
      const result = {
        goalAmount: amount,
      };
      return result;
    });
  },
  setTotalContribution: (contribution: number) => {
    return set((state: any) => {
      const result = {
        totalContribution: contribution,
      };
      return result;
    });
  },
}));
export default useGoalStore;
