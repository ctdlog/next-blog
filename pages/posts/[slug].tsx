import { getAllPosts, getPostBySlug } from '@/services/api';
import markdownToHtml from '@/services/markdownToHtml';
import PostDetailView from '@/components/view/PostDetailView';
import { GetStaticPropsContext } from 'next';
import { unstable_serialize } from 'swr';

const Post = () => {
  // const router = useRouter();
  // // if (!router.isFallback && !post?.slug) {
  // //   return <div>Error</div>;
  // //
  return <PostDetailView />;
};

// getStaticPaths에서 context를 Return 해줌.
// https://nextjs.org/docs/api-reference/data-fetching/get-static-props
export async function getStaticProps(context: GetStaticPropsContext) {
  const { slug } = context.params || {};

  if (typeof slug !== 'string') {
    return {
      props: {},
    };
  }

  const post = getPostBySlug(slug, [
    'title',
    'slug',
    'description',
    'date',
    'lastmod',
    'weight',
    'content',
    'fileName',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      fallback: {
        [unstable_serialize(['posts', slug])]: {
          ...post,
          content,
        },
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}

export default Post;
