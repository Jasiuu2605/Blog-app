import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import classes from './post-content.module.css';
import PostHeader from './post-header';

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const components = {
    p({ node, children }) {
      // <p><img .../></p> => wyrenderuj responsywnie obraz
      const first = node?.children?.[0];
      if (first && first.tagName === 'img') {
        const img = first;
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${img.properties.src}`}
              alt={img.properties.alt || post.title}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{children}</p>;
    },

    // Najważniejsze: rozróżnij inline vs block
    code({ inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '');

      if (inline) {
        // Inline code – zwykły <code>, żadnego <pre>
        return (
          <code className={className} {...props}>
            {children}
          </code>
        );
      }

      // Blok kodu – syntax highlighter
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={match?.[1]}
          PreTag='div'
          {...props}
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

export default PostContent;
