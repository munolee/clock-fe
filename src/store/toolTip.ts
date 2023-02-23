import { atom } from 'recoil';
import { ToolTipStateType } from '@hooks/useToolTip';

export const toolTipState = atom<ToolTipStateType>({
  key: 'toolTipState',
  default: {
    focus: false,
    positionX: 0,
    positionY: 0,
  },
});
