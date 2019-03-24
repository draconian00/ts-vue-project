export interface IDayHeader {
  day: string;
  color: string;
}

export interface IDay {
  date: Date;
  isWeekend?: boolean;
  isLastMonth?: boolean;
  isNextMonth?: boolean;
  memorialDay?: string;
  money?: string;
}

export interface IWeek {
  days: IDay[];
}

export interface IMonth {
  weeks: IWeek[];
}
