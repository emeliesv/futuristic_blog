const Burger = ({ isOpen }) => {
  return (
    <>
      <div
        className={`w-12 h-6 flex m-2 justify-around flex-col flex-nowrap z-10 transition-all ease-linear duration-300 origin-center ${
          isOpen && `justify-center`
        }`}
      >
        <div
          className={`w-6 h-1 rounded-lg bg-purple-950 transition-transform duration-300 ease-linear${
            isOpen && `transform rotate-45 translate-y-1.5 translate-x-24`
          }`}
        />
        <div
          className={`w-6 h-1 rounded-lg bg-purple-950 transition-transform duration-300 ease-linear ${
            isOpen && `hidden`
          }`}
        />
        <div
          className={`w-6 h-1 rounded-lg bg-purple-950 transition-transform duration-300 ease-linear ${
            isOpen && `transform -rotate-45 -translate-y-1.5 translate-x-24`
          }`}
        />
      </div>
    </>
  );
};

export default Burger;
