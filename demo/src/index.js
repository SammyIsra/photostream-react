import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link 
} from 'react-router-dom'
import 'whatwg-fetch'; //fetch polyfill


import PhotoStream from '../../src';

import './index.css';

class Home extends Component {
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

class Stats extends React.Component {


    
  componentDidMount(){
    const today = (new Date()).toISOString().split('T')[0];
    const allDownloadsLink= `https://api.npmjs.org/downloads/point/2017-05-15:${today}/react-photostream`;
      
    Promise.all([
      fetch(allDownloadsLink).then(resp => resp.json()),
    ])
    .then((resolved)=>{
      this.setState({
        totalDownloads: resolved[0].downloads,
        name: resolved[0].package
      })
    })
  }

  componentWillUpdate(){
    console.log("Updating!!")
  }

  render(){
      return(
        <div>{(this.state)? `${this.state.name}: ${this.state.totalDownloads}` : null}</div>
      );
  }
}

function Demo(props){
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/stats" component={Stats} />
      </div>
    </Router>
  );
}

render(<Demo/>, document.querySelector('#demo'));