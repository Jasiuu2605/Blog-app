import { useMemo, useState } from 'react';

import classes from './all-posts.module.css';
import PostsGrid, { type PostsGridProps } from './posts-grid';

export type AllPostsProps = {
  posts: PostsGridProps['posts'];
};

export default function AllPosts({ posts }: AllPostsProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const featuredPosts = posts.filter((post) => post.isFeatured).length;
  const latestPostYear = new Date(posts[0]?.date ?? '').getFullYear();

  const filteredPosts = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    if (!normalizedSearchTerm) {
      return posts;
    }

    return posts.filter((post) => {
      const searchableContent = `${post.title} ${post.excerpt}`.toLowerCase();

      return searchableContent.includes(normalizedSearchTerm);
    });
  }, [posts, searchTerm]);

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

      <div className={classes.topics}>
        <span>Browse by topic</span>
        <ul>
          <li>Next.js</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>CSS Modules</li>
          <li>Performance</li>
        </ul>
      </div>

      <div className={classes.search}>
        <label htmlFor='post-search'>Search posts</label>
        <input
          type='search'
          id='post-search'
          placeholder='Search by title or excerpt...'
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <p>
          Showing {filteredPosts.length} of {posts.length} posts
        </p>
      </div>

      {filteredPosts.length > 0 ? (
        <PostsGrid posts={filteredPosts} />
      ) : (
        <p className={classes.empty}>
          No posts found. Try a different search term.
        </p>
      )}
    </section>
  );
}
