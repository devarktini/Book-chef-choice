import { create } from 'zustand';

export const useStore = create((set) => ({
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
}));
