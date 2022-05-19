import Head from 'next/head';

import { Content, MemberListContainer, PostContent } from '@styles/pages/posts';

import Banner from '../src/components/Banner';
import CurrentPage from '../src/components/Sidebar/CurrentPage';
import MemberList from '../src/components/MemberList';
import Post from '../src/components/Post';
import Template from '../src/components/Template/index';

// Temporarily using images added to /public until we have a image API
export default function Posts() {
  return (
    <div>
      <Head>
        <title>School posts</title>
      </Head>

      <Template CurrentPage={CurrentPage.HOME}>
        <Banner
          title="Bishop Allen High School"
          description="671 members"
          backgroundUrl="/school.jpg"
          profileUrl="/profile.jpg"
        />
        <Content>
          <PostContent>
            <Post
              commentAmount={10}
              date={new Date('May 26, 2021 16:24:00')}
              description="The Grade 9s went on a trip to see the great hungerians dance their native folktail dance last night"
              name="Mrs. Sancho"
              postId="dancing"
              postImageUrl="/Dancing.jpg"
              profileUrl="/Dancing.jpg"
            />
            <Post
              commentAmount={10}
              date={new Date('May 26, 2021 16:24:00')}
              description="The Grade 9s went on a trip to see the great hungerians dance their native folktail dance last night. It was one of the best experiences that they've ever had their entire lives, and we hope to see more of this in the future!"
              name="Mrs. Sancho"
              postId="dancing"
              postImageUrl="/Dancing.jpg"
              profileUrl="/Dancing.jpg"
            />
          </PostContent>
          <MemberListContainer>
            <MemberList memberList={[]} />
          </MemberListContainer>
        </Content>
      </Template>
    </div>
  );
}
