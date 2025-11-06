import PostsGrid, { type PostsGridProps } from 'components/posts/posts-grid';

import classes from './featured-posts.module.css';

export type FeaturedPostsProps = {
  posts: PostsGridProps['posts'];
};

function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
