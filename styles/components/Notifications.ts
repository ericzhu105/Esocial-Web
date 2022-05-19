import styled, { css } from 'styled-components';

interface EventProps {
  isEvent: boolean;
  isNote: boolean;
  isHoliday: boolean;
}

export const NoteContainer = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Note = styled.div<EventProps>`
  width: 621px;
  height: 76.35px;
  display: flex;
  flex-direction: column;
  background: #ff3e3e;
  border-radius: 18px;
  text-align: left;
  padding-left: 35px;
  padding-top: 24px;

  ${(props) =>
    props.isEvent &&
    css`
      background: #2361ff;
    `}

  ${(props) =>
    props.isHoliday &&
    css`
      background: #ff3e3e;
    `}

    ${(props) =>
    props.isNote &&
    css`
      background: #00db72;
    `}
`;

export const NoteText = styled.div`
  width: 50%;
  height: 28px;

  font-family: Circular Std;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;

  display: flex;
  align-items: center;
  letter-spacing: -1px;
  font-feature-settings: 'tnum' on, 'lnum' on;

  color: #ffffff;
  padding: 15px;
`;
