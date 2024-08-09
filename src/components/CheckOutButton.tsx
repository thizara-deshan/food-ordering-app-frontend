import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import UserProfileForm, {
  UserformData,
} from "@/forms/user-profile-form/UserProfileForm";
import { useGetMyUser } from "@/api/MyUserApi";

type Props = {
  onCheckout: (userFormData: UserformData) => void;
  disabled?: boolean;
};

function CheckOutButton({ onCheckout, disabled }: Props) {
  const {
    isAuthenticated,
    isLoading: isAuthLoading,
    loginWithRedirect,
  } = useAuth0();

  const { pathname } = useLocation();

  const { currentuser, isLoading: isGetUserLoading } = useGetMyUser();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: { returnTo: pathname },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className="bg-orange-500 flex-1">
        Login to Check out
      </Button>
    );
  }
  if (isAuthLoading || !currentuser) {
    return <Button className="bg-orange-500 flex-1">Loading...</Button>;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={disabled} className="bg-orange-500 flex-1">
          Check Out
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[424px] md:min-w-[700px] bg-gray-50">
        <UserProfileForm
          currentuser={currentuser}
          onSave={onCheckout}
          isLoading={isGetUserLoading}
          title="Confirm Delivery Details"
          buttonText="Continue To Payment"
        />
      </DialogContent>
    </Dialog>
  );
}

export default CheckOutButton;
