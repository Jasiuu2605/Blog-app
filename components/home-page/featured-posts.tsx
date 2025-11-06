import PostsGrid from '../posts/posts-grid';
import classes from './featured-posts.module.css';
import type { PostMeta } from '../../lib/post-util';

export type FeaturedPostsProps = { posts: PostMeta[] };

export default function FeaturedPosts({ posts }: FeaturedPostsProps) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
