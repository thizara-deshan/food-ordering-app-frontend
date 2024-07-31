import { useFormContext, useFieldArray } from "react-hook-form";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import MenuItemInput from "./MenuItemInput";

function MenuSection() {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuitems",
  });
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold ">Menu</h2>
        <FormDescription>
          Add the menu items your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="menuitems"
        render={() => (
          <FormItem className="flex flex-col gap-2">
            {fields.map((_, index) => (
              <MenuItemInput
                key={index}
                index={index}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button type="button" onClick={() => append({ name: "", price: "" })}>
        Add Menu Item
      </Button>
    </div>
  );
}

export default MenuSection;
