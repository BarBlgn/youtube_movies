import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Layout.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as All from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import Player from './movieComponents/Player';

const header = (props) => {
    return (
        <header>
            <Container>
                <nav>
                    <Col id="logo-menu" md={3} className={'left'}>
                        <FontAwesomeIcon icon={ All.faAlignJustify } />
                        <img src={'../images/logo.png'} className={'img-fluid logo'} />
                    </Col>
                    <Col md={6} className={'left'}>
                        <div id="search-form">
                            <div className={ 'search-text left col-md-4' }>Film Bul</div>
                            <Search />
                            <div className={'search-icon left col-md-2'}>
                                <FontAwesomeIcon icon={ All.faSearch } />
                            </div>
                        </div>
                    </Col>
                </nav>
            </Container>
        </header>
    )
} 
export default header;