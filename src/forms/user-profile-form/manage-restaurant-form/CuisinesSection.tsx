import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cusineOptions } from "@/config/restaurant-options-config";
import { useFormContext } from "react-hook-form";
import CuisineCheckBox from "./CuisineCheckBox";

function CuisinesSection() {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold ">Cuisines</h2>
        <FormDescription>
          Select the cuisines your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cusines"
        render={({ field }) => (
          <FormItem>
            <div className="grid md:grid-cols-4 gap-4">
              {cusineOptions.map((cusinesItem) => (
                <CuisineCheckBox
                  key={cusinesItem}
                  cusine={cusinesItem}
                  field={field}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

export default CuisinesSection;
