import "./ArticleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ title, abstract, id, media }) => {
  return (
    <Link to={{ pathname: `/${id}` }}>
      <article className="article-card">
        <img
          src={
            media[0] &&
            media[0]["media-metadata"] &&
            media[0] &&
            media[0]["media-metadata"][2].url
          }
        />
        <h2>{title}</h2>
        <p>{abstract}</p>
      </article>
    </Link>
  );
};

export default ArticleCard;
