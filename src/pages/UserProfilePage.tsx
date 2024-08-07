import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

function UserProfilePage() {
  const { currentuser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <span>Please Wait... Server takes about 1 minute to Load data</span>;
  }
  return (
    <UserProfileForm
      currentuser={currentuser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
}

export default UserProfilePage;
