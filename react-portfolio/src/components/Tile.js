import React from 'react';

const Tile = ({ title, description, image }) => {
  return (
    <div className="tile">
      {image && <img src={image} alt={title} />}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Tile;