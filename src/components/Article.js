import React from "react";

class Article extends React.Component {
  render() {
    return (
      <div className="article_container">
        <div className="article-heading">My Most Recent Article</div>
        <div className="article-name">What makes SASS so interesting?</div>
        <div className="article-detail">
          There are tons of CSS Pre-processor we have including LESS, STYL, and
          of course SASS, but what makes SASS so much interesting? Why people
          prefer to use SASS more than other alternatives?...
        </div>
        <div className="button-container-article-container">
          <a
            target="_blank"
            href="https://medium.com/@abhinavanshul/what-makes-sass-so-interesting-d8928fc0f25e"
          >
            <button className="button-container-article-button">
              Read More on Medium
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Article;
