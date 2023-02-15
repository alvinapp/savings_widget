import create from "zustand";
const useGoalCreationStore = create((set) => ({
  goalCreationStatus: {},
  setGoalCreationStatus: (status: any) => {
    return set((state: any) => {
      const result = {
        goalCreationStatus: status,
      };
      return result;
    });
  },
}));
export default useGoalCreationStore;
