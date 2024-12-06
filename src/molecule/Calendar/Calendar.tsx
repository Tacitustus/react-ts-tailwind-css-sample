import { MonthCalendar } from "../MonthCalendar/MonthCalendar";

export const Calendar = () => {
  return (
    <>
      <div>
        1<MonthCalendar year={2024} month={1} />
      </div>
      <div>
        2<MonthCalendar year={2024} month={2} />
      </div>
      <div>
        3<MonthCalendar year={2024} month={3} />
      </div>
      <div>
        4<MonthCalendar year={2024} month={4} />
      </div>
      <div>
        5<MonthCalendar year={2024} month={5} />
      </div>
      <div>
        6<MonthCalendar year={2024} month={6} />
      </div>
      <div>
        7<MonthCalendar year={2024} month={7} />
      </div>
      <div>
        8<MonthCalendar year={2024} month={8} />
      </div>
      <div>
        9<MonthCalendar year={2024} month={9} />
      </div>
      <div>
        10
        <MonthCalendar year={2024} month={10} />
      </div>
      <div>
        11
        <MonthCalendar year={2024} month={11} />
      </div>
      <div>
        12
        <MonthCalendar year={2024} month={12} />
      </div>
    </>
  );
};
