import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div id="event" class="event">
        <div class="container">
          <h2>Our EVENTS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est
            facilis maiores, perspiciatis accusamus asperiores sint consequuntur
            debitis.
          </p>

          <br />
          <td>
            <div class="icons">
              <figure>
                <img src={require("./assets/imgs/1.png")} alt="user" />
              </figure>
              <span>Ignition</span>
            </div>
          </td>
          <td>
            <div class="icons">
              <figure>
                <img src={require("./assets/imgs/2.png")} alt="user" />
              </figure>
              <span>Startup Camp</span>
            </div>
          </td>
          <td>
            <div class="icons">
              <figure>
                <img src={require("./assets/imgs/3.png")} alt="user" />
              </figure>
              <span>Cricnometrica</span>
            </div>
          </td>

          <br />
          
            <td>
              <div class="icons">
                <figure>
                  <img src={require("./assets/imgs/4.png")} alt="user" />
                </figure>
                <span>B-Quiz</span>
              </div>
            </td>
            <td>
              <div class="icons">
                <figure>
                  <img src={require("./assets/imgs/5.png")} alt="user" />
                </figure>
                <span>Wall Street</span>
              </div>
            </td>
            <td>
              <div class="icons">
                <figure>
                  <img src={require("./assets/imgs/6.png")} alt="user" />
                </figure>
                <span>Uthkristh</span>
              </div>
            </td>
          
          <br />

          <td>
            <div class="icons">
              <figure>
                <img src={require("./assets/imgs/7.png")} alt="user" />
              </figure>
              <span>Entropy</span>
            </div>
          </td>
          <td>
            <div class="icons">
              <figure>
                <img src={require("./assets/imgs/8.png")} alt="user" />
              </figure>
              <span>E - Gathering</span>
            </div>
          </td>
          <td>
            <div class="icons">
              <figure>
                <img src={require("./assets/imgs/9.png")} alt="user" />
              </figure>
              <span>B-Case Study</span>
            </div>
          </td>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
