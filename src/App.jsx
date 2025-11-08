import { useState } from "react";
import "./App.css";

//================ LOGIC ========================
const [errors, setErrors] = useState();

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  //The error messages <p>
  const userNameError = document.querySelector("#username-error");
  const cardNumberError = document.querySelector("#card-number-error");
  const monthInputError = document.querySelector("#message-month");
  const yearInputError = document.querySelector("#message-year");
  const secrectNumberError = document.querySelector("#secret-number-error");

  //The username
  if (!data["user-name"].trim()) {
    userNameError.textContent = "Please enter a valid username";
  }
  //the card number
  if (!data["card-number"].trim() && data["card-number"].length === 16) {
    cardNumberError.textContent = "Type 16 numbers at least";
  }
  //The month
  if (!data["month-input"].trim() && data["month-input"].length > 2) {
    monthInputError.textContent = "Type 2 numbers at least";
  }
  //The year
  if (!data["card-number"].trim() && data["card-number"].length > 2) {
    yearInputError.textContent = "Type 2 numbers at least";
  }

  // Now you can validate `data`
  form.reset();
}
/* //All the inputs
  const userName = formData.get("user-name");
  const cardNumber = formData.get("card-number");
  const monthinput = formData.get("month-input");
  const yearInput = formData.get("year-input"); 
  const secrectNumber = formData.get("secret-number"); */

function App() {
  return (
    <>
      <main>
        <section className="purpule-top-section">
          <div className="card-back-logo">
            <img
              className="card-back"
              src="src/images/bg-card-back.png"
              alt="card back"
            />
            <p id="secret-number">000</p>
          </div>

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
            {/* The internal text inside of the card */}
            <h3 className="front-card-numders">0000 0000 0000 0000</h3>
            <p className="card-holder-name">Jane Applessed</p>
            <p className="expiration-date">00/00</p>
          </div>
        </section>

        <form action={handleSubmit}>
          {/* CARDHOLDER NAME */}
          <label className="labels user-name-label " htmlFor="user-name">
            CARDHOLDER NAME
            <input
              id="user-name"
              name="user-name"
              type="text"
              placeholder="e.g. Jane Applessed"
            />
            <p id="username-error" className="error-message">
              Error
            </p>
          </label>

          {/* CARD NUMBER */}
          <label className="labels card-number-label " htmlFor="card-number">
            CARD NUMBER
            <input
              id="card-number"
              type="text"
              name="card-number"
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <p id="card-number-error" className="error-message">
              Error
            </p>
          </label>

          {/* Exp. date (mm/yy) */}
          <div className="labels expiration-date-container ">
            <p className="expiration-title">Exp. date (mm/yy)</p>
            <input
              id="month"
              name="month-input"
              className="date-inputs"
              type="text"
              placeholder="MM"
            />
            <p id="message-month" className="error-message">
              Error
            </p>

            <input
              id="year"
              name="year-input"
              className="date-inputs"
              type="text"
              placeholder="YY"
            />
            <p id="message-year" className="error-message">
              Error
            </p>
          </div>

          {/* CVC */}
          <label
            className="labels secret-number-label "
            htmlFor="secret-number"
          >
            CVC
            <input
              id="secret-number"
              name="secret-number"
              type="number"
              placeholder="e.g. 123"
            />
            <p id="secret-number-error" className="error-message">
              Error
            </p>
          </label>

          {/* BUTTON */}
          <button id="confirmation-button">Confirm</button>
        </form>
      </main>
    </>
  );
}

export default App;
