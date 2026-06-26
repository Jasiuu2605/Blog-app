import Head from 'next/head';
import { Fragment } from 'react';
import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';
import { getFeaturedPosts } from '../lib/post-util';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { PostMeta } from '../lib/post-util';
import Topics from '../components/home-page/topics';

type HomePageProps = { posts: PostMeta[] };

export default function HomePage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Head>
        <title>Welcome to my blog</title>
        <meta name='description' content='I post about web development' />
      </Head>
      <Hero />
      <Topics />
      <FeaturedPosts posts={posts} />{' '}
    </Fragment>
  );
}

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const featuredPosts = getFeaturedPosts(); // PostMeta[]
  return { props: { posts: featuredPosts } };
};
