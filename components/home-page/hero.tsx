import Image from 'next/image';
import classes from './hero.module.css';

// Ten komponent nie przyjmuje żadnych propsów, więc nie potrzebujemy typu propsów
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.copy}>
        <span className={classes.eyebrow}>Frontend blog and portfolio</span>
        <h1>Hi, I'm Jan. I build thoughtful web interfaces.</h1>
        <p>
          Notes from learning, building and improving frontend projects with
          Next.js, React and TypeScript.
        </p>
      </div>
      <div className={classes.portrait}>
        <div className={classes.image}>
          <Image
            src='/images/site/profile.jpg'
            alt='An image showing Jan'
            width={300}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
}
