import React, { FC } from 'react';
import { IImage } from 'types/image.model';

const GalleryImage: FC<Omit<IImage, 'imgId'>> = ({ imgTitle, imgPreview, imgPath }) => (
  <li>
    <h3>{imgTitle}</h3>
    <img src={imgPath} alt={imgPreview} />
  </li>
);

export default GalleryImage;
