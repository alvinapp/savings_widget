import create from "zustand";
const useNotificationStore = create((set) => ({
  notifications: [],
  setNotification: (received: any) => {
    set((state: any) => ({
      notifications: [...state.notifications, received],
    }));
  },
}));
export default useNotificationStore;
