import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { mmkvStorage } from "./storage";

type CustomLocation = {
  latitude: number;
  longitude: number;
  address: string;
  heading: number;
} | null;

interface RiderStoreProps {
  user: any;
  location: CustomLocation;
  onDuty: boolean;
  todayEarning: number ;
  lastDate : string;
  setUser: (data: any) => void;
  setOnDuty: (data: boolean) => void;
  setLocation: (data: CustomLocation) => void;
  clearRiderData: () => void;
  setTodayEarning: (amount: number) => void;
  resetEarning: () => void;
}

const today = new Date().toISOString().split('T')[0];

export const useRiderStore = create<RiderStoreProps>()(
  persist(
    (set,get) => ({
      user: null,
      location: null,
      todayEarning: 0,
      lastDate : today,
      onDuty: false,
      setUser: (data) => set({ user: data }),
      setLocation: (data) => set({ location: data }),
      setOnDuty: (data) => set({ onDuty: data }),
      clearRiderData: () => set({ user: null, location: null, onDuty: false }),
      setTodayEarning: (amount) =>{
        const current = new Date().toISOString().split('T')[0];
        if(get().lastDate !== current) set({todayEarning : 0,lastDate : current});
        set((s) => ({todayEarning : s.todayEarning + amount}))
      },
      resetEarning : () => {
        const current =  new Date().toISOString().split('T')[0];
        if(get().lastDate !== current) set({todayEarning : 0,lastDate : current})
      },
    }),
    {
      name: "rider-store",
      partialize: (state) => ({
        user: state.user,
      }),
      storage: createJSONStorage(() => mmkvStorage),
    }
  )
);
