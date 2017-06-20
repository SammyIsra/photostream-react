import React from 'react';
import {
  BrowserRouter as Router,
  Route 
} from 'react-router-dom';

class Stats extends React.Component {
    
    componentDidMount(){
        const today = (new Date()).toISOString().split('T')[0];
        const allDownloadsLink= `https://api.npmjs.org/downloads/point/2017-05-15:${today}/react-photostream`;
    }
    
    render(){
        return(
            <div>ITEM</div>
        );
    }
}

export default Stats