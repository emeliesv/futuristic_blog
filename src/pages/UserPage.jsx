/* Rendera antingen komponenten Posts med en filtrering av mina inlägg utifrån id, eller rendera komponenten CreatePost som lägger till nya inlägg. */
import CreatePost from "../components/CreatePost";

const UserPage = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="pb-16 pt-10">Share your thoughts:</h2>
      <CreatePost />
    </section>
  );
};

export default UserPage;
