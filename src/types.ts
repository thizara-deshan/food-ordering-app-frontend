export type Restaurant = {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cusines: string[];
  menuitems: {
    _id: string;
    name: string;
    price: number;
  }[];
  image: string;
  lastUpdated: string;
};
