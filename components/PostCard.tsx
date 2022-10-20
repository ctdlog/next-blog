import type { PostType } from '@/interfaces/post';
import Link from 'next/link';
import styled from '@emotion/styled';

const PostCardBlock = styled.div`
  width: 500px;
  text-align: left;
  color: inherit;
  transition: color 0.15s ease, border-color 0.15s ease;
  margin-bottom: 28px;
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: #0070f3;
    border-color: #0070f3;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Date = styled.div`
  font-size: 17px;
  color: #868e96;
`;

const PostCard = ({ postInfo }: { postInfo: PostType }) => {
  const { slug, title, date } = postInfo;
  return (
    <Link href={`/posts/${slug}`}>
      <PostCardBlock>
        <Title>{title}</Title>
        <Date>{date}</Date>
      </PostCardBlock>
    </Link>
  );
};

export default PostCard;
