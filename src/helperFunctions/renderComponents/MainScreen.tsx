import React, { useEffect, useMemo, useState } from "react";
import "../../styles/MainScreen.css";
import { returnQuoteCards } from "../dataManipulation/turnQuotesIntoCards";
export default function MainScreen() {
  const search = "search";

  const [cards, setCards] = useState<React.ReactNode>();

  useMemo(() => {
    const quotes = [
      { author: "Goat Man", body: "I am the goat" },
      { author: "Goat Man", body: "I am the goat" },
      { author: "Goat Man", body: "I am the goat" },
      { author: "Goat Man", body: "I am the goat" },
    ];
    setCards(returnQuoteCards(quotes));
  }, []);

  return (
    <div className="main-screen">
      <div className={"cards"}>{cards}</div>;
    </div>
  );
}
