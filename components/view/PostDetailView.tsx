import type { PostType } from '@/interfaces/post';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import useSWR from 'swr';

const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
  margin-top: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #dee2e6;
`;

const Content = styled.p`
  margin-top: 32px;
`;

const PostDetailView = () => {
  const { slug } = useRouter().query;
  const { data: post } = useSWR<PostType>(['posts', slug as string]);
  return (
    <>
      <Title>{post?.title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: post?.content ?? '' }} />
    </>
  );
};

export default PostDetailView;
