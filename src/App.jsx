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

  const [usersInput, setUsersInput] = useState({
    //Add a function that retieves and changes the cards' display
    userName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  //Functions to handle the user's input
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

    if (!/^\d{16}$/.test(data["card-number"].replace(/\s/g, ""))) {
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

  function handleCardNumberChange(e) {
    //See if you can us e this to add a space every 4 digits
    // Remove all non-digit characters first
    let value = e.target.value.replace(/\D/g, "");

    // Limit to 16 digits
    value = value.slice(0, 16);

    // Add a space every 4 digits
    const formatted = value.replace(/(\d{4})(?=\d)/g, "$1 ");

    e.target.value = formatted;
  }

  function handleInputNoNegatives(e) {
    let value = e.target.value.replace(/[^\d]/g, "");

    return value;
  }

  function handleExpDates(e) {
    const onlyPositiveNumbers = handleInputNoNegatives(e).slice(0, 2);

    e.target.value = onlyPositiveNumbers;
  }

  function handleCVC(e) {
    const onlyPositiveCVC = handleInputNoNegatives(e).slice(0, 3);

    e.target.value = onlyPositiveCVC;
  }
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

        <form onSubmit={handleSubmit} noValidate>
          {/* CARDHOLDER NAME */}
          <label className="labels user-name-label " htmlFor="user-name">
            CARDHOLDER NAME
            <input
              id="user-name"
              name="user-name"
              type="text"
              placeholder="e.g. Jane Applessed"
              onFocus={() => setErrors((prev) => ({ ...prev, userName: "" }))}
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
              type="text"
              name="card-number"
              placeholder="e.g. 1234 5678 9123 0000"
              onFocus={() => setErrors((prev) => ({ ...prev, cardNumber: "" }))}
              onInput={handleCardNumberChange}
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
              type="text"
              min="0"
              placeholder="MM"
              onFocus={() => setErrors((prev) => ({ ...prev, month: "" }))}
              onInput={handleExpDates}
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
              onFocus={() => setErrors((prev) => ({ ...prev, year: "" }))}
              onInput={handleExpDates}
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
              onFocus={() => setErrors((prev) => ({ ...prev, cvc: "" }))}
              onInput={handleCVC}
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
