const Button = ({ buttonText, toggleLogIn }) => {
  return <button onClick={toggleLogIn}>{buttonText}</button>;
};

export default Button;
