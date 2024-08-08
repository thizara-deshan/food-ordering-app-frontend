import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Please enter a search query",
  }),
});

export type searchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: searchForm) => void;
  placeholder: string;
  onReset?: () => void;
  searchQuery?: string;
};

function SearchBar({ onSubmit, onReset, placeholder, searchQuery }: Props) {
  const form = useForm<searchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [searchQuery, form]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });
    onReset?.();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center flex-1 gap-3 justify-between flex-row border rounded-full p-3 mx-1 ${
          form.formState.errors.searchQuery
            ? "border-red-500"
            : "border-gray-300"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={30}
          className="ml-1 text-orange-500 hidden md:block"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="placeholder-sm border-none text-xl shadow-none focus-visible:ring-0"
                  placeholder={placeholder}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <Button
          onClick={handleReset}
          type="button"
          variant="outline"
          className="hidden lg:block rounded-full"
        >
          Clear
        </Button>

        <Button type="submit" className="rounded-full bg-orange-500">
          Search
        </Button>
      </form>
    </Form>
  );
}

export default SearchBar;
