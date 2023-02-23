import React from 'react';
import styled from 'styled-components';
import { ClockSize, ClockHandColor } from '@constants/clock';
import useAnalogClock from '@hooks/useAnalogClock';

const AnalogClock = () => {
  const { hourDegree, minuteDegree, secondDegree } = useAnalogClock();

  return (
    <Clock size={ClockSize.CLOCK}>
      <Hand
        degree={hourDegree}
        size={ClockSize.HOUR_HAND}
        color={ClockHandColor.HOUR_HAND_COLOR}
      />
      <Hand
        degree={minuteDegree}
        size={ClockSize.MINUTE_HAND}
        color={ClockHandColor.MINUTE_HAND_COLOR}
      />
      <Hand
        degree={secondDegree}
        size={ClockSize.SECOND_HAND}
        color={ClockHandColor.SECOND_HAND_COLOR}
      />
    </Clock>
  );
};

export default AnalogClock;

const Clock = styled.div<{ size: number }>`
  position: relative;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border: 4px solid #1d2b32;
  border-radius: 50%;
`;

const Hand = styled.div<{ size: number; degree: number; color: string }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: ${({ size }) => size / 2}px;
  transform-origin: 0 0;
  transform: rotate(${({ degree }) => degree + 180}deg);
  background-color: ${({ color }) => color};
`;
