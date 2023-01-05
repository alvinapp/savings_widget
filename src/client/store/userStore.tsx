import create from 'zustand';

const useUserStore = create((set) => ({
  user: {},
  setUser: (user: any) => {
    return set(() => {
      const result = {
        user: user,
      };

      return result;
    });
  },
}));
export default useUserStore;
