import { Link } from "react-router-dom";

const PublicLanding = () => {
  return (
    <section>
      <h2>You need to log in to read posts!</h2>
      <Link to="/login">Log in</Link>
    </section>
  );
};

export default PublicLanding;
