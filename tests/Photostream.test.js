import expect from 'expect';
import React from 'react';
import {mount, render} from 'enzyme';
import {shallow} from 'react-test-renderer';
//import {render, unmountComponentAtNode} from 'react-dom';

import Photostream from 'src/Photostream'

describe('Photostream', function() {

  let listOfPhotosStrings;
  let listOfPhotoObjects;
  let eventHandlers;

  before(function(){
    listOfPhotoObjects = [{image:"http://i.imgur.com/7ikJE9x.png", altText:"alt_text"}];
    listOfPhotosStrings = ["http://i.imgur.com/7ikJE9x.png", "http://i.imgur.com/7ikJE9x.png", "http://i.imgur.com/7ikJE9x.png"];
    eventHandlers = {onMouseEnter: ()=>"onMouseEnter", onMouseLeave: ()=>"onMouseLeave", onClick: ()=>"onClick" };
  })

  it('renders without crashing', function() {
    expect(mount(<Photostream />)).toExist();
  });

  it('has the correct number of props.imageLists', function() {
    const photostream = mount(<Photostream imageList={listOfPhotosStrings} />);
    expect(photostream.prop("imageList").length).toEqual(listOfPhotosStrings.length);
  })
    
  it('it renders with 0 photos', function() {
    const listOfNoPhotos = [];
    const photostream = mount(<Photostream imageList={listOfNoPhotos} />);
    expect(photostream.find("Photo").length).toEqual(listOfNoPhotos.length);
  });

  it('(image is string) passes the picture value down to Photo as prop', function(){
    mount(<Photostream imageList={listOfPhotosStrings} />).find("Photo").map(function(item, index){
      expect(item.prop("picture")).toEqual(listOfPhotosStrings[index]);
    })
  })

  it('(image is object) passes the picture value down to Photo as a prop', function(){
    const childPhoto = mount(<Photostream imageList={listOfPhotoObjects} />).find("Photo").first();
    expect(childPhoto.prop("picture")).toEqual(listOfPhotoObjects[0].image);
  });

  it('(image is object) passes the altText value down to Photo as a prop', function(){
    const childPhoto = mount(<Photostream imageList={listOfPhotoObjects} />).find("Photo").first();
    expect(childPhoto.prop("altText")).toEqual(listOfPhotoObjects[0].altText);
  });

  it('Passes the onMouseEnter event handler to Photo', function(){
    const aPhoto = mount(<Photostream imageList={listOfPhotoObjects} eventHandlers={eventHandlers} />).find("Photo").first();
    expect(aPhoto.prop("eventHandlers").onMouseEnter.toString()).toEqual(eventHandlers.onMouseEnter.toString());
  })

  it('Passes the onMouseLeave event handler to Photo', function(){
    const aPhoto = mount(<Photostream imageList={listOfPhotoObjects} eventHandlers={eventHandlers} />).find("Photo").first();
    expect(aPhoto.prop("eventHandlers").onMouseLeave.toString()).toEqual(eventHandlers.onMouseLeave.toString());
  })

  it('Passes the onClick event handler to Photo', function(){
    const aPhoto = mount(<Photostream imageList={listOfPhotoObjects} eventHandlers={eventHandlers} />).find("Photo").first();
    expect(aPhoto.prop("eventHandlers").onClick.toString()).toEqual(eventHandlers.onClick.toString());
  })

});
