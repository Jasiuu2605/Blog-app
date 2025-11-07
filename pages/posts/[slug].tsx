import { Fragment } from 'react';
import Head from 'next/head';
import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/post-util';
import type {
  GetStaticProps,
  InferGetStaticPropsType,
  GetStaticPaths,
} from 'next';
import type { PostMeta } from '../../lib/post-util';

type PostDetailPageProps = {
  post: PostMeta & { content: string };
};

function PostDetailPage({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name='description' content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </Fragment>
  );
}

export default PostDetailPage;

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context
) => {
  const { params } = context;
  const slug = params?.slug as string;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postFileNames = getPostsFiles();

  const slugs = postFileNames.map((fileName) => fileName.replace(/\.md$/, ''));

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false,
  };
};
