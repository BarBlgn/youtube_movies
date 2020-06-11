import React from 'react';
import { Container, Row, Col, Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as All from '@fortawesome/free-solid-svg-icons';
import Movies from './movieComponents/Movies';
import Movie from './movieComponents/Movie';

class SpotLight extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section id="spotlight">
                <Container>
                    <h3><FontAwesomeIcon color={'#dd3333'} icon={All.faBullhorn} /> Filmler</h3>
                    <nav>
                        <Tabs defaultActiveKey="news" id="movies-list">
                            <Tab eventKey="news" title="En Yeniler">
                                    <Movies OrderBy="date" />
                            </Tab>
                            <Tab eventKey="most-viewed" title="Çok İzlenenler">
                                    <Movies OrderBy="viewed" />
                            </Tab>
                            <Tab eventKey="high-points" title="Yüksek Puanlılar">
                                    <Movies OrderBy="point" />
                            </Tab>
                        </Tabs>
                    </nav>

                    <h3 class="mtl"><FontAwesomeIcon color={'#dd3333'} icon={All.faBullhorn} /> Diziler</h3>
                    <nav>
                        <Tabs defaultActiveKey="news" id="movies-list">
                            <Tab eventKey="news" title="En Yeniler">
                                    <Movies Type="serie" OrderBy="date" />
                            </Tab>
                            <Tab eventKey="most-viewed" title="Çok İzlenenler">
                                    <Movies Type="serie" OrderBy="viewed" />
                            </Tab>
                            <Tab eventKey="high-points" title="Yüksek Puanlılar">
                                    <Movies Type="serie" OrderBy="point" />
                            </Tab>
                        </Tabs>
                    </nav>

                    <h3 class="mtl"><FontAwesomeIcon color={'#dd3333'} icon={All.faEye} /> Tiyatrolar</h3>
                    <nav>
                        <Tabs defaultActiveKey="news" id="movies-list">
                            <Tab eventKey="news" title="En Yeniler">
                                    <Movies Type="theater" OrderBy="date" />
                            </Tab>
                            <Tab eventKey="most-viewed" title="Çok İzlenenler">
                                    <Movies Type="theater" OrderBy="viewed" />
                            </Tab>
                            <Tab eventKey="high-points" title="Yüksek Puanlılar">
                                    <Movies Type="theater" OrderBy="point" />
                            </Tab>
                        </Tabs>
                    </nav>
                </Container>
            </section>
        )
    }
}

/*
const spotlight = (props) => {
    return (
        <section id="spotlight">
            <Container>
                <h3><FontAwesomeIcon color={'#dd3333'} icon={All.faBullhorn} /> Öne Çıkanlar</h3>
                <nav>
                    <a className={'selected'} href="#">En Yeniler</a>
                    <a onClick={this.getMostRecent} href="#">Çok İzlenenler</a>
                    <a href="#">Yüksek Puanlılar</a>
                </nav>

                <div className={'movies'}>
                    <Movie Name="Neredesin Firuze" ImageUrl="../images/neredesin-firuze.jpg" Point="7.3" />
                    <Movie Name="Hemşo" ImageUrl="../images/hemso.jpg" Point="4.8" />
                    <Movie Name="Mucize" ImageUrl="../images/mucize.jpg" Point="7.6" />
                    <Movie Name="Bana Bir Soygun Yaz" ImageUrl="../images/bana-bir-soygun-yaz.jpg" Point="4.7" />
                </div>
            </Container>
        </section>
    )
}
*/
export default SpotLight;