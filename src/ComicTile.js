import React, { Component } from 'react';
import './App.css';
import moment from 'moment';
class ComicTile extends Component {
    render() {
        return (
            <div className="ComicTile">
                <img src={this.props.comic.thumbnail.path + '.' + this.props.comic.thumbnail.extension} width={250} height={300} alt="comic thumbnail" />
                <h6><strong>Title: {this.props.comic.title}</strong></h6>
                <h6>Issue Date: {moment(this.props.comic.dates[0].date).format('MM/DD/YYYY')}</h6>

            </div>
        );
    }
}

export default ComicTile;