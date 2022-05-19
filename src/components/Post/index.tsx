import { useState } from 'react';
import Link from 'next/link';
import { formatDistance } from 'date-fns';
import {
  ProfileImage,
  PostBottomBar,
  PostDescription,
  PostHeader,
  PostIcons,
  PostImage,
  PostImageWrapper,
  ProfileInfo,
  StyledIcon,
  StyledPost,
} from '@styles/components/Post';

type PostProps = {
  commentAmount: number;
  date: Date;
  description: string;
  name: string;
  postId: string;
  postImageUrl: string;
  profileUrl: string;
};

export default function Post({
  commentAmount,
  date,
  description,
  name,
  postId,
  postImageUrl,
  profileUrl,
}: PostProps) {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    <StyledPost>
      <PostHeader>
        <ProfileImage
          src={profileUrl}
          alt="Profile image"
          width={65}
          height={65}
        />
        <ProfileInfo>
          <h1>{name}</h1>
          <p>{formatDistance(date, new Date(), { addSuffix: true })}</p>
        </ProfileInfo>
      </PostHeader>

      <PostDescription>
        {description.length > 100 ? (
          <>
            <p>
              {description.slice(0, 100)}...
              <Link href={`/post/${postId}`}> more</Link>
            </p>
          </>
        ) : (
          <p>{description}</p>
        )}
      </PostDescription>

      <PostImageWrapper>
        <PostImage
          src={postImageUrl}
          alt="Post image"
          width={1000}
          height={1000}
          objectFit="cover"
        />
      </PostImageWrapper>
      <PostBottomBar>
        <PostIcons>
          <StyledIcon
            src={liked ? '/Heart2.svg' : 'Heart2-grey.svg'}
            alt="Heart"
            onClick={toggleLiked}
          />
          <Link href={`/post/${postId}`}>
            <StyledIcon src="/comment.svg" alt="Comment" />
          </Link>
        </PostIcons>
        {commentAmount === 0 ? (
          <>
            {commentAmount > 1 ? (
              <p>{commentAmount} comments</p>
            ) : (
              <p>{commentAmount} comment</p>
            )}
          </>
        ) : (
          <p>No comments</p>
        )}
      </PostBottomBar>
    </StyledPost>
  );
}
