# react-photostream

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

PhotoStream is a neat little React component to display a list of images in a compact fashion in columns, without gaps inbetween regardless of image size.

You can see a small demo here http://react-photostream.surge.sh/ 

### To install:
```bash
npm install --save react-photostream
```


### To use:

```javascript
import React, {Component} from 'react';
import Photostream from 'react-photostream';

class VacationPictures extends Component {
  
  render() {

    let listOfImages = [
      "http://lorempixel.com/400/450",
      //...many images...
      "http://lorempixel.com/400/400"
    ];

    let listOfImageObjects = [
      {image:"http://lorempixel.com/400/450", altText:"first one"},
      //...many images...
      {image:"http://lorempixel.com/400/400", altText:"nth one"}
    ];

    return (
      <div>
        <h2>Images from vacation</h2>
        <PhotoStream imageList={listOfImages} />
        <hr />
        <h2>Detailes images from vacation</h2>
        <PhotoStream imageList={listOfImageObjects} />
      </div>
    );
  }

}

export default VacationPictures
```

#### Instructions
To render a wall of photos, you just need to pass to `<PhotoStream />` a list of image links as property `imageList`. You can pass either an array of image links, or an object of the format `{ image, altText }`. The image is the image link, and the altText is the alternate text to show on the photo itself (as the alt attribute on `<img />`).

#### Custom event handlers
To use custom event handlers, pass to Photostream a prop called eventHandlers, which must be an object with any of the following, onClick, onMouseEnter, onMouseLeave.

```javascript
import React from 'react';
import Photostream from 'react-photostream';

function Example(props){

  const onClickEventHandler = function(event, self){
    console.log(self.props.image);
  }
  
  const images = ["image1", "image2", "image3"];
  
  return <Photostream eventHandlers={{onClick: onClickEventHandler}} imageList={images} />;
}

export default Example
```

[build-badge]: https://img.shields.io/travis/SammyIsra/photostream-react/master.png?style=flat-square
[build]: https://travis-ci.org/SammyIsra/photostream-react

[npm-badge]: https://img.shields.io/npm/v/react-photostream.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-photostream

[coveralls-badge]: https://img.shields.io/coveralls/SammyIsra/photostream-react/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/SammyIsra/photostream-react
