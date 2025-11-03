import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export type PostMeta = {
  title: string;
  excerpt: string;
  date: string;
  image?: string;
  isFeatured?: boolean;
  slug: string;
}

export type Post = PostMeta & {
  content: string;
}

