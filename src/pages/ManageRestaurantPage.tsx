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
    return (
      <>
        <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
        <div>
          Please Wait... Sometimes Server takes about 1 minute to Load data
        </div>
      </>
    );
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
