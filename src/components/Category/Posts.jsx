import React, { useState, useEffect } from "react";
import "./posts.scss";

const Posts = ({ posts }) => {
  const allPosts = posts ? posts : [];

  const DISPLAY_NUMBER = 9;
  let postCount = 0;

  const [pageData, setPageDate] = useState({
    allPosts: allPosts,
    current: 0,
    display: [],
    loading: false,
    max: 0,
    isMore: false,
  });

  useEffect(() => {
    setPageDate((prevState) => {
      return {
        ...prevState,
        max: allPosts.length,
        current: DISPLAY_NUMBER,
        display: allPosts.slice(0, DISPLAY_NUMBER),
        isMore: allPosts?.length > DISPLAY_NUMBER,
      };
    });
  }, []);

  const getMore = () => {
    setPageDate((prevState) => {
      return {
        ...prevState,
        current: prevState.current + DISPLAY_NUMBER,
        display: prevState.allPosts.slice(
          0,
          prevState.current + DISPLAY_NUMBER,
        ),
        isMore: prevState.max > prevState.current + DISPLAY_NUMBER,
        loading: false,
      };
    });
  };

  const loadMoreHandler = () => {
    setPageDate((prevState) => {
      return {
        ...prevState,
        loading: true,
      };
    });

    setTimeout(() => {
      getMore();
    }, 2000);
  };

  return (
    <div className="post-list">
      <div className="post-list-wrapper">
        {pageData?.display?.map((post, index) => {
          return (
            <div key={index} className="post-list-item">
              <a href={post.uri}>
                <div className="post-list-item-image">
                  <div className="post-list-item-image-wrap">
                    <img
                      src={
                        post.singlePostPage.featuredImageComponent.image
                          .sourceUrl
                      }
                      alt={post.title}
                      width="1000"
                      height="750"
                    />
                  </div>
                </div>
                <div className="post-list-item-intro">
                  <div className="post-list-item-intro-title">
                    <h2>{post.title}</h2>
                  </div>
                  <div class="post-list-item-intro-categories">
                    <p>
                      {post.categories.nodes.map((cat, index) => {
                        if (index === 0) {
                          return <span>{cat.name}</span>;
                        } else {
                          return <span>, {cat.name}</span>;
                        }
                      })}
                    </p>
                  </div>
                  <div
                    className="post-list-item-intro-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: post.singlePostPage.excerptComponent.excerpt,
                    }}
                  />
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="post-list-wrapper">
        <div className="post-load-more">
          <button
            onClick={() => loadMoreHandler()}
            type="button"
            disabled={!pageData.isMore}
          >
            {pageData.isMore ? "Load More" : "No More Posts"}
          </button>
        </div>
      </div>
      {pageData.loading === true ? (
        <div className="loading-more-posts">
          <div className="loading-more-posts-container">
            <p>Loading more posts...</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Posts;
