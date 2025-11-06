import PostItem, { type PostItemProps } from './post-item';

import classes from './posts-grid.module.css';

export type PostsGridProps = {
  posts: PostItemProps['post'][];
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
