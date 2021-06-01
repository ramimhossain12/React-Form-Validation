import React, { Component } from 'react'
import reactDom from 'react-dom';
export default class AnotherDemo extends Component {


  chaneimg(){

   var imgID= document.getElementById("imgID");
   reactDom.findDOMNode(imgID).src =
     "https://images.unsplash.com/photo-1490077476659-095159692ab5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1033&q=80";
 

  }


  render() {
    return (
      <div>
        <button onClick={this.chaneimg}>Change Image</button>
        <br></br>
        <img id='imgID' src="https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></img>
      </div>
    );
  }
}
