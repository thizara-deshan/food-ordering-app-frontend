import hero from "../assets/hero.jpg";

function Hero() {
  return (
    <div>
      <img
        src={hero}
        className="w-full max-h-[600px] max-w-[1900px] object-cover border-b-2 border-b-orange-600"
      />
    </div>
  );
}

export default Hero;
