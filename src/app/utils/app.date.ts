import { DateTime } from 'luxon';

// -----------------------------
// Interfaces and Types
// -----------------------------
interface IOptionFormat extends Intl.DateTimeFormatOptions {}

type IntervalType = 'daily' | 'weekly' | 'monthly';
type PeriodType = 'day(s)' | 'hour(s)' | 'minute(s)';

interface IEventSchedule {
  start: string | Date;
  end: string | Date;
}

// -----------------------------
// Basic Helpers
// -----------------------------

// Current user Time Zone (e.g. "EDT")
export const getTimeZone = (): string =>
  new Date().toLocaleTimeString('en-us', { timeZoneName: 'short' }).split(' ')[2];

// Format: "Wed, Mar 27, 2024, 9:30 AM"
export const getLocalDateString = (dateString: string): string => {
  const date = new Date(dateString);
  const options: IOptionFormat = {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  };

  return date.toLocaleString('en-US', options);
};

// Example Output: "Wed, Mar 27, 2024, 09:30AM"
export const formatDateWithTimeZoneRegion = (date: Date): string => {
  return DateTime.fromJSDate(date).toFormat('EEE, MMM dd, yyyy, hh:mma');
};

// Example Output: "Thu, Sep 8, 2023"
export const getDateShort = (dt: string| Date): string => {
  const locale = navigator.language;
  const date = new Date(dt);

  const options: IOptionFormat = {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  return date.toLocaleDateString(locale, options);
};

// Example Output: "Sep 8, 2023"
export const getDateShortWithoutWeek = (dt: string): string => {
  const locale = navigator.language;
  const date = new Date(dt);

  const options: IOptionFormat = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  };

  return date.toLocaleDateString(locale, options);
};

// Example Output: "8:00 AM"
export const getLocalTime = (date: string): string => {
  const currentDate = new Date(date);
  return currentDate.toLocaleString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
};

// Output => Monday, Tuesday, ..., Sunday
export const getWeekDay = (date: string): string =>
  new Date(date).toLocaleDateString('en-US', { weekday: 'long' });

// -----------------------------
// Date Range Helpers
// -----------------------------

export const getWeekendDates = () => {
  const today = DateTime.now();
  const startOfWeek = today.startOf('week');
  const startOfWeekend = startOfWeek.plus({ days: 4 });
  const endOfWeekend = startOfWeekend.plus({ days: 2 });

  return {
    starts: startOfWeekend.toISODate(),
    ends: endOfWeekend.toISODate(),
  };
};

export const getWeekDates = () => {
  const today = DateTime.now();
  const startOfWeek = today.startOf('week');
  const endOfWeek = startOfWeek.plus({ days: 6 });

  return {
    starts: startOfWeek.toISODate(),
    ends: endOfWeek.toISODate(),
  };
};

export const getMonthDates = () => {
  const today = DateTime.now();
  const startOfMonth = today.startOf('month');
  const endOfMonth = today.endOf('month');

  return {
    starts: startOfMonth.toISODate(),
    ends: endOfMonth.toISODate(),
  };
};

export const getTomorrowDate = () => {
  const tomorrow = DateTime.now().plus({ days: 1 });
  return {
    starts: tomorrow.toISODate(),
    ends: '',
  };
};

// -----------------------------
// Range Generators
// -----------------------------
export const getAllDatesInRange = (
  startDate: string,
  endDate: string,
  intervalType: IntervalType
): string[] => {
  const start = DateTime.fromISO(startDate);
  const end = DateTime.fromISO(endDate);

  const dates: string[] = [];

  let currentDate = start;

  while (currentDate <= end) {
    const isoDate = currentDate.toISODate();
    if (isoDate) {
      dates.push(isoDate);
    }

    switch (intervalType) {
      case 'daily':
        currentDate = currentDate.plus({ days: 1 });
        break;
      case 'weekly':
        currentDate = currentDate.plus({ weeks: 1 });
        break;
      case 'monthly':
        currentDate = currentDate.plus({ months: 1 });
        break;
      default:
        throw new Error('Invalid interval type');
    }
  }

  return dates;
};

// -----------------------------
// Relative Time Utilities
// -----------------------------
export const backDatedDate = (
  date: Date,
  num: number,
  period: PeriodType
): Date | '' => {
  const currentDate = DateTime.fromJSDate(date);

  switch (period.toLowerCase()) {
    case 'day(s)':
      return currentDate.minus({ days: num }).toJSDate();
    case 'hour(s)':
      return currentDate.minus({ hours: num }).toJSDate();
    case 'minute(s)':
      return currentDate.minus({ minutes: num }).toJSDate();
    default:
      return '';
  }
};

export const mergeTimeToDate = (dateStamp: string, timeStamp: string): string => {
  const date = DateTime.fromISO(dateStamp);
  const time = DateTime.fromISO(timeStamp);

  const { hour, minute, second, millisecond } = time;
  const merged = date.set({ hour, minute, second, millisecond });

  return merged.toISO()!;
};

// -----------------------------
// Event Duration
// -----------------------------
export const averageDurationOfEvent = (eventSchedule: IEventSchedule[]): string => {
  const getDurationInMinutes = (start: string | Date, end: string | Date): number => {
    const diffInMs = new Date(end).getTime() - new Date(start).getTime();
    return diffInMs / (1000 * 60);
  };

  const totalMinutes = eventSchedule.reduce(
    (total, e) => total + getDurationInMinutes(e.start, e.end),
    0
  );

  const averageMinutes = totalMinutes / eventSchedule.length;
  const hours = Math.floor(averageMinutes / 60);
  const minutes = Math.round(averageMinutes % 60);

  return `${hours} hr(s) ${minutes} min(s)`;
};

// -----------------------------
// Date Formatting with Suffix
// -----------------------------
export function formatDateWithSuffix(dateString: string) {
  const date = new Date(dateString);
  const day = date.getDate();

  const getDaySuffix = (d: number): string => {
    if (d % 100 >= 11 && d % 100 <= 13) return 'th';
    switch (d % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  // Return a plain string (e.g. "5th"); renderers can choose to apply <sup> styling if needed.
  const dayWithSuffix = `${day}${getDaySuffix(day)}`;

  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  const year = date.getFullYear();

  return { dayWithSuffix, month, year };
}
