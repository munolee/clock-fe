import { koreaTimeState } from '@store/koreaTime';
import { useRecoilValue } from 'recoil';

type Degree = number;
type UseAnalogClockType = {
  secondDegree: Degree;
  minuteDegree: Degree;
  hourDegree: Degree;
  tooltipText: string;
};

const useAnalogClock = (): UseAnalogClockType => {
  const koreaTime = useRecoilValue(koreaTimeState);
  const [hours, minutes, seconds] = [koreaTime.getHours() % 12, koreaTime.getMinutes(), koreaTime.getSeconds()];

  const secondDegree = seconds * 6;
  const minuteDegree = minutes * 6 + secondDegree / 60;
  const hourDegree = hours * 30 + minuteDegree / 12;

  return {
    secondDegree,
    minuteDegree,
    hourDegree,
    tooltipText: `${hours}:${minutes}:${seconds}`,
  };
};

export default useAnalogClock;
