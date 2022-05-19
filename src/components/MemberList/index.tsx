import React, { useState } from 'react';
import {
  SearchBar,
  SearchIcon,
  StyledInput,
  StyledMemberList,
} from '@styles/components/MemberList/index';
import Member from './Member';

import mockData from '@data/mockMemberData';

export type MemberType = {
  name: string;
  role: string;
  profileUrl: string;
};

type MemberListProps = {
  memberList: MemberType[];
};

// Temporarily use mock data until we can source members from an API
export default function MemberList({ memberList }: MemberListProps) {
  memberList = mockData;
  const initialSchool = memberList.filter(
    (element) => element.role === 'school'
  );
  const initialStaff = memberList.filter((element) => element.role === 'staff');
  const initialStudents = memberList.filter(
    (element) => element.role === 'student'
  );

  const [searchQuery, setSearchQuery] = useState('');

  // Really simple search until we flesh out the data model
  // for students/staff/schools. Could also be backend-powered search if needed
  const filterBySearch = (members: MemberType[]): MemberType[] => {
    const simpleSearchQuery = searchQuery.toLowerCase();
    return members.filter((member) => {
      const memberName = member.name.toLowerCase();
      return memberName.includes(simpleSearchQuery);
    });
  };

  return (
    <StyledMemberList>
      <SearchBar>
        <SearchIcon src="./search.svg" />
        <StyledInput
          type="text"
          value={searchQuery}
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchBar>
      <div className="my-8">
        {filterBySearch(initialSchool).length === 0 ? null : (
          <h6 className="my-0">School</h6>
        )}
        {filterBySearch(initialSchool).map((school) => (
          <Member
            name={school.name}
            profileUrl={school.profileUrl}
            key={school.name}
          />
        ))}
      </div>
      <div className="my-8">
        {filterBySearch(initialStaff).length === 0 ? null : <h6>Staffs</h6>}
        {filterBySearch(initialStaff).map((staff) => (
          <Member
            name={staff.name}
            profileUrl={staff.profileUrl}
            key={staff.name}
          />
        ))}
      </div>
      <div className="my-8">
        {filterBySearch(initialStudents).length === 0 ? null : (
          <h6>Students</h6>
        )}
        {filterBySearch(initialStudents).map((student) => (
          <Member
            name={student.name}
            profileUrl={student.profileUrl}
            key={student.name}
          />
        ))}
      </div>
    </StyledMemberList>
  );
}

// Pull members list data from an actual data source
