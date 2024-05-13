import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

function MobileNavLinks() {
  const { logout } = useAuth0();

  return (
    <>
      <Link
        to="/user-profile"
        className="flex py-2 text-center bg-white items-center font-bold hover:text-orange-500"
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center font-bold hover:bg-gray-500"
      >
        Log Out
      </Button>
    </>
  );
}

export default MobileNavLinks;
