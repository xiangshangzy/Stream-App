import { create } from "zustand";

export const useThemeStore = create<{ dark: boolean, setDark: (dark: boolean) => void }>((set, state) => ({
    dark: true,
    setDark: (dark: boolean) => set({ dark: dark })
}))