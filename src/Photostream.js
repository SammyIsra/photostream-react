import React, { Component } from 'react';

// Internal components
import Photo from './Photo';

//Stylesheet
import './PhotoStream.css'

class PhotoStream extends Component {

    //Renders the actual list of items. 
    // If we receive a string, use that as the picture.
    // If we receive an object {image, altText} then we pass those as the respective props
    photos(){
        return this.props.imageList.map((item, index) => {
            if(typeof item === "string")
                return ( <Photo key={} picture={item} /> );
            else
                return ( <Photo key={} picture={item.image} altText={item.altText} /> );
        })
    }

    render() {
        return (
            <div id="photos">
                {this.photos()}
            </div>
        );
    }

}

export default PhotoStream;
