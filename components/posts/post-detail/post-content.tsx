import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import classes from './post-content.module.css';
import PostHeader from './post-header';
import type { PostMeta } from '../../../lib/post-util';

export type PostContentProps = {
  post: PostMeta & { content: string };
};

export default function PostContent({ post }: PostContentProps) {
  const imagePath = `/images/posts/${post.slug}/${post.image ?? ''}`;

  // 🔴 WAŻNE: oznaczamy components jako `any`,
  // żeby TS nie próbował nadmiernie dopasowywać typów p/code do definicji z react-markdown
  const components: any = {
    p(props: any) {
      const { node, children } = props;
      const first = node?.children?.[0];

      if (first && first.tagName === 'img') {
        const img = first;
        const src: string = img.properties.src;
        const alt: string | undefined = img.properties.alt;

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${src}`}
              alt={alt || post.title}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{children}</p>;
    },

    code(props: any) {
      const { inline, className, children, ...rest } = props;
      const match = /language-(\w+)/.exec(className || '');

      if (inline) {
        return (
          <code className={className} {...rest}>
            {children}
          </code>
        );
      }

      return (
        <SyntaxHighlighter
          style={atomDark}
          language={match?.[1]}
          PreTag='div'
          {...rest}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </article>
  );
}
