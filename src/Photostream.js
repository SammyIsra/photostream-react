import React, { Component } from 'react';

// Internal components
import Photo from './Photo';

//Stylesheet
import './Photostream.css'

class PhotoStream extends Component {

    //Renders the actual list of items. 
    // If we receive a string, use that as the picture.
    // If we receive an object {image, altText} then we pass those as the respective props
    photos(){

        if(!this.props.imageList)
            return (<span className="empty-list" />);

        //Extract eventHandlers and imageList
        const {eventHandlers, imageList} = this.props;

        return imageList.map((item, index) => {

            return (
                <Photo key={index}
                    picture={item.image || item} 
                    altText={item.altText || undefined}
                    eventHandlers={eventHandlers}
                />
            );
        });
    }

    render() {
        return (
            <div id="photostream">
                {this.photos()}
            </div>
        );
    }

}

export default PhotoStream;
