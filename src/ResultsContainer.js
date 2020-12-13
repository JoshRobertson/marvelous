import React, { Component } from "react";
import ComicTile from "./ComicTile.js";
import HeroTile from "./HeroTile.js";
import SeriesTile from "./SeriesTile.js";
import { Grid, Row, Col } from "react-bootstrap";

class ResultsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataArray: [],
      comicArray: [],
    };
  }

  render() {
    const dataArray = this.props.resultsProp.data || [];
    const comicsArray = dataArray.results || [];

    return (
      <div>
        <Grid>
          <Row>
            {this.props.searchType === "characters"
              ? comicsArray.map((item) => (
                  <Col md={4} key={item.id}>
                    <HeroTile key={item.id} hero={item} />
                  </Col>
                ))
              : this.props.searchType === "series"
              ? comicsArray.map((item) => (
                  <Col md={4} key={item.id}>
                    <SeriesTile key={item.id} series={item} />
                  </Col>
                ))
              : comicsArray.map((item) => (
                  <Col md={4} key={item.id}>
                    <ComicTile key={item.id} comic={item} />
                  </Col>
                ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ResultsContainer;
