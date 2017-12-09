import React, { Component } from 'react';
import axios from 'axios';
import md5 from 'js-md5';

const baseEndpoint = 'https://gateway.marvel.com/v1/public/';
const privateKey = '456fbe747cdcf62674a0fbce412246dc74c43e27';
const publicKey = '07235c9f2bcdf1257d0676a1866dcbe8';
const timeStamp = Date.now();
let hash = md5('${timeStamp}${publicKey}${privateKey}');

let results = '';
let status = '';

class Api extends Component {

    callApi = () => {
        this.setState = { searchResult: '' };
        //event.preventDefault();
        axios.get('${baseEndpoint}/comics?titleStartsWith=thor&ts=${timeStamp}&apikey=${publicKey}&hash=${hash}')
            .then(resp => {
                this.setState({ searchResult: resp.data });
                results = resp.data;
                status = resp.status;
                console.log(resp.statusText);
                // this.props.onSubmit(resp.data);
                // this.setState({ userName: '' });
            });
    };


    render() {
        return (

            <div>
                <p>
                    {status}
                </p>
                <p>
                    {results}
                </p>
            </div>

        );
    }
}

export default Api;