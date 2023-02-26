import React, { useMemo, useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";

import "../../styles/Header.css";
import { searchForNewQuoteApiCall } from "../dataManipulation/apiCalls";
export default function Header() {
  const [searchInput, setSearch] = useState<string>("");
  const [finalSearchTerm, setFinalSearchTerm] = useState<string>("");
  const handleSearch = () => {
    setFinalSearchTerm(searchInput);
  };

  console.log("searchterm", searchInput);
  console.log("final", finalSearchTerm);

  useMemo(() => {
    searchForNewQuoteApiCall(finalSearchTerm);
  }, [finalSearchTerm]);
  return (
    <div className="home-header">
      <div className="search-bar">
        <input
          id="name"
          type="text"
          value={searchInput}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <RiSearchEyeLine
          onClick={(e) => {
            e.stopPropagation();
            handleSearch();
          }}
        />
      </div>
    </div>
  );
}
