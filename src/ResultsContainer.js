import React, { Component } from 'react';
import ComicTile from './ComicTile.js';
import HeroTile from './HeroTile.js';
import { Grid, Row, Col } from 'react-bootstrap';

class ResultsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataArray: [],
            comicArray: []
        };
    }

    render() {
        const dataArray = this.props.resultsProp.data || [];
        const comicsArray = dataArray.results || [];


        // let tileType = null;
        // if (this.props.searchType === 'characters') {
        //     tileType = <HeroTile />;
        // } else {
        //     tileType = <ComicTile />;
        // }

        return (
            <div>
                <Grid>
                    <Row>
                        {
                            this.props.searchType === 'characters' ?
                                comicsArray.map(item => <Col md={4} key={item.id}><HeroTile key={item.id} hero={item} /></Col>)
                                : comicsArray.map(item => <Col md={4} key={item.id}><ComicTile key={item.id} comic={item} /></Col>)
                        }
                    </Row>
                </Grid>
            </div>
        );

    }
}

export default ResultsContainer;