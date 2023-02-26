import { AiOutlineHeart } from "react-icons/ai";
import { QuoteObject } from "../../Types";
import "../../styles/HelperFunctions.css";

export const returnQuoteCards = (quotes: any) => {
  //good reminder, .forEach will only iterate through the array but map returns a new one we can render
  const quoteCards: React.ReactNode = quotes.map((quoteObject: QuoteObject) => {
    const author = quoteObject.author;
    const body = quoteObject.body;
    console.log(author, "author");
    return (
      <div className={"card"}>
        <div className="quote-info">
          <h3> {`${body}`}</h3>
          <h3>{`${author}`} </h3>
        </div>
        <div className="fav-button">
          <h2>Favorite? </h2>
          <AiOutlineHeart size={30} />
        </div>
      </div>
    );
  });
  // use fragment instead of div to avoid unnecessary dom element
  return <>{quoteCards}</>;
};
