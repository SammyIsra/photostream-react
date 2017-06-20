import React from 'react'

class Home extends React.Component {
  render() {
    const listOfSquareImages = [
      "http://lorempixel.com/400/400",
      "http://lorempixel.com/400/400",
      "http://lorempixel.com/400/400",
      "http://lorempixel.com/400/400",
      "http://lorempixel.com/400/400",
      "http://lorempixel.com/400/400"
    ];

    const listOfNotSquareImages = [
      "http://lorempixel.com/400/450",
      "http://lorempixel.com/600/200",
      "http://lorempixel.com/500/350",
      "http://lorempixel.com/600/300",
      "http://lorempixel.com/400/600",
      "http://lorempixel.com/400/400"
    ];

    const listOfImageObjects = [
      {image:"http://lorempixel.com/400/450", altText:"first one"},
      {image:"http://lorempixel.com/600/200", altText:"second one"},
      {image:"http://lorempixel.com/500/350", altText:"third one"},
      {image:"http://lorempixel.com/600/300", altText:"fourth one"},
      {image:"http://lorempixel.com/400/600", altText:"fifth one"},
      {image:"http://lorempixel.com/400/400", altText:"sixth one"}
    ];

    const eventHandler = {
      onMouseEnter: (event, self)=>{console.log(self)},
      onClick: (event, self)=>{console.log(self)}
    }

    return (
      <div>
        <h1>react-photostream Demo</h1>
        <hr />
        <h2>List of Square Images</h2>
        <PhotoStream imageList={listOfSquareImages}  eventHandlers={eventHandler} />
        <hr />
        <h2>List of Not Square Images</h2>
        <PhotoStream imageList={listOfNotSquareImages} />
        <hr />
        <h2>List of image objects "{"{image, altText}"}"</h2>
        <PhotoStream imageList={listOfImageObjects} eventHandlers={eventHandler} />
      </div>
    );
  }
}
