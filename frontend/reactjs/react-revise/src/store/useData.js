import { create } from 'zustand'

export const useData = create(
    (set) => ({
        username: "Ali Usman",
        profile: "https://facebook.com"
    }
))