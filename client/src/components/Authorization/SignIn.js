import React from "react";
import { useFormik } from "formik";
import checkFetchResponse from "../../services/checkFetchResponse";

import auth from "../../services/auth";

function SignIn() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      console.log(values);

       
      const requestOptions = {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
       // mode: "cors", // no-cors, *cors, same-origin
        //cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        //credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        //redirect: "follow", // manual, *follow, error
        //referrerPolicy: "no-referrer", // no-referrer, *client
        body: JSON.stringify(values), // body data type must match "Content-Type" header
      };

      fetch("http://localhost:3001/signin", requestOptions)
        //.then(checkFetchResponse)
        .then((data) => {
          console.log(data, "DATA");
        })
        .catch((err) => console.error(err));

      //console.log(response, "RESPONSE");
      //const data = await checkFetchResponse(response);

      //this.setState({ postId: data.id });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor='email'>E-mail:</label>
        <input
          id='email'
          type='email'
          name='email'
          required
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>
      <div>
        <label htmlFor='password'>Пароль:</label>
        <input
          id='password'
          type='password'
          name='password'
          //required
          onChange={formik.handleChange}
          value={formik.values.password}
        />
      </div>
      <button type='submit'>Ввійти</button>
    </form>
  );
}

export default SignIn;
