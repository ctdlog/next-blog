import Head from 'next/head';
import { useRouter } from 'next/router';
import PostType from '../../interfaces/post';
import { getAllPosts, getPostBySlug } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: 22px;
  font-weight: 500;
`;

type Props = {
  post: PostType;
};

const Post = ({ post }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <div>Error</div>;
  }

  return (
    <>
      <Head>
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css'
          as='script'
        />
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@0.0.1/themes/prism-coy.css'
          as='script'
        />
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css'
          as='script'
        />
        <link
          rel='preload'
          href='https://unpkg.com/prismjs@0.0.1/themes/prism-funky.css'
          as='script'
        />
        <link
          href={`https://unpkg.com/prismjs@0.0.1/themes/prism-tomorrow.css`}
          rel='stylesheet'
        />
      </Head>
      <Title>{post.title}</Title>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
};

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
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
      post: {
        ...post,
        content,
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
