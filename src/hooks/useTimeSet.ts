import { useState, useEffect } from 'react';

const useTimeSet = () => {
  const [koreaTime, setKoreaTime] = useState<Date>(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setKoreaTime(now);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setKoreaTime]);

  return {
    koreaTime,
  };
};

export default useTimeSet;
