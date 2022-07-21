import { atom } from 'recoil'

export const accounts = atom({
  key: "accounts", // unique ID (with respect to other atoms/selectors)
  default: [
    
  ], // default value (aka initial value)
});