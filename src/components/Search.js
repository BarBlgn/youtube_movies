import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as All from '@fortawesome/free-solid-svg-icons';
import Movie from './movieComponents/SearchMovie';
import firebase from '../config/Config';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.getSearchResult = this.getSearchResult.bind(this);

        this.state = {
            movies: []
        };
    }
    
    getSearchResult(e) {
        this.setState({"searchValue" : e.target.value});
    }

    componentDidMount() {
        const moviesRef = firebase.database().ref("movies");
        moviesRef.on("value", (snapshot) => {
            let movies = snapshot.val();
            let newState = [];
            for (let movie in movies) {
                newState.push({
                    id: movie,
                    name: movies[movie].name,
                    imageUrl: movies[movie].imageUrl,
                    point: movies[movie].point,
                });
            }
            this.setState({ movies: newState });
        });
    }

    render() {
        const value = this.state.searchValue;
        var list = this.state.movies; 
        var result = "";

        if (value != null && value.length > 2) {
            list = this.state.movies.filter(m => m.name.toLowerCase().includes(value.toLowerCase()));

            result =  <div id="search-result">
                            {
                                list.map((movie) => 
                                    <Movie Name={movie.name} ImageUrl={movie.imageUrl} Point={movie.point} />
                                )
                            }
                        </div>
        }

        return (
            <div className={'search-input col-md-6 left'}>
                <input type="text" onChange={this.getSearchResult} id="search" />
                {result}
            </div>
        )
    }
}

export default Search;