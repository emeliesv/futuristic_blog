import heroimg from "../assets/duotone.png";

const Hero = () => {
  return (
    <div
      className="w-full h-96 flex flex-col items-center justify-center bg-cover bg-center mb-10"
      style={{
        backgroundImage: `url(${heroimg})`,
      }}
    ></div>
  );
};

export default Hero;
