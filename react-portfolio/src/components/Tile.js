import React from 'react';

const Tile = ({ title, description, tileClassName, image, imgClassName }) => {
  return (
    <div className={tileClassName}>
      <h2>{title}</h2>
      {image && <img src={image} alt={title} className={imgClassName} />}
      <p>{description}</p>
    </div>
  );
};

export default Tile;