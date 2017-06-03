import React, {Component} from 'react'
import {render} from 'react-dom'

import PhotoStream from '../../src'

import './index.css';

class Demo extends Component {
  render() {
    let listOfSquareImages = [
      "http://lorempixel.com/400/400",
      "http://lorempixel.com/400/400",
      "http://lorempixel.com/400/400",
      "http://lorempixel.com/400/400",
      "http://lorempixel.com/400/400",
      "http://lorempixel.com/400/400"
    ];

    let listOfNotSquareImages = [
      "http://lorempixel.com/400/450",
      "http://lorempixel.com/600/200",
      "http://lorempixel.com/500/350",
      "http://lorempixel.com/600/300",
      "http://lorempixel.com/400/600",
      "http://lorempixel.com/400/400"
    ];

    let listOfImageObjects = [
      {image:"http://lorempixel.com/400/450", altText:"first one"},
      {image:"http://lorempixel.com/600/200", altText:"second one"},
      {image:"http://lorempixel.com/500/350", altText:"third one"},
      {image:"http://lorempixel.com/600/300", altText:"fourth one"},
      {image:"http://lorempixel.com/400/600", altText:"fifth one"},
      {image:"http://lorempixel.com/400/400", altText:"sixth one"}
    ];

    return (
      <div>
        <h1>react-photostream Demo</h1>
        <hr />
        <h2>List of Square Images</h2>
        <PhotoStream imageList={listOfSquareImages} />
        <hr />
        <h2>List of Not Square Images</h2>
        <PhotoStream imageList={listOfNotSquareImages} />
        <hr />
        <h2>List of image objects "{"{image, altText}"}"</h2>
        <PhotoStream imageList={listOfImageObjects} />
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'))
