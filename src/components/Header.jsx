import Nav from "./Nav";

const Header = () => {
  return (
    <header className="grid grid-cols-2 bg-blue-200 px-6">
      <p className="justify-self-start">Logo</p>
      <Nav className="justify-self-end" />
    </header>
  );
};

export default Header;
