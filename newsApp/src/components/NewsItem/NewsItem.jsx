import React from "react";
import "./NewsItem.css";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div>
      <div className="card my-3" style={{ width: "18rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img src={imageUrl} className="card-img-top headline-image" alt="..." />
        <div className="card-body">
          <h5 className="card-title overflow">{title}</h5>
          <p className="card-text overflow">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toUTCString()}
            </small>
          </p>
          <a href={newsUrl} target="_blankcc" className="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
