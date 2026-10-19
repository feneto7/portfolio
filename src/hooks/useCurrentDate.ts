import { useEffect, useState } from 'react';
import { formatCurrentDate } from '@/utils/formatters';

const DATE_REFRESH_MS = 60_000;
export function useCurrentDate() {
  const [date, setDate] = useState(() => formatCurrentDate(new Date()));
  useEffect(() => {
    const timer = window.setInterval(
      () => setDate(formatCurrentDate(new Date())),
      DATE_REFRESH_MS,
    );
    return () => window.clearInterval(timer);
  }, []);
  return date;
}
