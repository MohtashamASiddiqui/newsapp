import React, { Component } from "react";
import NewsItem from "./NewsItem";
// import PropTypes from "prop-types";

export class News extends Component {
  constructor() {
    super();
    // console.log("Hello i am constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      "https://newsapi.org/v2/everything?apiKey=6df78b12f0f4479c8bbf276c4e3b1a4c&q=business";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey - Top headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={!element.title ? element.title : ""}
                  description={!element.description ? element.description : ""}
                  imageURl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
