import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-white font-bold tracking-tight">
          OrderEats
        </span>
        <span className="text-white text-sm lg:text-lg font-bold tracking-tight flex gap-4">
          <Link to="/privacy">
            <span>Privacy Policy</span>
          </Link>
          <span>Terms and Conditions </span>
          <span>About Us </span>
        </span>
      </div>
    </div>
  );
}

export default Footer;
