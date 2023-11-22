import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem/NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  
  
  

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  document.title = "NewsMonkey - " + capitalizeFirstLetter(props.category);


const updateNews = async (pageNo) => {
    props.setprogress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${pageNo}&pagesize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setprogress(10);
    let parsedData = await data.json();
    props.setprogress(30);
    setarticles(parsedData.articles);
    setloading(false);
    settotalResults(parsedData.totalResults);
    props.setprogress(100);
  }

  useEffect(() => {
    updateNews(page);
  }, []);



  const fetchMoreData = async ()=>{
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pagesize=${props.pageSize}`;
    setpage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
  }
    return (
      <>
        <h1 className="text-center" style={{margin : "90px 0 45px"}}>
          NewsMonkey - Top{" "}
          {props.category === "general"
            ? "News"
            : capitalizeFirstLetter(props.category)}{" "}
          Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {!loading &&
                articles.map((element) => {
                  return (
                    <div
                      className="col col-lg-4 col-md-6 d-flex justify-content-center"
                      key={element.url}
                    >
                      <NewsItem
                        title={element.title}
                        description={element.description}
                        imageUrl={element.urlToImage}
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
}

export default News;

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};