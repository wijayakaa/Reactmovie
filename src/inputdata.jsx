import React from "react";

class InputData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      desc: "",
      tanggal: ""
    };
    this.onJudulChangeEventHandler = this.onJudulChangeEventHandler.bind(this);
    this.onDescriptionChangeEventHandler = this.onDescriptionChangeEventHandler.bind(this);
    this.onDateChangeEventHandler = this.onDateChangeEventHandler.bind(this)
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onJudulChangeEventHandler(event) {
    this.setState({
      name: event.target.value
    });
  }

  onDescriptionChangeEventHandler(event) {
    this.setState({
      desc: event.target.value
    });
  }
  onDateChangeEventHandler(event){
    this.setState({
      tanggal: event.target.value
    })
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addData({
      name: this.state.name,
      desc: this.state.desc,
      tanggal: this.state.tanggal
    });
    this.setState({
      name: "",
      desc: "",
      tanggal: ""
    });
  }

  render() {
    return (
      <div> 
        <form className="inputData" onSubmit={this.onSubmitEventHandler}>
          <input
            type="text"
            placeholder="Judul"
            value={this.state.name}
            onChange={this.onJudulChangeEventHandler}
          />
          <input
            type="text"
            placeholder="Description"
            value={this.state.desc}
            onChange={this.onDescriptionChangeEventHandler}
          />
          <input
            type="datetime-local"
            placeholder="New Date"
            value={this.state.tanggal}
            onChange={this.onDateChangeEventHandler}
          />
          <button type="submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default InputData;
