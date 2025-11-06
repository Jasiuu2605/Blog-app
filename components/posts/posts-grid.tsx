import PostItem, { type PostItemProps } from './post-item';
import { PostMeta } from 'lib/post-util';

import classes from './posts-grid.module.css';

export type PostsGridProps = {
  posts: PostMeta[];
};

function PostsGrid({ posts }: PostsGridProps) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsGrid;
