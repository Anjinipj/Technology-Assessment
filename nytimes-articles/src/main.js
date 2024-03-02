import { useState, useEffect } from "react";
import apiCalls from "./api";
import "./App.css";

import Header from "./components/Header/Header";
import ArticleList from "./components/ArticleList/ArticleList";

const Main = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiCalls
      .getMostPopularArticles()
      .then((data) => {
        setArticles(data.results);
      })
      .catch((err) =>
        setError("Something went wrong and our team is working on the issue")
      );
  }, []);

  return error.length ? (
    <p className="error">{error}</p>
  ) : (
    <div className="app-container">
      <Header />

      <ArticleList articles={articles} />

      {/* <Footer /> */}
    </div>
  );
};

export default Main;
