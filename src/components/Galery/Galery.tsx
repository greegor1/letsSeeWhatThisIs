import * as React from 'react';
import { images } from 'data/images';
import GaleryImage from 'components/GaleryImage/GaleryImage';

const Galery = () => (
  <div>
    <ul>
      {images.map(({ imgId, ...imgData }) => (
        <GaleryImage key={imgId} {...{ ...imgData }} />
      ))}
    </ul>
  </div>
);

export default Galery;
