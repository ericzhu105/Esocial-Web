import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  margin: 4vh 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #f7f7f7;
  border-radius: 32px;
  padding: 2vh;
`;

export const PostImageContainer = styled.div`
  height: 80vh;
  width: 50vw;
  border-radius: 22px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  position: relative;
`;

export const BackButton = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 10;
`;

export const PostHeader = styled.div`
  margin-top: 2vh;
  display: flex;
  flex-direction: row;
  margin-bottom: 2vh;
  height: 10vh;
`;

export const ProfileImage = styled(Image)`
  border-radius: 100%;
`;

export const ResizableImageContainer = styled.div`
  width: 10vh;
  height: 10vh;
  display: flex;
  align-items: center;
`;

export const SmallResizableImageContainer = styled.div`
  width: 5vh;
  height: 5vh;
  display: flex;
  align-items: center;
`;

export const UserName = styled.h1`
  font-size: 3vh;
`;

export const PostInfo = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const Time = styled.p`
  color: #989898;
  font-size: 2vh;
`;

export const Caption = styled.p`
  font-size: 3vh;
`;

export const Content = styled.div`
  margin-right: 3vw;
  margin-left: 3vw;
  width: 30vw;
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.hr`
  margin-top: 3vh;
  margin-bottom: 3vh;
  border-top: 0.7vh solid #ebebeb;
  border-radius: 5px;
`;

export const NumLikes = styled.p`
  color: #ff3e3e;
  font-size: 3vh;
`;

export const Comments = styled.div`
  height: 41vh;
  margin-bottom: 2vh;
  overflow: scroll;
`;

export const InputArea = styled.div`
  width: 100%;
  height: 6vh;
  background-color: white;
  align-self: center;
  margin-bottom: 0.8vh;
  border-radius: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5px;
  padding-right: 5px;
`;

export const MyProfileImage = styled(Image)`
  border-radius: 100%;
`;

export const MessageInput = styled.textarea`
  flex: 1;
  margin-left: 15px;
  outline: none;
  resize: none;
  height: 2.4vh;
  line-height: 1;
  font-size: 2.4vh;
`;
