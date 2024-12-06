import { DayButtonProps } from "./DayButtonProps";

export const DayButton = (props: DayButtonProps) => {
  const { day } = props;
  return <button type="submit">{day}</button>;
};
