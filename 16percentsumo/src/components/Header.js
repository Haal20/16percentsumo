import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function Header() {
    return (
        <>
            <nav className='App-nav'>
                <div className='navOne'>
                    <Link to="/"><img className="App-logo" src="../logo.png" alt="logo" /></Link>
                    
                </div>
                <div className='navTwo'>
                    <Link className='App-link' to="/">Hem</Link>
                    <Link className='App-link' id='consult' to="/consult">Konsult</Link>
                    <Link className='App-link' id='spirit' to="/spirit">Spirit</Link>
                    <Link className='App-link' id='about' to="/about">Om mig</Link>
                </div>
                <div className='navThree'>
                    <a
                        id="insta"
                        className="App-link"
                        href="https://www.instagram.com/tarotbudskap/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Header