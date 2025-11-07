import classes from './all-posts.module.css';
import PostsGrid, { type PostsGridProps } from './posts-grid';

export type AllPostsProps = {
  posts: PostsGridProps['posts'];
};

export default function AllPosts({ posts }: AllPostsProps) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
