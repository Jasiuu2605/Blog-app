import Image from 'next/image';
import classes from './hero.module.css';

// Ten komponent nie przyjmuje żadnych propsów, więc nie potrzebujemy typu propsów
export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/profile.jpg'
          alt='An image showing Jan'
          width={300}
          height={300}
          priority // ładuje się szybciej, bo to element „above the fold”
        />
      </div>
      <h1>Hi, I'm Jan</h1>
      <p>I blog about web development — especially frontend</p>
    </section>
  );
}
