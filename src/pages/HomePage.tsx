import landingImg from "../assets/landing.jpg";
import appDownloadImg from "../assets/appDownload.png";

function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-md shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Straight Out Of The Kitchen To Your Doorstep
        </h1>
        <span className="text-xl">Don't starve, just order</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImg} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Ordering food made easy
          </span>
          <span>
            Download the{" "}
            <span className="text-orange-500 font-semibold">OrderEats </span>App
            for faster ordering and discover exclusive deals!
          </span>
          <img src={appDownloadImg} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
