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

  //--- function that retieves and changes the cards' display ---
  const [usersInput, setUsersInput] = useState({
    userName: "",
    cardNumber: "",
    month: "",
    year: "",
    cvc: "",
  });

  // The function to change the user input
  function handleUserInputChange(e) {
    const { name, value } = e.target;

    // Update state dynamically
    setUsersInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

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
    if (!data["userName"].trim()) {
      newErrors.userName = "Please enter a valid username";
    }

    if (!/^\d{16}$/.test(data["cardNumber"].replace(/\s/g, ""))) {
      newErrors.cardNumber = "Type 16 numbers";
    }

    if (!/^\d{2}$/.test(data["month"])) {
      newErrors.month = "Type 2 numbers";
    }

    if (!/^\d{2}$/.test(data["year"])) {
      newErrors.year = "Type 2 numbers";
    }

    if (!/^\d{3}$/.test(data["cvc"])) {
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
            <p id="secret-number">{usersInput.cvc ? usersInput.cvc : "000"}</p>
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
            <h3 className="front-card-numders">
              {usersInput.cardNumber
                ? usersInput.cardNumber
                : "0000 0000 0000 0000"}
            </h3>
            <p className="card-holder-name">
              {" "}
              {usersInput.userName ? usersInput.userName : "xxx xxx"}
            </p>
            <p className="expiration-date">
              {usersInput.month || usersInput.year
                ? `${usersInput.month}/${usersInput.year}`
                : "00/00"}
            </p>
          </div>
        </section>

        <form onSubmit={handleSubmit} noValidate>
          {/* CARDHOLDER NAME */}
          <label className="labels user-name-label " htmlFor="user-name">
            CARDHOLDER NAME
            <input
              id="user-name"
              name="userName"
              type="text"
              onChange={handleUserInputChange}
              placeholder="e.g. Jane Applessed"
              onFocus={() => setErrors((prev) => ({ ...prev, userName: "" }))}
            />
            <p id="username-error" className="error-message">
              {errors.userName}
            </p>
          </label>

          {/* CARD NUMBER */}
          <label className="labels card-number-label " htmlFor="cardNumber">
            CARD NUMBER
            <input
              id="card-number"
              type="text"
              name="cardNumber"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={handleUserInputChange}
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
              name="month"
              className="date-inputs"
              onChange={handleUserInputChange}
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
              name="year"
              className="date-inputs"
              onChange={handleUserInputChange}
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
              name="cvc"
              type="number"
              onChange={handleUserInputChange}
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
        <section className="complete-state-section">
          <img src={"src/images/icon-complete.svg"} alt="A check sign" />
          <h1>THANK YOU!</h1>
          <p>We've added your card details</p>

          <button id="complete-validation">Continue</button>
        </section>
      </main>
    </>
  );
}

export default App;
