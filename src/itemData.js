import React from "react";
import ItemBody from "./itemBody";
import ItemImage from "./itemImage";
import DeleteButton from "./deleteButton";

function ItemData({ name, desc,tanggal, image, onDelete, id }) {
  return (
    <div className="container">
      <ItemImage image={image} />
      <ItemBody name={name} desc={desc} tanggal={tanggal} />
      <DeleteButton onDelete={onDelete} id={id} />
    </div>
  );
}

export default ItemData;