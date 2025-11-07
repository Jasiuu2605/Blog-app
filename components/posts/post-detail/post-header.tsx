import classes from './post-header.module.css';
import Image from 'next/image';

export type PostHeaderProps = {
  title: string;
  image: string;
};

export default function PostHeader({ title, image }: PostHeaderProps) {
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} priority />
    </header>
  );
}
