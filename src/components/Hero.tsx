import hero from "../assets/hero.png";

function Hero() {
  return (
    <div className="">
      <img
        src={hero}
        className=" md:lg:my-6 w-full max-h-[600px]   max-w-[1900px]  mt-5 object-cover  border-b-orange-600"
      />
      <div className="md:lg:w-full flex-col absolute top-44 left-52 hidden md:lg:block">
        <h2 className=" text-6xl font-semibold tracking-tight text-slate-900">
          <p className=" leading-tight">
            Craving Something{" "}
            <span className=" text-orange-500">Delicious?</span>
          </p>

          <p className=" leading-tight">Get Fresh Meals Delivered to</p>

          <p className=" leading-tight">
            Your <span className=" italic from-neutral-950">Doorstep!</span>{" "}
          </p>
        </h2>
        <h3 className=" text-lg  text-slate-900 py-5 px-1 ">
          <p className=" line-clamp-3">
            Experience the Joy of Dining at Home and Delivered Fresh to
            <br />
            Your Doorstep. Satisfy Your Cravings with Just a Few Clicks and
            <br />
            Let Us Take Care of the Rest
          </p>
        </h3>
      </div>
    </div>
  );
}

export default Hero;
