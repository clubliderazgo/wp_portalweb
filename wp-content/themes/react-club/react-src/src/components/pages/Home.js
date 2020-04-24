import React from 'react';
import axios from 'axios';

import './Home.css';
import logo from "../../logo.png";

class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            pages: [],
            isLoaded: false
        };
    }

    componentDidMount () {
        axios.get('/wp-json/acf/v3/pages/26')
        .then(res => {
            this.setState({
                pages: res.data,
                isLoaded: true
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        var { pages = [], isLoaded } = this.state;
        
        if (isLoaded) {
            const divStyle = {
                backgroundImage: 'url(' + pages.acf.get_background_src.url + ')',
            };
            return (
                <div className="app-main">
                    <div className="app-home" style={divStyle}>
                        <div className="title">
                            <img alt="logo-club-liderazgo" src={logo} />
                            CLUB DE <strong>LIDERAZGO</strong>
                        </div>
                        <div className="subtitle" dangerouslySetInnerHTML={{ __html: pages.acf.get_subtitulo}}>
                        </div>
                        <div className="body" dangerouslySetInnerHTML={{ __html: pages.acf.get_body }}>
                        </div>
                        <div className="social-networks">
                            <ul className="social-nav">
                                <li className="social-item">
                                    <a className="social-link" href="/">
                                        <img alt="facebook" src={require('../../assets/images/bxl-facebook.svg')} />
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a className="social-link" href="/">
                                        <img alt="instagram" src={require('../../assets/images/bxl-instagram.svg')} />
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a className="social-link" href="/">
                                        <img alt="twitter" src={require('../../assets/images/bxl-twitter.svg')} />
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a className="social-link" href="/">
                                        <img alt="facebook" src={require('../../assets/images/bxl-pinterest-alt.svg')} />
                                    </a>
                                </li>
                                <li className="social-item">
                                    <a className="social-link" href="/">
                                        <img alt="facebook" src={require('../../assets/images/bx-cloud-download.svg')} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div className="app-main">Cargando...</div>)
        }
    }
}

export default Home;
