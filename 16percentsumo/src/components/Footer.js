import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <div className='App-footer'>
                <div className='footerOne'>
                    <p>----------------------------------</p>
                    <p>Julia Hansson</p>
                    <a 
                        id="insta" 
                        className="App-link" 
                        href="https://www.instagram.com/tarotbudskap/" 
                        target="_blank" 
                        rel="noopener noreferrer"><p><FontAwesomeIcon icon={faInstagram} /> tarotbudskap</p>
                    </a>
                    <p><a className="App-link" href="mailto:webmaster@example.com">NAMN@gmail.com</a></p>
                </div>
                <div className='footerTwo'>
                    <h3>{}</h3>
                </div>
                <div className='footerThree'>
                    <Link to="/"><img className="App-logo" src="../logo.png" alt="logo" /></Link>
                </div>
            </div>
        </>
    )
}

export default Footer