import React from 'react';
import styled from 'styled-components';
import { ClockSize, ClockHandColor } from '@constants/clock';

const AnalogClock = () => {
  return (
    <Clock size={ClockSize.CLOCK}>
      <Hand
        degrees={190}
        size={ClockSize.HOUR_HAND}
        color={ClockHandColor.HOUR_HAND_COLOR}
      />
      <Hand
        degrees={170}
        size={ClockSize.MINUTE_HAND}
        color={ClockHandColor.MINUTE_HAND_COLOR}
      />
      <Hand
        degrees={140}
        size={ClockSize.SECOND_HAND}
        color={ClockHandColor.SECOND_HAND_COLOR}
      />
    </Clock>
  );
};

export default AnalogClock;

const Clock = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 50%;
  border: 4px solid #1d2b32;
  position: relative;
`;

const Hand = styled.div<{ size: number; degrees: number; color: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: ${({ size }) => size / 2 - 20}px;
  transform-origin: 0 0;
  transform: rotate(${({ degrees }) => degrees}deg);
  background-color: ${({ color }) => color};
`;
