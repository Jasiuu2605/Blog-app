import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with nextJs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the react framework for production",
    date: "2022-02-26",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with nextJs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the react framework for production",
    date: "2022-02-26",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with nextJs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the react framework for production",
    date: "2022-02-26",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with nextJs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the react framework for production",
    date: "2022-02-26",
  },
  {
    slug: "getting-started-with-nextjs5",
    title: "Getting started with nextJs",
    image: "getting-started-nextjs.png",
    excerpt: "NextJs is the react framework for production",
    date: "2022-02-26",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
