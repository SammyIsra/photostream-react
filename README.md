# react-photostream

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

PhotoStream is a neat little React component to display a list of images in a compact fashion in columns, without gaps inbetween regardless of image size.

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

[build-badge]: https://img.shields.io/travis/SammyIsra/photostream-react/master.png?style=flat-square
[build]: https://travis-ci.org/SammyIsra/photostream-react

[npm-badge]: https://img.shields.io/npm/v/react-photostream.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-photostream

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
