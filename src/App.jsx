import { useState } from "react";
import "./App.css";
function App() {
  //================ LOGIC ========================
  const [errors, setErrors] = useState({
    userName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Create a copy of errors we can modify
    const newErrors = {
      userName: "",
      cardNumber: "",
      month: "",
      year: "",
      cvc: "",
    };

    // Validation logic
    if (!data["user-name"].trim()) {
      newErrors.userName = "Please enter a valid username";
    }

    if (!/^\d{16}$/.test(data["card-number"])) {
      newErrors.cardNumber = "Type 16 numbers";
    }

    if (!/^\d{2}$/.test(data["month-input"])) {
      newErrors.month = "Type 2 numbers";
    }

    if (!/^\d{2}$/.test(data["year-input"])) {
      newErrors.year = "Type 2 numbers";
    }

    if (!/^\d{3}$/.test(data["secret-number"])) {
      newErrors.cvc = "Type 3 numbers";
    }

    setErrors(newErrors); // Update the state
  }

  /* //All the inputs
  const userName = formData.get("user-name");
  const cardNumber = formData.get("card-number");
  const monthinput = formData.get("month-input");
  const yearInput = formData.get("year-input"); 
  const secrectNumber = formData.get("secret-number"); */

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

        <form onSubmit={handleSubmit}>
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
              {errors.userName}
            </p>
          </label>

          {/* CARD NUMBER */}
          <label className="labels card-number-label " htmlFor="card-number">
            CARD NUMBER
            <input
              id="card-number"
              type="number"
              name="card-number"
              placeholder="e.g. 1234 5678 9123 0000"
            />
            <p id="card-number-error" className="error-message">
              {errors.cardNumber}
            </p>
          </label>

          {/* Exp. date (mm/yy) */}
          <div className="labels expiration-date-container ">
            <p className="expiration-title">EXP. DATE (MM/YY)</p>
            <input
              id="month"
              name="month-input"
              className="date-inputs"
              type="number"
              placeholder="MM"
              onFocus={() => setErrors((prev) => ({ ...prev, userName: "" }))} //bUSCA UN FORMA THE ECONDER LOS ERRORS CUNADO CLIKEAS
            />
            <p id="message-month" className="error-message">
              {errors.month}
            </p>

            <input
              id="year"
              name="year-input"
              className="date-inputs"
              placeholder="YY"
              type="number"
            />
            <p id="message-year" className="error-message">
              {errors.year}
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
              {errors.cvc}
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
