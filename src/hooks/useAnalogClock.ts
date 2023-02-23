import useTimeSet from '@hooks/useTimeSet';

const useAnalogClock = () => {
  const { koreaTime } = useTimeSet();
  const [hours, minutes, seconds] = [
    koreaTime.getHours() % 12,
    koreaTime.getMinutes(),
    koreaTime.getSeconds(),
  ];

  const secondDegree = seconds * 6;
  const minuteDegree = minutes * 6 + secondDegree / 60;
  const hourDegree = hours * 30 + minuteDegree / 12;

  return {
    secondDegree,
    minuteDegree,
    hourDegree,
  };
};

export default useAnalogClock;
