import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  Content,
  PostHeader,
  ProfileImage,
  BackButton,
  Caption,
  Comments,
  Container,
  Divider,
  InputArea,
  MessageInput,
  MyProfileImage,
  NumLikes,
  PostImageContainer,
  PostInfo,
  ResizableImageContainer,
  SmallResizableImageContainer,
  Time,
  UserName,
} from '@styles/pages/postId';

import Comment from '../../src/components/Comment/Comment';
import Template from '../../src/components/Template/index';
import CurrentPage from '../../src/components/Sidebar/CurrentPage';

// TODO: Will need to dynamically popluate content using data from backend
export default function ExpandedPost() {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <>
      <Head>
        <title>Expanded Post</title>
      </Head>

      <Template CurrentPage={CurrentPage.HOME}>
        <Container>
          <PostImageContainer>
            <BackButton>
              <Link href="/">
                <div>
                  <Image src="/Back.svg" alt="Back" width={40} height={40} />
                </div>
              </Link>
            </BackButton>
            <Image src="/Dancing.jpg" layout="fill" objectFit="cover" />
          </PostImageContainer>
          <Content>
            <PostHeader>
              <ResizableImageContainer>
                <ProfileImage
                  src="/Dancing.jpg"
                  alt="Dancing People"
                  width={87}
                  height={87}
                />
              </ResizableImageContainer>
              <PostInfo>
                <UserName>Mrs. Sancho</UserName>
                <Time>1 minute ago</Time>
              </PostInfo>
              <ResizableImageContainer>
                <Image src="/Heart.svg" alt="like" width={42} height={42} />
                <NumLikes>74</NumLikes>
              </ResizableImageContainer>
            </PostHeader>
            <Caption>
              The Grade 9s went on a trip to see the great Hungarians dance
              their native folktail dance last night
            </Caption>
            <Divider />
            <Comments>
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
              <Comment />
            </Comments>
            <InputArea>
              <SmallResizableImageContainer>
                <MyProfileImage
                  src="/Dancing.jpg"
                  alt="Dancing People"
                  width={40}
                  height={40}
                />
              </SmallResizableImageContainer>
              <MessageInput />
              <SmallResizableImageContainer>
                <MyProfileImage
                  src="/Send.svg"
                  alt="Send"
                  width={40}
                  height={40}
                />
              </SmallResizableImageContainer>
            </InputArea>
          </Content>
        </Container>
      </Template>
    </>
  );
}
