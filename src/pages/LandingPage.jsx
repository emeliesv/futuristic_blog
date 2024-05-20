import Posts from "../components/Posts";
import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <section className="flex flex-col items-center">
      <Hero />
      <h2>Read other stuff</h2>
      <Posts />
    </section>
  );
};

export default LandingPage;
