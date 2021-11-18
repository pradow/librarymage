import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const handleChange = (e) => {
    const newValue = e.currentTarget.value;
    setInputValue(newValue);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit" className="button">
        Search
      </button>
      <Link href="/advancedSearch">
        <a>Advance Search</a>
      </Link>
    </form>
  );
  search;
}

export default Search;
