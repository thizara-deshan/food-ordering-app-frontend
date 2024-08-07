import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Props = {
  onChange: (value: string) => void;
  sortOptions: string;
};

const SORT_OPTION = [
  {
    label: "Best Match",
    value: "bestMatch",
  },

  {
    label: "Estimated Delivery time",
    value: "estimatedDeliveryTime",
  },
  {
    label: "Delivery price",
    value: "deliveryPrice",
  },
];

function SortOptionDropdown({ onChange, sortOptions }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer">
        <Button variant="outline" className=" w-44">
          Sort by: {sortOptions}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {SORT_OPTION.map((option) => (
          <DropdownMenuItem
            className=" cursor-pointer"
            onClick={() => onChange(option.value)}
            key={option.value}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default SortOptionDropdown;
