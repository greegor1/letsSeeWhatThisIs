import * as React from 'react';
import { images } from 'data/images';
import GalleryImage from 'components/GalleryImage/GalleryImage';

const Gallery = () => (
  <div>
    <ul>
      {images.map(({ imgId, ...imgData }) => (
        <GalleryImage key={imgId} {...{ ...imgData }} />
      ))}
    </ul>
  </div>
);

export default Gallery;
