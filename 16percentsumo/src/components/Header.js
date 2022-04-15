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
                    <Link id='consult' to="/consult">Konsult</Link>
                    <Link id='spirit' to="/spirit">Spirit</Link>
                </div>
                <div className='navThree'>
                    <a
                        id="insta"
                        className="App-link"
                        href="https://www.instagram.com/16_percent_sumo/"
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