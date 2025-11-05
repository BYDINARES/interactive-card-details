/* import { useState } from "react"; */

import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="purpule-top-section">
          <img
            className="card-back"
            src="src/images/bg-card-back.png"
            alt="card back"
          />
          <div className="card-front-logo ">
            <img
              className="card-front"
              src="src/images/bg-card-front.png"
              alt="card back"
            />
            <img
              className="card-logo"
              src="src/images/card-logo.svg"
              alt="card logo"
            />
          </div>
        </div>

        <form action="">
          {/* CARDHOLDER NAME */}
          <label className="labels user-name-label " htmlFor="user-name">
            CARDHOLDER NAME
            <input
              id="user-name"
              type="text"
              placeholder="e.g. Jane Applessed"
            />
          </label>

          {/* CARD NUMBER */}
          <label className="labels card-number-label " htmlFor="card-number">
            CARD NUMBER
            <input
              id="card-number"
              type="text"
              placeholder="e.g. 1234 5678 9123 0000"
            />
          </label>

          {/* Exp. date (mm/yy) */}
          <div className="labels expiration-date-container ">
            <p className="expiration-title">Exp. date (mm/yy)</p>
            <input id="month" type="text" placeholder="MM" />
            <input id="year" type="text" placeholder="YY" />
          </div>

          {/* CVC */}
          <label
            className="labels secret-number-label "
            htmlFor="secret-number"
          >
            CVC
            <input id="secret-number" type="number" placeholder="e.g. 123" />
          </label>

          {/* BUTTON */}
          <button id="confirmation-button">Confirm</button>
        </form>
      </main>
    </>
  );
}

export default App;
