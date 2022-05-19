import React from 'react';
import Image from 'next/image';
import {
  Note,
  NoteContainer,
  NoteText,
} from '@styles/components/Notifications';

export default function Notifications() {
  return (
    <NoteContainer>
      <Note isHoliday={true} isEvent={false} isNote={false}>
        <NoteText>Saint Marcus Day</NoteText>
      </Note>
      <Note isHoliday={false} isEvent={true} isNote={false}>
        <NoteText>School March</NoteText>
      </Note>
      <Note isHoliday={false} isEvent={true} isNote={false}>
        <NoteText>Parent Meeting</NoteText>
        <NoteText>
          <Image src="/TimeCircle.png" alt="clock" width={20} height={20} />
          09:00 am to 10:00 am
        </NoteText>
      </Note>
      <Note isHoliday={false} isEvent={false} isNote={true}>
        <NoteText>Lorem ipsum dolor sit</NoteText>
        <NoteText>
          <Image src="/TimeCircle.png" alt="clock" width={20} height={20} />
          09:00 am to 10:00 am
        </NoteText>
      </Note>
    </NoteContainer>
  );
}
