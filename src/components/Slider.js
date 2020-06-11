import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as All from '@fortawesome/free-solid-svg-icons';
import Slide from './sliderComponents/Slide';
import firebase from '../config/Config';

class slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
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
                    onSlider: movies[movie].onSlider
                });
            }
            this.setState({ movies: newState });
        });
    }

    render() {
        return (
            <section id="slider">
                <Container fluid={true}>
                    <Row className={'row-cols-5'}>
                        {
                            this.state.movies.filter(movie => movie.onSlider && movie.sliderImageUrl != "").map((movie) => 
                                <Slide Name={movie.name} ImageUrl={movie.sliderImageUrl} Point={movie.point} />
                            )
                        }
                    </Row>
                </Container>
            </section>
        )
    }
}

export default slider;