/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './Menu.css';

class Menu extends React.Component {
    render () {
        return (
            <nav className="header-bar">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">
                            <div className="icon-menu">
                                <img alt="timer" src={require('../../assets/images/bx-home.svg')} />
                            </div>
                            Inicio
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <div className="icon-menu">
                                <img alt="timer" src={require('../../assets/images/bx-group.svg')} />
                            </div>
                            Nosotros
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/servicios">
                            <div className="icon-menu">
                                <img alt="timer" src={require('../../assets/images/bx-book-reader.svg')} />
                            </div>
                            Servicios
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <div className="icon-menu">
                                <img alt="timer" src={require('../../assets/images/bx-book-bookmark.svg')} />
                            </div>
                            Artículos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link whatsapp" href="#">
                            <img alt="whatsapp-club-liderazgo" src={require('../../assets/images/bxl-whatsapp.svg')} />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link contact" href="#">Contáctenos</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Menu;