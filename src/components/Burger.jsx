const Burger = ({ isOpen }) => {
  /* Behöver fixa animationen */
  return (
    <>
      <div
        className={`w-12 h-16 flex m-2 justify-around flex-col flex-nowrap z-10 transition-all ease-linear duration-300 origin-custom-1px ${
          isOpen && `w-6 h-6 justify-center`
        }`}
      >
        <div
          className={`w-12 h-1 rounded-lg bg-purple-950 ${
            isOpen && `rotate-45 w-4`
          }`}
        />
        <div
          className={`w-12 h-1 rounded-lg bg-purple-950 ${isOpen && `hidden`}`}
        />
        <div
          className={`w-12 h-1 rounded-lg bg-purple-950 ${
            isOpen && `-rotate-45 w-4`
          }`}
        />
      </div>
    </>
  );
};

export default Burger;
