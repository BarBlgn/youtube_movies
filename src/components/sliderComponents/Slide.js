import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as All from '@fortawesome/free-solid-svg-icons';

const slide = (props) => {
    return (
        <Col className={'slide'}>
            <div className={'movie-poster'}>
                <img src={ props.ImageUrl } className={'img-full'} />
            </div>
            <div className={'movie-info'}>
                <span className={'imdb'}><FontAwesomeIcon color={'#ffc000'} icon={All.faStar} />{ props.Point }</span>
                <h3>{ props.Name }</h3>
            </div>
        </Col>
    )
}

export default slide;