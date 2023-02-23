import styled from 'styled-components';
import useToolTip from '@hooks/useToolTip';

type ClockToolTipProps = {
  tooltipText: string;
};

const ClockToolTip = ({ tooltipText }: ClockToolTipProps) => {
  const { visible, positionX, positionY } = useToolTip();
  return (
    <ToolTip visible={visible} positionX={positionX} positionY={positionY}>
      {tooltipText}
    </ToolTip>
  );
};

export default ClockToolTip;

const ToolTip = styled.div<{ visible: boolean; positionX: number; positionY: number }>`
  position: absolute;
  top: -60px;
  padding: 16px;
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  border-radius: 5px;
  font-size: 18px;
  white-space: nowrap;
  transform: ${({ positionX, positionY }) => `translate3d(${positionX}px, ${positionY}px, 0)`};
  transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1) 0.1s;
  will-change: transform;
`;
