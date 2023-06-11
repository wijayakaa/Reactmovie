import React from "react";

function ItemBody({ name, desc, tanggal}) {
  return (
    <div>
      <h3 className="style">{name}</h3>
      <p className="style">{desc}</p>
      <p className="style">{tanggal}</p>
    </div>
  );
}

export default ItemBody;