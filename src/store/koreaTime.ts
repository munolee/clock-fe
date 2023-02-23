import { atom } from 'recoil';

export const koreaTimeState = atom<Date>({
  key: 'koreaTimeState',
  default: new Date(),
});
