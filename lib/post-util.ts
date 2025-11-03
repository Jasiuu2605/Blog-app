import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type PostMeta = {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  isFeatured?: boolean;
  slug: string;
};

export type Post = PostMeta & {
  content: string;
};

const postsDirectory = path.join(process.cwd(), 'posts');

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
    slug: postSlug,
  };

  return {
    ...meta,
    content,
  };
}
