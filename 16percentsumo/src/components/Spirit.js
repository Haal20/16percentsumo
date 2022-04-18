import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Spirit() {
    return (
        <>
            <div>
                <h1>
                    Julias vägledning
                </h1>
                Andlig vägledning och magi
                <div>
                    <a
                        id="insta"
                        className="App-link"
                        href="https://www.instagram.com/tarotbudskap/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                    id="mail"
                        className="App-link"
                        href="mailto:tarotbudskap@example.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
            <div className='Spirit'>
                <section className='Section'></section>
                <section className='Section'></section>
                <section className='Section'></section>
            </div>
        </>
    )
}

export default Spirit;