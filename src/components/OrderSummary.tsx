import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash2 } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

function OrderSummary({ restaurant, cartItems, removeFromCart }: Props) {
  const getTotal = () => {
    const totalPrice = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    const total = totalPrice + restaurant.deliveryPrice;
    return total;
  };

  return (
    <>
      <CardContent className="flex flex-col gap-5 py-3">
        {cartItems.map((cartItem) => (
          <div className="flex justify-between">
            <span>
              <Badge variant="outline" className="mr-2">
                {cartItem.quantity}
              </Badge>
              {cartItem.name}
            </span>
            <span className="flex items-center gap-1">
              Rs. {cartItem.price * cartItem.quantity}
              <span className="text-sm text-red-500 py-1">
                <Trash2
                  className=" cursor-pointer"
                  size={20}
                  onClick={() => removeFromCart(cartItem)}
                />
              </span>
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>Rs. {restaurant.deliveryPrice}</span>
        </div>
        <Separator />
      </CardContent>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>Rs. {getTotal()}</span>
        </CardTitle>
      </CardHeader>
    </>
  );
}

export default OrderSummary;
