import classes from './topics.module.css';

const topics = [
  {
    title: 'Next.js in practice',
    description:
      'Routing, static generation, image optimization and small decisions that make React apps feel production-ready.',
  },
  {
    title: 'TypeScript habits',
    description:
      'Notes from converting JavaScript code into safer TypeScript without overengineering simple components.',
  },
  {
    title: 'Frontend craft',
    description:
      'UI structure, CSS Modules, accessibility details and performance improvements that make interfaces easier to use.',
  },
];

export default function Topics() {
  return (
    <section className={classes.topics}>
      <div className={classes.header}>
        <span>What this blog is about</span>
        <h2>Short notes from building better frontend projects.</h2>
        <p>
          This app collects practical lessons from learning, refactoring and
          shipping small web features with Next.js, React and TypeScript.
        </p>
      </div>

      <ul className={classes.list}>
        {topics.map((topic) => (
          <li key={topic.title} className={classes.item}>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
