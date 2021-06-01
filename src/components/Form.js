import React, { Component } from "react";



export default class Form extends Component {

   constructor(){
       super()
       this.state={
           name: " "
       }
   }






  onChangeHandler = (event) => {
    var newName = event.target.value;
    this.setState({name: newName})

  };
  render() {
    return (
      <div>
        <form>
          <p>My Form</p>
          <p>{this.state.name}</p>
          <input
            onChange={this.onChangeHandler}
            type="text"
            placeholder="Enter Your Name: "
          ></input>
          <br></br>
          <input type="submit" value="Submit Now"></input>
        </form>
      </div>
    );
  }
}
