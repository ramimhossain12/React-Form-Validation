import React, { Component } from 'react';
import ReactDOM from "react-dom";

class Welcome extends Component {
  myFun(){

    var container = document.getElementById("myID");
    var element = <h1>My Name Is hridoy , iam from reac dom</h1>;
    var callback = function () {
        alert("Hello")
        
    }

    ReactDOM.render(element, container, callback);

  }
  render() {
    return (
      <div>
        <button onClick={this.myFun}>Change</button>
        <h1 id='myID'>Ramim Hossain</h1>
      </div>
    );
  }
}

export default Welcome;