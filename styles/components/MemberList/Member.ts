import Image from 'next/image';

import styled from 'styled-components';

export const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

export const MemberText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  margin-left: 0.75rem;
`;
