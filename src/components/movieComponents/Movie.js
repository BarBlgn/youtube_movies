import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as All from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class movie extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var imdbSpan = "";
        var description = "";
        var col = this.props.Type == "serie" ? 4 : 3;

        if (this.props.Type == "theater") {
            description = <span className={'description'}>{this.props.Description}</span>
        } else {
            imdbSpan = <span className={'imdb mbs mtm'}><FontAwesomeIcon color={'#ffc000'} icon={All.faStar} /> { this.props.Point }</span>
        }

        return (
            <Col md={col} className={'left'}>
                <div className={'movie-poster'}>
                    <LazyLoadImage
                        alt={this.props.YoutubeCode}
                        className={'image-full'}
                        effect="blur"
                        src={this.props.ImageUrl} // use normal <img> attributes as props
                        width="100%" />
                </div>
                {imdbSpan}
                <h5>{ this.props.Name }</h5>
                {description}
            </Col>
        )
    }
}

export default movie;