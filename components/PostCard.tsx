import PostType from '@/interfaces/post';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const PostCard = ({ postInfo }: { postInfo: PostType }) => {
  const { slug, title, date } = postInfo;
  return (
    <Link href={`/posts/${slug}`}>
      <div className={styles.card}>
        <h1>{title}</h1>
        <h3>{date}</h3>
      </div>
    </Link>
  );
};

export default PostCard;
