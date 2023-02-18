import { useRouter } from "next/router";
import React from "react";

const Search: React.FC = () => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <div>
      <h1>Search Results for "{q}"</h1>
      <p>This is the search page.</p>
    </div>
  );
};

export default Search;