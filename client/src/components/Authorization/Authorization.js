import React, { Component } from "react";
import auth from "../../services/auth";

class Authorization extends Component {
  render() {
    return (
      <div>
        <h1>Auth</h1>
        <button
          onClick={() => {
            auth.signIn(() => {
              this.props.history.push("/sp");
            });
          }}>
          {" "}
          SignIn
        </button>

        <button onClick={
          ()=>{
            this.props.history.push('/')
          }
        }>Log out</button>
      </div>
    );
  }
}

export default Authorization;
