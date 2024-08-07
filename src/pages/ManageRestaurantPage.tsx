import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm";

function ManageRestaurantPage() {
  const { createRestaurant, isLoading: createLoading } =
    useCreateMyRestaurant();
  const { restaurant, isLoading: getLoading } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: updateLoading } =
    useUpdateMyRestaurant();

  const isEditing = !!restaurant;

  if (getLoading) {
    return <div>Please Wait... Server takes about 1 minute to Load data</div>;
  }

  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={createLoading || updateLoading}
    />
  );
}

export default ManageRestaurantPage;
