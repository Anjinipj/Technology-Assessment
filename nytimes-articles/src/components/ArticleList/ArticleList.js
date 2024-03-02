import "./ArticleList.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const ArticleList = ({ articles }) => {
  let arr = articles;

  const articleCards = arr.map((article, index) => {
    return (
      <ArticleCard
        key={index}
        id={article.id}
        title={article.title}
        abstract={article.abstract}
        media={article.media}
      />
    );
  });
  return !articleCards.length ? (
    <p className="no-results-msg">No Artcles present. Clear and try Again.</p>
  ) : (
    <div className="article-list">{articleCards}</div>
  );
};

export default ArticleList;
