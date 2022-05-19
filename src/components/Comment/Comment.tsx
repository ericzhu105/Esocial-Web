import { Container, SmallResizableImageContainer, ProfileImage, MessageContents, MessageInfo, UserName, Time, CommentText, Reply } from '@styles/components/Comment';

export default function Comment() {
    return (
        <Container>
            <SmallResizableImageContainer>
                <ProfileImage src="/Dancing.jpg" alt="Dancing People" width={87} height={87} />
            </SmallResizableImageContainer>
            <MessageContents>
                <MessageInfo>
                    <UserName>Bohdan Hrotovytskyy ·</UserName>
                    <Time>2m</Time>
                </MessageInfo>
                <CommentText>Awesome Trip, let's do it again dahsf iahsf oiahs dfoiha soipfh aopishdf oihsa iopfha isohdf apih disfh aopih oais </CommentText>
                <Reply>3 Replies</Reply>
            </MessageContents>
        </Container>
    )
}