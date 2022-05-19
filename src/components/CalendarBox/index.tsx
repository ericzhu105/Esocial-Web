import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
import {
  Body,
  Button,
  CalendarHeader,
  DateNumber,
  Day,
  DayBox,
  DayContainer,
  DayText,
  Frame,
  PageCalendar,
  StyledCalendarBox,
  StyledLeftButton,
  StyledMonthBox,
} from '@styles/components/CalendarBox';

import MemberList from '../MemberList/index';

export default function CalendarBox() {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_LEAP = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYS_OF_THE_WEEK = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const MONTHS = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const today = new Date();
  const [date, setDate] = useState(today);
  const [day, setDay] = useState(date.getDate());
  const [month, setMonth] = useState(date.getMonth());
  const [year, setYear] = useState(date.getFullYear());
  const [startDay, setStartDay] = useState(getStartDayOfMonth(date));

  function getStartDayOfMonth(date: Date) {
    let start = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    let test = new Date(date.getFullYear(), date.getMonth(), 2).getDay();
    console.log(start, test);
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  }

  function isLeapYear(year: number) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  function getListofDays(month: number) {
    let list = Array(days[month] + (startDay - 1));
    return list;
  }

  // const dayList = Array(days[month] + (startDay - 1)).fill(null)

  const days = isLeapYear(date.getFullYear()) ? DAYS_LEAP : DAYS;

  // {Array(days[month] + (startDay - 1))
  //       .fill(null)
  //       .map((_, index) => {
  //         const d = index - (startDay - 2);
  //         return (
  //           <DateNumber
  //             key={index}
  //             isToday={d === today.getDate()}
  //             isSelected={d === day}
  //           >
  //             {d > 0 ? d : ''}
  //           </DateNumber>
  //         );
  //       })}

  useEffect(() => {
    setDay(date.getDate());
    setMonth(date.getMonth());
    setYear(date.getFullYear());
    setStartDay(getStartDayOfMonth(date));
    getListofDays(month);
  }, [date]);

  return (
    <PageCalendar>
      <StyledCalendarBox>
        <CalendarHeader>
          <StyledMonthBox>
            {MONTHS[month]} {year}
          </StyledMonthBox>
          <Button onClick={() => setDate(new Date(year, month - 1, day))}>
            {'<'}
          </Button>
          <Button onClick={() => setDate(new Date(year, month + 1, day))}>
            {'>'}
          </Button>
        </CalendarHeader>
        <Body>
          <DayBox>
            {DAYS_OF_THE_WEEK.map((d) => (
              <DayText key={d}>
                <strong>{d}</strong>
              </DayText>
            ))}
          </DayBox>
          {Array(days[month] + (startDay - 1))
            .fill(null)
            .map((_, index) => {
              const d = index - (startDay - 2);
              return (
                <Day
                  key={index}
                  isToday={d === today.getDate()}
                  isSelected={d === day}
                  isSunday={d === 0}
                  onClick={() => setDate(new Date(year, month, d))}
                >
                  {d > 0 ? d : ''}
                </Day>
              );
            })}
        </Body>
      </StyledCalendarBox>
      <MemberList memberList={[]} />
    </PageCalendar>
  );
}
