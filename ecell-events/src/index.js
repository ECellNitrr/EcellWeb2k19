import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import "./bootstrap.css";

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
                <img src="./1.png" alt="user" />
              </figure>
              <span>Ignition</span>
            </div>
          </td>
          <td>
            <div class="icons">
              <figure>
                <img src="2.png" alt="user" />
              </figure>
              <span>Startup Camp</span>
            </div>
          </td>
          <td>
            <div class="icons">
              <figure>
                <img src="3.png" alt="user" />
              </figure>
              <span>Cricnometrica</span>
            </div>
          </td>

          <br />
          
            <td>
              <div class="icons">
                <figure>
                  <img src="./4.png" alt="user" />
                </figure>
                <span>B-Quiz</span>
              </div>
            </td>
            <td>
              <div class="icons">
                <figure>
                  <img src="5.png" alt="user" />
                </figure>
                <span>Wall Street</span>
              </div>
            </td>
            <td>
              <div class="icons">
                <figure>
                  <img src="6.png" alt="user" />
                </figure>
                <span>Uthkristh</span>
              </div>
            </td>
          
          <br />

          <td>
            <div class="icons">
              <figure>
                <img src="./7.png" alt="user" />
              </figure>
              <span>Entropy</span>
            </div>
          </td>
          <td>
            <div class="icons">
              <figure>
                <img src="8.png" alt="user" />
              </figure>
              <span>E - Gathering</span>
            </div>
          </td>
          <td>
            <div class="icons">
              <figure>
                <img src="9.png" alt="user" />
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
