import type { NextPage } from 'next';
import { getAllPosts } from '@/services/api';
import PostsView from '@/components/view/PostsView';
import { unstable_serialize } from 'swr';

const Home: NextPage = () => {
  return <PostsView />;
};

export default Home;

export async function getStaticProps() {
  const posts = getAllPosts(['slug', 'title', 'date']);

  return {
    props: {
      fallback: {
        [unstable_serialize(['posts'])]: posts,
      },
    },
  };
}
