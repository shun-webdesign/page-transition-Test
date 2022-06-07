import React from "react";
import Thumbnail from "./Thumbnail";
import { images } from "./images";

const Gallery = () => {
  return (
    <div className="container">
      <div className="thumbnails">
        {images.map((image, i) => (
          <Thumbnail image={image} i={i} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
