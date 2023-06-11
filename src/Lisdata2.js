import React from "react";
import ItemData from "./itemData";

 function ListData({data,onDelete}){



    return (
      <div className="container">
        {data.map((item) => (
          <ItemData
            key={item.id}
            name={item.name}
            desc={item.desc}
            image={item.image}
            tanggal={item.tanggal}
            onDelete={onDelete}
            id={item.id}
          />
        ))}
      </div>
    );
  }

export default ListData;