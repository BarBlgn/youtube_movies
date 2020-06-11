import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as All from '@fortawesome/free-solid-svg-icons';
import Movie from './Movie';
import firebase from '../../config/Config';
import Player from './Player';

class Movies extends React.Component {
    constructor(props) {
        super(props);

        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.openMovie = this.openMovie.bind(this);

        this.state = {
            movies: [],
            youtubeCode: ""
        };
    }

    openMovie(youtubeCode) {
        this.setState({"youtubeCode": youtubeCode});
    }

    nextPage () {
        this.setState({"currentPage": this.state.currentPage + 1});
    }

    previousPage() {
        if (this.state.currentPage != 1) {
            this.setState({"currentPage": this.state.currentPage - 1});   
        }
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
                    sliderImageUrl: movies[movie].sliderImageUrl,
                    onSlider: movies[movie].onSlider,
                    type: movies[movie].type,
                    description: movies[movie].description,
                    youtubeCode: movies[movie].youtubeCode
                });
            }
            this.setState({ movies: newState });
        });
    }

    render() {
        if (!this.state.currentPage) {
            this.setState({"currentPage": 1});
        }
        var movieList = this.state.movies;

        if (this.props.OrderBy != this.state.orderBy) {
            this.setState({ "currentPage": this.state.currentPage + 1, "orderBy": this.props.OrderBy });
        }

        if (this.props.OrderBy == "point")
        {
            movieList = this.state.movies.sort(function(a, b){ 
                return b.point - a.point;
            });
        }
        else if (this.props.OrderBy == "viewed") {
            movieList = this.state.movies.sort(function(a, b){
                return b.viewed - a.viewed;
            });
        }

        var startItem = this.props.Type == "serie" ?  (this.state.currentPage - 1) * 3 : (this.state.currentPage - 1) * 4;

        if (this.props.Type == "theater") {
            movieList = this.state.movies.filter(movie => movie.type == 2);
        }

        if  (this.props.Type == "serie") {
            movieList = this.state.movies.filter(movie => movie.type == 1);
        }

        var sliceTo = this.props.Type == "serie" ? startItem + 3 : startItem + 4;
        var player = "";

        if (this.state.youtubeCode && this.state.youtubeCode != "") {
            player = <Player YoutubeCode={this.state.youtubeCode} />
        }
        return (
            <div className={'movies'}>
                {player}
                <img className={'arrow arrow-left'} src={'../images/arrow-left.png'} onClick={this.previousPage} />
                <img className={'arrow arrow-right'} src={'../images/arrow-right.png'}  onClick={this.nextPage} />
                {
                    movieList.slice(startItem, sliceTo).map((movie) => 
                        <div onClick={() => this.openMovie(movie.youtubeCode)}>
                            <Movie Name={movie.name} YoutubeCode={movie.youtubeCode} ImageUrl={movie.imageUrl} Point={movie.point} Type={this.props.Type} Description={movie.description} />
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Movies;