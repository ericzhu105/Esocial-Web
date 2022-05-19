import Image from 'next/image';
import styled from 'styled-components';

export const SmallResizableImageContainer = styled.div`
    width: 5vh;
    height: 5vh;
    display: flex;
`;

export const ProfileImage = styled(Image)`
    border-radius: 100%;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 15px;
`;

export const MessageInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const MessageContents = styled.div`
    flex: 1;
    margin-left: 10px;
`;

export const UserName = styled.strong`
    font-size: 1.7vh;
    line-height: 1.7vh;
`;

export const CommentText = styled.p`
    font-size: 1.7vh;
    line-height: 2.2vh;
    margin-top: 4px;
`;

export const Reply = styled.p`
    color: #000000;
    opacity: 0.5;
    font-size: 1.5vh;
    line-height: 1.5vh;
    font-weight: bold;
    margin-top: 5px;
`;

export const Time = styled.p`
    color: #000000;
    opacity: 0.5;
    font-size: 1.2vh;
    line-height: 1.2vh;
    margin-left: 5px;
`;
