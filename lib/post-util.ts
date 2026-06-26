import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type PostMeta = {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  isFeatured?: boolean;
  readingTime: number;
  slug: string;
};

export type Post = PostMeta & {
  content: string;
};

const postsDirectory = path.join(process.cwd(), 'posts');
const wordsPerMinute = 200;

function calculateReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).filter(Boolean).length;

  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

export function getPostsFiles(): string[] {
  return fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md'));
}

export function getPostData(postIdentifier: string): Post {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data, content } = matter(fileContent);
  const raw = data as Record<string, unknown>;

  const meta: PostMeta = {
    title: String(raw.title),
    excerpt: String(raw.excerpt),
    date: String(raw.date),
    ...(raw.image ? { image: String(raw.image) } : {}), // tylko jeśli istnieje
    ...(raw.isFeatured !== undefined ? { isFeatured: !!raw.isFeatured } : {}),
    readingTime: calculateReadingTime(content),
    slug: postSlug,
  };

  return {
    ...meta,
    content,
  };
}

export function getAllPosts(): Post[] {
  const postFiles = getPostsFiles();
  const allPosts = postFiles.map(getPostData);

  return allPosts.sort((a, b) => {
    const ad = new Date(a.date).getTime();
    const bd = new Date(b.date).getTime();
    return bd - ad;
  });
}

export function getFeaturedPosts(): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.isFeatured);
}
