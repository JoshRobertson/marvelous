import React, { Component } from "react";
import "./App.css";

class SeriesTile extends Component {
  render() {
    return (
      <div className="ComicTile">
        <img
          src={
            this.props.series.thumbnail.path +
            "." +
            this.props.series.thumbnail.extension
          }
          width={250}
          height={300}
          alt="series thumbnail"
        />
        <h6>
          <strong>{this.props.series.title}</strong>
        </h6>
      </div>
    );
  }
}

export default SeriesTile;
