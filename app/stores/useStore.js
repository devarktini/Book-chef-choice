import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useStore = create(
  persist(
    (set, get) => ({
      // Theme state
      theme: 'light', // 'light' | 'dark'
      setTheme: (theme) => set({ theme }),

      // Booking state
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

      // User input data
      userInputData: [],
      addUserInputData: (newData) =>
        set((state) => ({ userInputData: [...state.userInputData, newData] })),
    }),
    {
      name: 'book-my-chef-store',
      partialize: (state) => ({
        theme: state.theme,
        booking: state.booking,
      }),
    }
  )
);
