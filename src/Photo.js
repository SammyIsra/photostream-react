import React from 'react';

import './Photo.css';

//Component of a photo in the stream
class Photo extends React.Component {

    constructor(props){
        super(props);
        this.ReturnBoundEventHandlerOrUndefined = this.ReturnBoundEventHandlerOrUndefined.bind(this)
    }

    //Return a function that takes 'event' and calls the eventHandler with that event as an arg
    ReturnBoundEventHandlerOrUndefined(eventHandler){
        if(!eventHandler)
            return undefined;
        return (event)=>{
            eventHandler(event, this);
        }
    }

    render(){

        //Destructure values from props
        const {picture, altText, eventHandlers} = this.props;

        //Get properly structured functions for the event handlers from the provided ones
        const onMouseEnterHandler = this.ReturnBoundEventHandlerOrUndefined(eventHandlers.onMouseEnter);
        const onMouseLeaveHandler = this.ReturnBoundEventHandlerOrUndefined(eventHandlers.onMouseLeave);
        const onClickHandler = this.ReturnBoundEventHandlerOrUndefined(eventHandlers.onClick);

        return (
            <img
                className="photostream_photo"
                src={picture}
                alt={altText}
                onMouseEnter={onMouseEnterHandler}
                onMouseLeave={onMouseLeaveHandler}
                onClick={onClickHandler}
            />
        );
    }
}

export default Photo;
