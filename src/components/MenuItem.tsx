import { Restaurant } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ShoppingCart } from "lucide-react";

type Props = {
  menuItem: Restaurant["menuitems"][0];
  addtoCart: () => void;
};

function MenuItem({ menuItem, addtoCart }: Props) {
  return (
    <Card
      className="cursor-pointer hover:bg-slate-50 max-w-96 relative"
      onClick={addtoCart}
    >
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-semibold">Rs. {menuItem.price}</CardContent>
      <ShoppingCart className=" rounded-lg hover:scale-110 hover:bg-slate-100 absolute bottom-0 right-7 top-10" />
    </Card>
  );
}

export default MenuItem;
