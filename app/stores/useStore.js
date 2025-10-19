import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      booking: {
        location: '',
        people: '',
        occasion: '',
        place: '',
        date: '',
        time: '',
        service: '',
        restriction: '',
        select: '',
        budget: '',
        summary: '',
        selectrestriction: '',
      },
      setBooking: (newBooking) =>
        set((state) => ({ booking: { ...state.booking, ...newBooking } })),
      userInputData: [],
      addUserInputData: (newData) =>
        set((state) => ({ userInputData: [...state.userInputData, newData] })),

      // Theme management
      theme: 'current', // 'current', 'light', 'dark'
      setTheme: (theme) => {
        set({ theme });
        // Update document attribute for CSS theming
        if (typeof document !== 'undefined') {
          document.documentElement.setAttribute('data-theme', theme);
        }
      },
    }),
    {
      name: 'app-storage', // name of the item in localStorage
      partialize: (state) => ({
        theme: state.theme,
        booking: state.booking,
        userInputData: state.userInputData,
      }),
    }
  )
);
