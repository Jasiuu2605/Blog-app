import { useMemo, useState } from 'react';

import classes from './all-posts.module.css';
import PostsGrid, { type PostsGridProps } from './posts-grid';

export type AllPostsProps = {
  posts: PostsGridProps['posts'];
};

export default function AllPosts({ posts }: AllPostsProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('All');

  const featuredPosts = posts.filter((post) => post.isFeatured).length;
  const latestPostYear = new Date(posts[0]?.date ?? '').getFullYear();

  const hasActiveFilters = searchTerm.trim() !== '' || selectedTopic !== 'All';

  function clearFiltersHandler() {
    setSearchTerm('');
    setSelectedTopic('All');
  }

  const topics = useMemo(() => {
    const uniqueTopics = new Set(posts.flatMap((post) => post.tags));

    return ['All', ...Array.from(uniqueTopics).sort()];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();

    return posts.filter((post) => {
      const matchesSearch =
        !normalizedSearchTerm ||
        `${post.title} ${post.excerpt}`
          .toLowerCase()
          .includes(normalizedSearchTerm);

      const matchesTopic =
        selectedTopic === 'All' || post.tags.includes(selectedTopic);

      return matchesSearch && matchesTopic;
    });
  }, [posts, searchTerm, selectedTopic]);

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
          {topics.map((topic) => (
            <li key={topic}>
              <button
                type='button'
                className={topic === selectedTopic ? classes.activeTopic : ''}
                onClick={() => setSelectedTopic(topic)}
              >
                {topic}
              </button>
            </li>
          ))}
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
        <div className={classes.searchMeta}>
          <p>
            Showing {filteredPosts.length} of {posts.length} posts
          </p>

          {hasActiveFilters && (
            <button type='button' onClick={clearFiltersHandler}>
              Clear filters
            </button>
          )}
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <PostsGrid posts={filteredPosts} />
      ) : (
        <p className={classes.empty}>
          No posts found. Try a different search term or topic.
        </p>
      )}
    </section>
  );
}
