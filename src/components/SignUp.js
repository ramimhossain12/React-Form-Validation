import React, { Component } from "react";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: " ",
      email: " ",
      phone: " ",
    };
  }

  onChangeHandler = (event) => {
    var inputName = event.target.name;
    var inputValue = event.target.value;

    this.setState({ [inputName]: inputValue });

    if(inputName==='fname'){

        var namePattern = /^([a-zA-Z]){2,30}$/;
        if(!namePattern.test(inputValue)){
            this.setState({fname: "First name is not valid"})
        }

    }

     if (inputName === "lname") {

         var namePattern = /^([a-zA-Z]){2,30}$/;
         if (!namePattern.test(inputValue)) {
           this.setState({ lanme: "Last name is not valid" });
         }
     }

      if (inputName === "email") {

        var emailpater = /\S+@\S+\.\S+/;
        if(!emailpater.test(inputValue)){
              this.setState({ email: "Email is not valid" });
        }

      }

       if (inputName === "phone") {

    
         if (!Number(inputValue)) {
           this.setState({ phone: "Phone is not valid" });
         }
       }


  };

  render() {
    return (
      <div>
        <p>First Name : {this.state.fname}</p>
        <p>Last Name : {this.state.lname}</p>
        <p>Email : {this.state.email}</p>
        <p>Phone : {this.state.phone}</p>
        <form>
          <input
            onChange={this.onChangeHandler}
            name="fname"
            type="text"
            placeholder="First Name"
          ></input>
          <br></br>
          <input
            onChange={this.onChangeHandler}
            name="lname"
            type="text"
            placeholder="Last Name"
          ></input>
          <br></br>
          <input
            onChange={this.onChangeHandler}
            name="email"
            type="text"
            placeholder="Email"
          ></input>
          <br></br>
          <input
            onChange={this.onChangeHandler}
            name="phone"
            type="text"
            placeholder="Phone"
          ></input>
          <br></br>
          <input name="submit" type="submit" value="Save Now"></input>
          <br></br>
        </form>
      </div>
    );
  }
}

export default SignUp;
