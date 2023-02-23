import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { koreaTimeState } from '@store/koreaTime';

const useTimeSet = () => {
  const setKoreaTime = useSetRecoilState(koreaTimeState);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      setKoreaTime(now);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [setKoreaTime]);
};

export default useTimeSet;
