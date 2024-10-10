import { atom } from 'recoil';

//state for user being logged in
export const adminState = atom({ key: 'adminState', default: false });

export const current = atom<string>({ key: 'current', default: "" });
