import type { NextPage } from 'next';
import Head from 'next/head';
import PostCard from '@/components/PostCard';
import PostType from '@/interfaces/post';
import { getAllPosts } from '@/lib/api';
import styled from '@emotion/styled';
import Header from '@/components/Header';
import Image from 'next/image';

const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #fd7e14;
  padding-bottom: 14px;
  border-bottom: 1px solid #f1f3f5;
  margin-top: 40px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainImage = styled(Image)`
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Home: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Next SSG Blog</title>
        <meta name='description' content='Next SSG Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <MainImage src='/main.jpeg' alt='main' width='992' height='400' />
      <Title>최근 게시물</Title>
      <Main>
        {posts.map((post, index) => (
          <PostCard postInfo={post} key={`${post.slug}_${index}`} />
        ))}
      </Main>
    </>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(['slug', 'title', 'date']);

  return {
    props: {
      posts,
    },
  };
}

export default Home;
