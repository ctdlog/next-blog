import type Author from './author';

type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  content: string;
};

export default PostType;
