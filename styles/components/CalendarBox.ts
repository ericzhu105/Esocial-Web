import Image from 'next/image';

import styled, { css } from 'styled-components';

interface CalendarDayProps {
  isToday: boolean;
  isSelected: boolean;
  isSunday: boolean;
}
export const StyledCalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 621px;
  height: 640px;
  background: #f7f7f7;
  border-radius: 32px;
  box-shadow: 40px 40px 44px -49px rgba(215, 215, 215, 0.9);
  padding-left: 35.56px;
  padding-top: 35px;
`;

export const Frame = styled.div`
  width: 400px;
  border: 1px solid lightgrey;
  box-shadow: 2px 2px 2px #eee;
`;

export const CalendarHeader = styled.div`
  font-weight: 450;
  font-size: 28.1408px;
  padding: 10px 10px 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: #f5f6fa;
`;

export const Button = styled.div`
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledMonthBox = styled.div`
  width: 151px;
  height: 36px;
  left: 1.56px;
  top: 0px;

  font-family: Circular Std;
  font-style: normal;
  font-weight: 450;
  font-size: 28.1408px;
  line-height: 36px;
  /* identical to box height */

  text-transform: uppercase;
  font-feature-settings: 'tnum' on, 'lnum' on;

  color: #000000;
`;

export const StyledLeftButton = styled(Image)`
  width: 22.53px;
  height: 13.48px;
  right: -16.21px;
  top: 0.85px;

  background: #000000;
  transform: rotate(90deg);
`;

export const DayBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 541px;
  height: 36px;
`;

export const DayText = styled.div`
  position: static;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;

  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18.7606px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-align: center;
  font-feature-settings: 'tnum' on, 'lnum' on;

  color: #000000;
`;

export const DateNumber = styled.div`
  font-size: 18.7606px;
  line-height: 23px;
  border-radius: 50%;
  background: gray;
  width: 70px;
  height: 70px;
  align-items: center;
  text-align: center;
  justify-content: center;
`;
export const DayContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Day = styled.div<CalendarDayProps>`
  width: 14.2%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 18.7606px;
  line-height: 23px;

  ${(props) =>
    props.isToday &&
    css`
      border: 1px solid red;
      color: red;
      background: rgba(255, 62, 62, 0.2);
    `}

  ${(props) =>
    props.isSelected &&
    css`
      background-color: red;
      color: white;
    `}
    
    ${(props) =>
    props.isSunday &&
    css`
      border: 1px solid red;
    `}
`;

export const PageCalendar = styled.div`
  width: 75%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
