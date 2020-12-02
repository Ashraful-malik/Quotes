import React, { useState, useEffect } from "react";

function Quotes() {
  const [Quotes, SetQuotes] = useState("");
  const [Author, SetAuthor] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    let url =
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.quotes.length);
        let randomQuotes = data.quotes[randomNum];
        SetQuotes(randomQuotes.quote);
        SetAuthor(randomQuotes.author);
      });
  };
  const handleQuotes = () => {
    getQuotes();
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-md-center">
          <div
            className="card shadow p-3 mb-5 bg-white rounded mt-5"
            style={{ width: "28rem" }}
          >
            <div className="card-body">
              <div id="card_text" className="card-text">
                <p>“{Quotes}⹂</p>
              </div>
              <div id="author">{Author}</div>
              <button onClick={handleQuotes} className="quotes_btn">
                New Quotes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quotes;
