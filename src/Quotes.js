import { useState, useEffect } from "react";

const Quotes = ({ click }) => {
  const [quotes, setQuotes] = useState("");
  const [authors, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://adem-cyf-quote-server.glitch.me/quotes/random/")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data.quote);
        setAuthor(data.author);
      });
  }, [click]);

  return (
    <div className="quotes">
      <h4>"{quotes}"</h4>
      <h4>{authors}</h4>
    </div>
  );
};

export default Quotes;
