import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

function UserProfilePage() {
  const { currentuser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return (
      <span className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-orange-500">
        Please Wait... Server takes about 1 minute to Load data
      </span>
    );
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
