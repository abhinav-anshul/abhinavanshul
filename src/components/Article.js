import React from "react";

class Article extends React.Component {
  render() {
    return (
      <div className='article_container'>
        <div className='article-heading'>My Most Recent Article</div>
        <div className='article-name'>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://javascript.works-hub.com/learn/a-complete-beginners-guide-to-useeffect-hook-83b07'
            style={{ all: "unset", cursor: "pointer", color: "#0078d7" }}
          >
            A Complete Beginner's Guide to useEffect Hook
          </a>
        </div>
        <div className='article-detail'>
          &nbsp; useEffect is a React Hook that is used to handle side effects
          in React functional components. Introduced in late October 2018, it
          provides a single API to handle componentDidMount,
          componentDidUnmount, componentDidUpdate as what was previously done in
          class-based React components...&nbsp;
        </div>
        <div className='button-container-article-container'>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://javascript.works-hub.com/learn/?blogs-search=abhinav+anshul&page=1'
          >
            <button className='button-container-article-button'>
              Read More Posts
            </button>
          </a>
        </div>
      </div>
    );
  }
}

export default Article;
