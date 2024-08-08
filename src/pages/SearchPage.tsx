import { useSearchRestaurants } from "@/api/RestaurantApi";
import PaginationSelector from "@/components/PaginationSelector";
import SearchBar, { searchForm } from "@/components/SearchBar";
import SearchResultCard from "@/components/SearchResultCard";
import SearchResultsInfo from "@/components/SearchResultsInfo";
import SortOptionDropdown from "@/components/SortOptionDropdown";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { useParams } from "react-router-dom";

export type SearchState = {
  searchQuery: string;
  page: number;
  sortOption: string;
};

function SearchPage() {
  const { city } = useParams();
  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    sortOption: "bestMatch",
  });

  const { results, isLoading } = useSearchRestaurants(searchState, city);

  const setSortOption = (sortOption: string) => {
    setSearchState((prevState) => ({
      ...prevState,
      page: 1,
      sortOption,
    }));
  };

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));
  };

  const setSearchQuery = (searchFormData: searchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
    }));
  };
  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }));
  };

  if (isLoading) {
    return (
      <>
        <div className="items-center justify-center w-8 h-8 border-4 border-dashed rounded-full animate-spin border-orange-500"></div>
        <span>
          Please Wait... Sometimes Server takes about 1 minute to Load data
        </span>
      </>
    );
  }

  if (!results?.data || !city) {
    return <span>No results found</span>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cusines-list" className=" font-semibold">
        Insert Cuisines Here :
      </div>
      <div id="main-content" className=" flex flex-col gap-5">
        <SearchBar
          searchQuery={searchState.searchQuery}
          onSubmit={setSearchQuery}
          placeholder="Search by restaurant or cuisine"
          onReset={resetSearch}
        />
        <div className="flex justify-between flex-col gap-3 lg:flex-row">
          <SearchResultsInfo total={results.pagination.total} city={city} />
          <SortOptionDropdown
            sortOptions={searchState.sortOption}
            onChange={(value) => setSortOption(value)}
          />
        </div>
        {results.data.map((restaurant) => (
          <>
            <SearchResultCard key={restaurant._id} restaurant={restaurant} />
            <Separator />
          </>
        ))}
        <PaginationSelector
          page={results.pagination.page}
          pages={results.pagination.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
}

export default SearchPage;
