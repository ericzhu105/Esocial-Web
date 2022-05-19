import Image from 'next/image';
import styled from 'styled-components';

export const StyledPost = styled.div`
  max-width: 750px;
  margin: 2rem 0;
  background-color: #fafafa;
  border-radius: 32px;
  box-shadow: 31px 29px 64px -26px #dedede;
`;

export const PostHeader = styled.div`
  padding: 2rem;
  font-family: 'Circular Std', sans-serif;
  display: flex;
  align-items: center;

  h1 {
    font-size: 22px;
  }

  p {
    color: #989898;
    font-size: 17px;
  }
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
`;

export const ProfileInfo = styled.div`
  margin-left: 1rem;
`;

export const PostDescription = styled.div`
  padding: 0 2rem 2rem 2rem;

  p {
    font-family: Poppins, sans-serif;
    font-size: 22px;
  }

  a {
    color: #fa392d;
  }
`;

export const PostImageWrapper = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const PostImage = styled(Image)`
  margin: 0;
  padding: 0;
`;

export const PostBottomBar = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: #fa392d;
    font-family: 'Circular-Std', sans-serif;
  }
`;

export const PostIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledIcon = styled.img`
  height: 32px;
  margin-right: 2rem;

  &:hover {
    cursor: pointer;
  }
`;
