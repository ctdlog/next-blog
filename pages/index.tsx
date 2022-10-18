import type { NextPage } from 'next';
import Head from 'next/head';
import PostCard from '../components/PostCard';
import PostType from '../interfaces/post';
import { getAllPosts } from '../lib/api';
import styles from '../styles/Home.module.css';

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
        {posts.map((post, index) => (
          <PostCard postInfo={post} key={`${post.slug}_${index}`} />
        ))}
      </main>
    </div>
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
