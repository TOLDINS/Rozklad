import React, { Component } from "react";
import auth from "../../services/auth";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <form action='/signup' method='POST' autoComplete='off'>
        <div>
          <label htmlFor='email'>E-mail:</label>
          <input id='email' type='email' name='e-mail' required />
        </div>
        <div>
          <label htmlFor='cafedra'>Кафедра:</label>
          <input id='cafedra' type='text' name='cafedra' required />
        </div>
        <div>
          <label htmlFor='password1'>Пароль:</label>
          <input id='password1' type='password' name='password1' required />
        </div>
        <div>
          <label htmlFor='password2'>Пароль ще раз:</label>
          <input id='password2' type='password' name='password2' required />
        </div>

        <button type='submit'>Зареєструватись</button>
      </form>
    );
  }
}

export default SignUp;
