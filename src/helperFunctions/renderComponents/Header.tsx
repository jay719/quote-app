import React, { useMemo, useState } from "react";
import { RiSearchEyeLine } from "react-icons/ri";

import "../../styles/Header.css";
import { searchForNewQuoteApiCall } from "../dataManipulation/apiCalls";
export default function Header() {
  const [searchInput, setSearch] = useState<string>("");
  const [finalSearchTerm, setFinalSearchTerm] = useState<string>("");

  const handleTyping = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearch = () => {
    setFinalSearchTerm(searchInput);
  };

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
          placeholder={"Find a quote now"}
          onChange={handleTyping}
          aria-label="quote-input"
          data-testid={"search-bar"} // slight controversy on using these
        ></input>
        <RiSearchEyeLine onClick={handleSearch} />
      </div>
    </div>
  );
}
