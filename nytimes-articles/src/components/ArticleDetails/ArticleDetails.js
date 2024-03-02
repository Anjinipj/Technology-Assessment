import "./ArticleDetails.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import apiCalls from "../../api";
const ArticleDetail = () => {
  const [articles, setArticles] = useState([]);
  const params = useParams();

  const id = params.id;
  useEffect(() => {
    apiCalls.getMostPopularArticles().then((data) => {
      const selectedArticle = data.results.find(
        (article) => article.id.toString() === id
      );
      setArticles(selectedArticle);
    });
  }, []);

  return (
    <div className="details-viewpage">
      <div className="back-btn-container">
        <Link to="/">
          <button className="back-btn">Go Back</button>
        </Link>
      </div>
      <div className="article-details">
        <div className="details-container">
          <h1>{articles.title}</h1>
          <p>{articles.abstract}</p>
          <a className="article-link" href={articles.url} target="_blank">
            Read More...
          </a>
          <p>{articles.byline}</p>
          <p>
            {articles.section} {articles.subsection}
          </p>
        </div>
        <div className="img-container"></div>
      </div>
    </div>
  );
};

export default ArticleDetail;
