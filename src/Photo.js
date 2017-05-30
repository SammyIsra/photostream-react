import React from 'react';

import './Photo.css';

//Functional component of a photo in the stream
const Photo = (props) => {

    //prop photo
    const {picture, altText} = props;

    return (
        <img
            className="photostream_photo"
            src={picture}
            alt={altText}
        />
    );
}

export default Photo;
