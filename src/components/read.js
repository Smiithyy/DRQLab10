import React from 'react';
import '../App.css'
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    state = {
        movies: []
    };

    componentDidMount() {
        axios.get('https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032')
            .then(
                (response) => {
                    this.setState({ movies: response.data.Search })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            );
    }

    render() {
        return (
            <div classname="App">
                <h1>Read component</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        )
    }
}