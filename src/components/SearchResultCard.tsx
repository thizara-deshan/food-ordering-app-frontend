import { Link } from "react-router-dom";
import { Restaurant } from "../types";
import { AspectRatio } from "./ui/aspect-ratio";
import { Banknote, Clock, Dot } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

function SearchResultCard({ restaurant }: Props) {
  return (
    <Link
      to={`/details/${restaurant._id}`}
      className="grid lg:grid-cols-[2fr_3fr] md:grid-cols-[2fr_3fr] gap-5 group bg-slate-50/40 p-3 rounded-lg shadow-md hover:shadow-sm transition"
    >
      <AspectRatio ratio={16 / 9} className=" rounded-lg overflow-hidden">
        <img
          src={restaurant.imageurl}
          className="transition hover:scale-105 active:scale-105 hover:-translate-y-1 rounded-md w-full h-full object-cover"
        />
      </AspectRatio>
      <div>
        <h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:underline">
          {restaurant.restaurantName}
        </h3>
        <div id="card-content" className="grid md:grid-cols-2 gap-2">
          <div className="flex flex-row flex-wrap">
            {restaurant.cusines?.map((item, index) => (
              <span className="flex" key={item}>
                <span>{item} </span>
                {index < restaurant.cusines.length - 1 && <Dot />}
              </span>
            ))}
          </div>
          <div className="flex gap-2 flex-col">
            <div className="flex items-center gap-1 text-green-600">
              <Clock className="text-green-600" />
              {restaurant.estimatedDeliveryTime} mins
            </div>
            <div className="flex items-center gap-1">
              <Banknote />
              Delivery Fee: Rs.{restaurant.deliveryPrice}/=
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default SearchResultCard;
