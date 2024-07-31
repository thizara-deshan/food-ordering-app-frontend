import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

function MenuItemInput({ index, removeMenuItem }: Props) {
  const { control } = useFormContext();

  return (
    <div className="flex flex-row items-end gap-4">
      <FormField
        control={control}
        name={`menuitems.${index}.name`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              Name <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="cheese pizza"
                className="bg-white"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuitems.${index}.price`}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="flex items-center gap-2">
              Price (LKR) <FormMessage />
            </FormLabel>
            <FormControl>
              <Input {...field} placeholder="250" className="bg-white" />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        type="button"
        onClick={removeMenuItem}
        className="bg-red-500 max-h-fit"
      >
        Remove
      </Button>
    </div>
  );
}

export default MenuItemInput;
