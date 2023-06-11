import React from "react";

function ItemImage({ image }) {
  return (
    <div>
      <img className="img" src={image} width={250} alt="Movie" />
    </div>
  );
}

export default ItemImage;
