import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faYoutube, faFacebook, faSpotify, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Spirit() {
    return (
        <>
            <div className='Spirit'>
                <h1>
                    Julias vägledning
                </h1>
                Andlig vägledning och magi
                <div>
                    <a
                        id="insta"
                        className="App-link"
                        href="https://www.instagram.com/16_percent_sumo/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                    id="mail"
                        className="App-link"
                        href="mailto:16percentsumo@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>

                <br/>

                <div className="App-btn">
                    <a
                    className="App-link"
                    href="https://distrokid.com/hyperfollow/16sumo/sprinkles"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Pre-save Sprinkles by 16% SUMO
                    </a>
                </div>
                <div className="App-btn">
                    <a
                    className="App-link"
                    href="https://open.spotify.com/playlist/22C4LM3J0Xmi8aqXJ7igDH?si=3fc8bd45e52c4d14"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon icon={faHeadphones} /> Playlist: Vibes (Lofi/Chill/Relax)
                    </a>
                </div>
                <div className="App-btn">
                    <a
                    className="App-link"
                    href="https://www.facebook.com/16percentsumo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon icon={faFacebook} /> Facebook
                    </a>
                </div>
                <div className="App-btn">
                    <a
                    className="App-link"
                    href="https://www.youtube.com/channel/UC0f1nulbOh9rpb37XTkOKVg"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <FontAwesomeIcon icon={faYoutube} /> Beat videos & live cookups YouTube channel
                    </a>
                </div>
            </div>
        </>
    )
}

export default Spirit;