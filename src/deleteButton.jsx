import React from "react";

function DeleteButton({ id, onDelete }) {
  const handleClick = () => {
    onDelete(id);
  };
  return (
    <div>
      <button className="data-item" onClick={handleClick}> X </button>
    </div>
  );
}

export default DeleteButton;