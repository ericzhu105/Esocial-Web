import React from 'react';
import { ProfileImage, MemberText } from '@styles/components/MemberList/Member';

type MemberProps = {
  name: string;
  profileUrl: string;
};

export default function Member({ name, profileUrl }: MemberProps) {
  return (
    <div className="mb-4 flex flex-row items-center">
      <ProfileImage
        src={profileUrl}
        alt="Profile picture for school"
        width={35}
        height={35}
      />
      <MemberText>{name}</MemberText>
    </div>
  );
}
