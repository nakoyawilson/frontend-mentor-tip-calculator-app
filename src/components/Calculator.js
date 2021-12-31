import React from "react";
import Input from "./Input";
import Button from "./Button";
import CustomInput from "./CustomInput";

const Calculator = () => {
  const selectTip = () => {
    const amountButtons = document.querySelectorAll(".amount");
    amountButtons.forEach((button) => {
      console.log(button);
      button.addEventListener("click", () => {
        console.log(button.classList);
        // if (button.classList.contains("custom-amount amount")) {
        //   // button.disabled = false;
        //   alert("clicked");
        // }
        // button.classList.add("enabled-button");
      });
    });
  };

  const calculateTip = () => {
    const billAmount = Number(document.querySelector("#bill").value);
    const numberPeople = Number(document.querySelector("#num-people").value);
    const tipDisplay = document.querySelector("#tip-display");
    const totalDisplay = document.querySelector("#total-display");
    let percentage;
    const amountButtons = document.querySelectorAll(".amount");
    amountButtons.forEach((button) => {
      if (button.classList.contains("enabled-button")) {
        percentage = button.value;
      }
    });
    const resetButton = document.querySelector(".reset-button");
    resetButton.classList.add("enabled-button");
    const tip = (billAmount * percentage) / numberPeople;
    const total = (billAmount + billAmount * percentage) / numberPeople;
    if (!isFinite(tip) || isNaN(tip)) {
      tipDisplay.innerHTML = "0.00";
      totalDisplay.innerHTML = "0.00";
    } else {
      tipDisplay.innerHTML = tip.toFixed(2);
      totalDisplay.innerHTML = total.toFixed(2);
    }
    console.log(typeof tip);
    console.log(typeof total);
  };

  const resetCalculator = () => {
    const billAmount = document.querySelector("#bill");
    const numberPeople = document.querySelector("#num-people");
    const tipDisplay = document.querySelector("#tip-display");
    const totalDisplay = document.querySelector("#total-display");
    const amountButtons = document.querySelectorAll(".amount");
    amountButtons.forEach((button) => {
      button.classList.remove("enabled-button");
    });
    const tip = 0;
    const total = 0;
    billAmount.value = "";
    numberPeople.value = "";
    tipDisplay.innerHTML = tip.toFixed(2);
    totalDisplay.innerHTML = total.toFixed(2);
  };

  return (
    <main>
      <div className="user-input">
        <section className="bill">
          <h2>Bill</h2>
          <Input
            icon="/assets/images/icon-dollar.svg"
            calculateFunction={calculateTip}
            inputID="bill"
          />
        </section>
        <section className="tip-selection">
          <h2>Select Tip %</h2>
          <div className="buttons">
            <Button
              btnName="5%"
              btnValue="0.05"
              buttonClass="set-amount amount"
              clickFunction={selectTip}
              divClass="tip-button"
              btnID="five"
            />
            <Button
              btnName="10%"
              btnValue="0.1"
              buttonClass="set-amount amount"
              clickFunction={selectTip}
              divClass="tip-button"
              btnID="ten"
            />
            <Button
              btnName="15%"
              btnValue="0.15"
              buttonClass="set-amount amount"
              clickFunction={selectTip}
              divClass="tip-button"
              btnID="fifteen"
            />
            <Button
              btnName="25%"
              btnValue="0.25"
              buttonClass="set-amount amount"
              clickFunction={selectTip}
              divClass="tip-button"
              btnID="twenty-five"
            />
            <Button
              btnName="50%"
              btnValue="0.5"
              buttonClass="set-amount amount"
              clickFunction={selectTip}
              divClass="tip-button"
              btnID="fifty"
            />
            <CustomInput
              inputValue="Custom"
              inputClass="custom-amount amount"
              divClass="tip-button"
            />
          </div>
        </section>
        <section className="number-people">
          <h2>Number of People</h2>
          <Input
            icon="/assets/images/icon-person.svg"
            calculateFunction={calculateTip}
            inputID="num-people"
          />
        </section>
      </div>
      <div className="results">
        <div className="calculations">
          <section className="tip-amount">
            <div className="section-title">
              <h2 className="results-subtitle">
                Tip Amount <span className="per-person">/ person</span>
              </h2>
            </div>
            <div className="total">
              <p className="calculated-results">
                $<span id="tip-display">0.00</span>
              </p>
            </div>
          </section>
          <section className="total-amount">
            <div className="section-title">
              <h2 className="results-subtitle">
                Total <span className="per-person">/ person</span>
              </h2>
            </div>
            <div className="total">
              <p id="" className="calculated-results">
                $<span id="total-display">0.00</span>
              </p>
            </div>
          </section>
        </div>
        <Button
          btnValue="Reset"
          buttonClass="disabled-button reset-button"
          btnName="Reset"
          clickFunction={resetCalculator}
          divClass="reset"
        />
      </div>
    </main>
  );
};

export default Calculator;
