import { ImSearch } from "react-icons/im";

import { createQueryObject } from "../helper/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = (event) => {
    setSearch(event.target.value.toLowerCase().trim());
    // console.log(search);
  };

  const submitHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={searchHandler}
      />
      <button onClick={submitHandler}>
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
