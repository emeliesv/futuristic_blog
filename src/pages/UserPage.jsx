/* Rendera antingen komponenten Posts med en filtrering av mina inlägg utifrån id, eller rendera komponenten CreatePost som lägger till nya inlägg. */
import CreatePost from "../components/CreatePost";

const UserPage = () => {
  return (
    <>
      <h2>Share your thoughts:</h2>
      <CreatePost />
    </>
  );
};

export default UserPage;
