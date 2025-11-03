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
          <div className="card-front-logo">
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
          <label htmlFor="">
            CARDHOLDER NAME
            <input type="text" placeholder="e.g. Jane Applessed" />
          </label>

          {/* CARD NUMBER */}
          <label htmlFor="">
            CARD NUMBER
            <input type="text" placeholder="e.g. 1234 5678 9123 0000" />
          </label>

          {/* Exp. date (mm/yy) */}
          <label htmlFor="">
            EXP. DATE (MM/YY)
            <input type="text" placeholder="MM" />
            <input type="text" placeholder="YY" />
          </label>

          {/* CVC */}
          <label htmlFor="">
            CVC
            <input type="text" placeholder="e.g. 123" />
          </label>
        </form>
      </main>
    </>
  );
}

export default App;
