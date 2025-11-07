import { Fragment } from 'react';
import Head from 'next/head';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/post-util';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import type { PostMeta } from '../../lib/post-util';

type AllPostsPageProps = { posts: PostMeta[] };

function AllPostsPage({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name='description'
          content='A list of all programming-related tutorials and posts!'
        />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export default AllPostsPage;

export const getStaticProps: GetStaticProps<AllPostsPageProps> = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
};
