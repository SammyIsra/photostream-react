import expect from 'expect';
import React from 'react';
import {mount, render} from 'enzyme';
import {shallow} from 'react-test-renderer';
//import {render, unmountComponentAtNode} from 'react-dom';

import Photostream from 'src/Photostream'

describe('Photostream', () => {

  it('renders without crashing', function() {
    expect(mount(<Photostream />)).toExist();
  });

  it('has the correct number of props.imageLists', function() {
    const listOfPhotos = ["some", "image", "thing"];
    const photostream = mount(<Photostream imageList={listOfPhotos} />);
    expect(photostream.props().imageList.length).toEqual(3);
  })
    
  it('it renders with more than 0 photos', function() {
    const listOfPhotos = ["", "", "", ""];
    const photostream = mount(<Photostream imageList={listOfPhotos} />);
    expect(photostream.find("Photo").length).toEqual(4);
  });

  it('it renders with 0 photos', function() {
    const listOfPhotos = [];
    const photostream = mount(<Photostream imageList={listOfPhotos} />);
    expect(photostream.find("Photo").length).toEqual(0);
  });

  it('passes the picture value down to Photo as a prop', function(){
    const images = [{image:"the_image", altText:"alt_text"}];
    const childPhoto = mount(<Photostream imageList={images} />).find("Photo").first();
    expect(childPhoto.props().picture).toEqual(images[0].image);
  });

  it('passes the altText value down to Photo as a prop', function(){
    const images = [{image:"the_image", altText:"alt_text"}];
    const childPhoto = mount(<Photostream imageList={images} />).find("Photo").first();
    expect(childPhoto.props().altText).toEqual(images[0].altText);
  });

});
