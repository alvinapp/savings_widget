import create from "zustand";
const useGoalContributionSettingsStore = create((set) => ({
  contributionAmount: 0,
  weekDayToContibute: "",
  monthlyWeek: "",
  weekDayOfTheMonth: "",
  startingFromDate: new Date(),
  setContributionAmount: (amount: number) => {
    return set((state: any) => {
      const result = {
        contributionAmount: amount,
      };
      return result;
    });
  },
  setWeekDayToContribute: (dayOfTheWeek: any) => {
    return set((state: any) => {
      const result = {
        weekDayToContibute: dayOfTheWeek,
      };
      return result;
    });
  },
  setMonthlyWeek: (weekOfTheMonth: any) => {
    return set((state: any) => {
      const result = {
        monthlyWeek: weekOfTheMonth,
      };
      return result;
    });
  },
  setWeekDayOfTheMonth: (dayOfTheWeekOfMonth: any) => {
    return set((state: any) => {
      const result = {
        weekDayOfTheMonth: dayOfTheWeekOfMonth,
      };
      return result;
    });
  },
  setStartFromDate: (startingFromDate: Date) => {
    return set((state: any) => {
      const result = {
        startingFromDate: startingFromDate,
      };
      return result;
    });
  },
}));
export default useGoalContributionSettingsStore;
