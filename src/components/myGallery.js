import React, { Component } from 'react'
import ImageGallery  from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

export default class MyGallery extends Component {
  render() {
    const images = this.props.photos.map(photo=>createCollection(photo));
    
    return <ImageGallery items={images} />
    
  }
}

const createCollection =(photo)=>{
    return {
        original: `${photo}`,
        thumbnail: `${photo}`
      }
}
