import Link from 'next/link';
import styles from '../styles/Home.module.css';

const PostCard = ({ postTitle }: { postTitle: string }) => {
  return (
    <Link href={`/posts/${postTitle}`}>
      <div className={styles.card}>{postTitle}</div>
    </Link>
  );
};

export default PostCard;
