import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as All from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

class Player extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            close: false
        };

        this.close = this.close.bind(this);
    }

    close() {
        this.setState({"close": true}); 
    }

    render() {
        if (this.state.close) {
            return ( <div></div> )
        }

        if (this.props.YoutubeCode != "")
        {
            let code = "https://www.youtube.com/embed/" + this.props.YoutubeCode;
            return (
                <div id="player">
                    <div onClick={this.close}><FontAwesomeIcon color={'#ffc000'} icon={All.faTimesCircle} /></div>
                    <iframe width="800" height="600" src={code} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default Player;