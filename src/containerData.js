import React from "react";
import ListData from "./Lisdata2";
import { movie } from "./utils/listData";
import InputData from "./inputdata";
import "./style.css";

class ContainerData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: movie()
      
    };
    this.onAddDataHandler = this.onAddDataHandler.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete = (id) => {
    const data = this.state.data.filter((movie)=> movie.id !== id)
   this.setState({data})
  }

  onAddDataHandler({name,desc,tanggal}){
    this.setState((prevState) =>{
      return{
        data: [
          ...prevState.data,
          {
            id: +new Date(),
            name,
            tanggal,
            desc,
            image:"/img/default.jpeg"
          }
        ]
      }
    })
  }
 

  render() {
    return (
      <div className="">
        <h1 className="style">Film Indonesia</h1>
        <InputData addData={this.onAddDataHandler}></InputData>
        <div>
          <ListData data={this.state.data} onDelete={this.handleDelete} />
        </div>
      </div>
    );
  }
}

export default ContainerData;