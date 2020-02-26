import React from "react";
import "./Login.css";

class Login extends React.Component {
  render() {
    return (
      <div className="judul">
        <h2>Form Login</h2>
        <br/>
        <div className="box">
          <h1>Tugas Pertemuan</h1>
          <h1>ketiga</h1>

          <form>
            <label className="label_username">Username </label>
            <input
              type="text"
              name="uername"
              class="form_login"
              placeholder="masukkan username"
            ></input>
            <br/>
            <label className="label_password">Password </label>
            <input
              type="password"
              name="password"
              class="form_login"
              placeholder="Masukkan password"
            ></input>
            <br/>
            <input type="submit" className="login" value="Login" />
            <br/>
            <br/>
            <input type="checkbox"/> Remember Me
            <br/>
            <br/>
            <input type="submit" className="cancel" value="Cancel" />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
