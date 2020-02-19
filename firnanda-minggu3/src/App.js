import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
        <div class="container">
        <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Firnanda
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>

      <content className="App-content">
        <h1> B i o d a t a </h1>
        <div class="card" style={{ float: "center" }}>
          <table class="table" style={{ height: "30%", width: "60%" }}>
            <tbody>
              <tr>
              <td rowspan="10" align="center">
                  <img
                    src={require("../src/_MG_7876.JPG")}
                    width="329"
                    height="438"
                    image-align="center"
                  ></img>
                </td>
                <td scope="row"></td>
                <th>Nama</th>
                <td>:</td>
                <td>Firnanda Kusuma Pratama</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <th>TTL</th>
                <td>:</td>
                <td>Malang, 9 Juli 1998</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <th>Jenis Kelamin</th>
                <td>:</td>
                <td>Laki - Laki</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <th>Alamat</th>
                <td>:</td>
                <td>Jl. Klayatan GG2 no 74</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <th>No. HP</th>
                <td>:</td>
                <td>082334071913</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <th>Status</th>
                <td>:</td>
                <td>Mahasiswa</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <th>Hobi</th>
                <td>:</td>
                <td>Basket</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <th>Email</th>
                <td>:</td>
                <td>firnandapratama99@gmail.com</td>
              </tr>
              <tr>
                <td scope="row"></td>
                <th>Github</th>
                <td>:</td>
                <td>firnandakusuma</td>
              </tr>
            </tbody>
          </table>
        </div>
      </content>

      <footer className="App-footer">firnandapratama99@gmail.com</footer>
    </div>
  );
}

export default App;
