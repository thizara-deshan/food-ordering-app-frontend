import { useGetRestaurant } from "@/api/RestaurantApi";
import CheckOutButton from "@/components/CheckOutButton";
import MenuItem from "@/components/MenuItem";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardFooter } from "@/components/ui/card";
import { UserformData } from "@/forms/user-profile-form/UserProfileForm";
import { Restaurant } from "@/types";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};
function DetailPage() {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addtoCart = (menuitem: Restaurant["menuitems"][0]) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item._id === menuitem._id);

      if (isItemInCart) {
        return prev.map((item) =>
          item._id === menuitem._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...menuitem, quantity: 1 }];
    });
  };

  const removefromCart = (cartItem: CartItem) => {
    setCartItems((prev) => {
      const updatedCart = prev.filter((item) => item._id !== cartItem._id);
      return updatedCart;
    });
  };

  const onCheckout = (userFormData: UserformData) => {
    console.log("userFormData", userFormData);
  };

  if (isLoading || !restaurant) {
    return (
      <>
        <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
        <div>
          Please Wait... Sometimes Server takes about 1 minute to Load data
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio
        ratio={16 / 8}
        className=" rounded-lg overflow-hidden md:lg:p-10 "
      >
        <img
          src={restaurant.imageurl}
          className=" rounded-2xl w-full h-full object-cover"
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-4 md:px-32">
        <div className="flex flex-col gap-3">
          <RestaurantInfo restaurant={restaurant} />
          <span className="text-2xl font-semibold tracking-tight">Menu</span>
          {restaurant.menuitems.map((menuItem) => (
            <MenuItem
              key={menuItem._id}
              menuItem={menuItem}
              addtoCart={() => addtoCart(menuItem)}
            />
          ))}
        </div>
        <div className=" ">
          <Card className=" shadow-md">
            <OrderSummary
              restaurant={restaurant}
              cartItems={cartItems}
              removeFromCart={removefromCart}
            />
            <CardFooter>
              <CheckOutButton
                disabled={cartItems.length === 0}
                onCheckout={onCheckout}
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
