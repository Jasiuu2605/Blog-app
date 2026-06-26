import classes from './all-posts.module.css';
import PostsGrid, { type PostsGridProps } from './posts-grid';

export type AllPostsProps = {
  posts: PostsGridProps['posts'];
};

export default function AllPosts({ posts }: AllPostsProps) {
  const featuredPosts = posts.filter((post) => post.isFeatured).length;
  const latestPostYear = new Date(posts[0]?.date ?? '').getFullYear();

  return (
    <section className={classes.posts}>
      <header className={classes.header}>
        <div>
          <span className={classes.eyebrow}>Writing archive</span>
          <h1>All frontend notes</h1>
          <p>
            A growing collection of posts about building, refactoring and
            improving small web applications with Next.js, React and TypeScript.
          </p>
        </div>

        <dl className={classes.stats}>
          <div>
            <dt>Posts</dt>
            <dd>{posts.length}</dd>
          </div>
          <div>
            <dt>Featured</dt>
            <dd>{featuredPosts}</dd>
          </div>
          <div>
            <dt>Latest</dt>
            <dd>{latestPostYear}</dd>
          </div>
        </dl>
      </header>

      <PostsGrid posts={posts} />
    </section>
  );
}
