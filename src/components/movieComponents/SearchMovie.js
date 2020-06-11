import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as All from '@fortawesome/free-solid-svg-icons';

const movie = (props) => {
    return (
        <Col md={12} className={'search-movie'}>
            <div className={'movie-poster col-md-3'}>
                <img src={ props.ImageUrl } className={'image-full'} />
            </div>
            <h6>{ props.Name }</h6>
            <span className={'imdb'}><FontAwesomeIcon color={'#ffc000'} icon={All.faStar} />{ props.Point }</span>
        </Col>
    )
}

export default movie;