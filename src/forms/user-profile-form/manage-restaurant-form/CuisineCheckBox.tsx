import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

type Props = {
  cusine: string;
  field: ControllerRenderProps<FieldValues, "cusines">;
};

function CuisineCheckBox({ cusine, field }: Props) {
  //   console.log(field);
  return (
    <FormItem className=" flex flex-row items-center space-x-1 space-y-0">
      <FormControl>
        <Checkbox
          className="bg-white "
          checked={field.value.includes(cusine)}
          onCheckedChange={(checked) => {
            if (checked) {
              field.onChange([...field.value, cusine]);
            } else {
              field.onChange(
                field.value.filter((value: string) => value !== cusine)
              );
            }
          }}
        />
      </FormControl>
      <FormLabel className="text-sm font-semibold">{cusine} </FormLabel>
    </FormItem>
  );
}

export default CuisineCheckBox;
