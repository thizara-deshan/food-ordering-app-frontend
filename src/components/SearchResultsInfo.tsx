import { Link } from "react-router-dom";

type Props = {
  total: number;
  city: string;
};

function SearchResultsInfo({ total, city }: Props) {
  return (
    <div className="text-xl font-bold flex flex-col gap-3 justify-between lg:flex-row">
      <span>
        {total} results found in {city}
        <br />
        <Link
          to={`/`}
          className=" text-sm font-semibold cursor-pointer text-blue-500 underline"
        >
          Change Location
        </Link>
      </span>
    </div>
  );
}

export default SearchResultsInfo;
