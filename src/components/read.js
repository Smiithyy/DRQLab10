import React from 'react';
import '../App.css'
import { Movies } from './movies';
import axios from 'axios';

export class Read extends React.Component {

    constructor(){
        super();

        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        movies: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    this.setState({ movies: response.data })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            );
    }

    ReloadData(){
        axios.get('http://localhost:4000/api/movies')
            .then(
                (response) => {
                    this.setState({ movies: response.data })
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
                <Movies movies={this.state.movies} ReloadData = {this.ReloadData}></Movies>
            </div>
        )
    }
}