import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { User, Utensils } from "lucide-react";

function MobileNavLinks() {
  const { logout } = useAuth0();

  return (
    <>
      <Link
        to="/user-profile"
        className="flex py-4 gap-2 text-center bg-white items-center font-bold hover:text-orange-500"
      >
        <User className="" />
        User Profile
      </Link>
      <hr className="border-gray-200" />
      <Link
        to="/manage-restaurant"
        className="flex py-2 gap-2 text-center bg-white items-center font-bold hover:text-orange-500"
      >
        <Utensils className="" />
        Manage Restaurant
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
