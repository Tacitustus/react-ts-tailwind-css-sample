import { DayButtonProps } from "./DayButtonProps";

export const DayButton = (props: DayButtonProps) => {
  const { day, isShowed } = props;
  return <button type="submit">{isShowed ? day : ""}</button>;
};
