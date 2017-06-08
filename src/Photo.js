import React from 'react';

import './Photo.css';

//Functional component of a photo in the stream
const Photo = (props) => {

    //prop photo
    const {picture, altText, eventHandlers} = props;

    return (
        <img
            className="photostream_photo"
            src={picture}
            alt={altText}
            onMouseEnter={eventHandlers? eventHandlers.onMouseEnter : undefined}
            onMouseLeave={eventHandlers? eventHandlers.onMouseLeave : undefined}
            onClick={eventHandlers? eventHandlers.onClick : undefined}
        />
    );
}

export default Photo;
