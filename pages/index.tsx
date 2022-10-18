import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '../components/PostCard';
import { getAllPosts } from '../lib/api';
import styles from '../styles/Home.module.css';

type PostType = {
  slug: string;
};

const Home: NextPage<{ posts: PostType[] }> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next SSG Blog</title>
        <meta name='description' content='Next SSG Blog' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1>Next SSG Blog</h1>
        {posts.map(({ slug }, index) => (
          <PostCard postTitle={slug} key={`${slug}_${index}`} />
        ))}
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const posts = getAllPosts(['slug']);

  return {
    props: {
      posts,
    },
  };
}

export default Home;
