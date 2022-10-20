import type { PostType } from '@/interfaces/post';
import styled from '@emotion/styled';
import Image from 'next/image';
import useSWR from 'swr';
import Header from '@/components/Header';
import PostCard from '@/components/PostCard';

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.titleColor};
  padding-bottom: 14px;
  border-bottom: ${({ theme }) => `1px solid ${theme.borderBottomColor}`};
  margin-top: 40px;
  margin-bottom: 24px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainImage = styled(Image)`
  border-radius: 4px;
  margin-bottom: 20px;
`;

const PostsView = () => {
  const { data: posts } = useSWR<PostType[]>(['posts']);

  return (
    <>
      <Header />
      <MainImage src='/main.jpeg' alt='main' width='992' height='400' />
      <Title>최근 게시물</Title>
      <Main>
        {posts?.map((post, index) => (
          <PostCard postInfo={post} key={`${post.slug}_${index}`} />
        ))}
      </Main>
    </>
  );
};

export default PostsView;
