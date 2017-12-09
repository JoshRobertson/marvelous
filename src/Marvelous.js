import React, { Component } from 'react';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import moment from 'moment';
import './App.css';
import ResultsContainer from './ResultsContainer.js';
import SearchForm from './SearchForm.js';


class Marvelous extends Component {


    static initialState = () => ({
        searchQuery: '',
        searchType: '',
        searchResults: ''
    });

    constructor(props) {
        super(props);
        this.state = Marvelous.initialState();
        this.parentCallback = this.parentCallback.bind(this);
    }

    callMarvelApi(query, category) {
        const API_PUBLIC = `07235c9f2bcdf1257d0676a1866dcbe8`;
        const API_PRIVATE = `456fbe747cdcf62674a0fbce412246dc74c43e27`; //Leaving this here to make demo-ing easier
        const BASE_URL = "https://gateway.marvel.com";
        const timeStamp = moment().unix();

        let URI = `/v1/public/${category}`;
        let url = `${BASE_URL}${URI}`;
        console.log(BASE_URL);
        console.log(URI);


        let queryParams = {
            titleStartsWith: query,
            ts: timeStamp,
            apikey: API_PUBLIC,
            hash: CryptoJS.MD5(timeStamp + API_PRIVATE + API_PUBLIC).toString(CryptoJS.enc.Hex)
        };
        //hacky
        if (category === 'characters') {
            queryParams = {
                nameStartsWith: query,
                ts: timeStamp,
                apikey: API_PUBLIC,
                hash: CryptoJS.MD5(timeStamp + API_PRIVATE + API_PUBLIC).toString(CryptoJS.enc.Hex)
            };
        }

        axios.get(url, { params: queryParams })
            .then((response) => {
                console.log(response);
                this.setState({ searchResults: response.data });
            })
            .catch((error) => console.log(error));
    }


    parentCallback = (returnedQuery, returnedType) => {
        this.setState({ searchQuery: returnedQuery, searchType: returnedType });
        console.log("parent: " + returnedQuery);
        console.log(returnedType);
        this.callMarvelApi(returnedQuery, returnedType);
    }

    render() {

        return (
            <div className="">
                <SearchForm parentCallback={this.parentCallback} />
                <ResultsContainer resultsProp={this.state.searchResults} searchType={this.state.searchType} />
            </div>
        );
    }
}

export default Marvelous;