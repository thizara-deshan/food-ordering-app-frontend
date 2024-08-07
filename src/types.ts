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
  imageurl: string;
  lastUpdated: string;
};

export type RestaurantSearchResponse = {
  data: Restaurant[];
  pagination: {
    total: number;

    page: number;
    pages: number;
  };
};
