import React, { Component } from 'react';
import './App.css';
import { Well } from 'react-bootstrap';

class HeroTile extends Component {
    render() {
        return (
            <div className="ComicTile">
                <img src={this.props.hero.thumbnail.path + '.' + this.props.hero.thumbnail.extension} width={250} height={300} alt="hero thumbnail" />
                <h6><strong>Name: {this.props.hero.name}</strong></h6>
                <Well>
                    <div className="HeroDescriptionWell">
                        {this.props.hero.description}
                    </div>

                </Well>
            </div>
        );
    }
}

export default HeroTile;