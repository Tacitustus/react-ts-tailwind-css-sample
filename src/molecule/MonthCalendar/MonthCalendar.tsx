import { DayButton } from "../../atom/DayButton/DayButton";
import { MonthCalendarProps } from "./MonthCalendarProps";

const getLastDay = (
  isLeapYear: boolean,
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
) => {
  switch (month) {
    case 1:
      return 31;
    case 2:
      return isLeapYear ? 29 : 28;
    case 3:
      return 31;
    case 4:
      return 30;
    case 5:
      return 31;
    case 6:
      return 30;
    case 7:
      return 31;
    case 8:
      return 31;
    case 9:
      return 30;
    case 10:
      return 31;
    case 11:
      return 30;
    case 12:
      return 31;
  }
};

const GetDayOfWeek = (
  year: number,
  month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12,
  day: number
) => {
  const date = new Date(year, month - 1, day);

  return date.getDay();
};

export const MonthCalendar = (props: MonthCalendarProps) => {
  const { year, month } = props;

  const isLeapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

  const lastDay = getLastDay(isLeapYear, month);

  return (
    <>
      {Array.from(Array(lastDay).keys()).map((value) => (
        <DayButton day={(value + 1).toString()} />
      ))}
    </>
  );
};
