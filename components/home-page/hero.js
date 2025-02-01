import Image from "next/image";

import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing Jan"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Jan</h1>
      <p>I blog about web development - especially frontend</p>
    </section>
  );
}

export default Hero;
