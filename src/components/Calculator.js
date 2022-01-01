import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import CustomInput from "./CustomInput";
import Reset from "./Reset";

const Calculator = () => {
  const [percentage, setPercentage] = useState("");
  const [billAmount, setBillAmount] = useState(0);
  const [numberPeople, setNumberPeople] = useState(0);
  const [tip, setTip] = useState("0.00");
  const [total, setTotal] = useState("0.00");
  const [resetDisabled, setResetDisabled] = useState(true);
  const [resetButtonClasses, setResetButtonClasses] =
    useState("disabled-button");

  const enableResetButton = () => {
    setResetButtonClasses("disabled-button enabled-button");
    setResetDisabled(false);
  };

  const radioButtonChange = (event) => {
    document.querySelector(".custom-amount.amount").value = "";
    enableResetButton();
    if (
      document.querySelector("#num-people").value === "" ||
      document.querySelector("#num-people").value === "0"
    ) {
      document.querySelector("#num-people").classList.add("input-error");
      document.querySelector(".error").style.display = "block";
    } else {
      document.querySelector("#num-people").classList.remove("input-error");
      document.querySelector(".error").style.display = "none";
    }
    const { value } = event.target;
    setPercentage(Number(value));
  };

  const inputChange = (event) => {
    enableResetButton();
    const { value, id } = event.target;
    if (id === "bill") {
      setBillAmount(Number(value));
      if (
        document.querySelector("#num-people").value === "" ||
        document.querySelector("#num-people").value === "0"
      ) {
        document.querySelector("#num-people").classList.add("input-error");
        document.querySelector(".error").style.display = "block";
      } else {
        document.querySelector("#num-people").classList.remove("input-error");
        document.querySelector(".error").style.display = "none";
      }
    } else if (id === "num-people") {
      if (value === "0" || value === "") {
        document.querySelector("#num-people").classList.add("input-error");
        document.querySelector(".error").style.display = "block";
      } else {
        document.querySelector("#num-people").classList.remove("input-error");
        document.querySelector(".error").style.display = "none";
      }
      setNumberPeople(Number(value));
    }
  };

  const customInputChange = (event) => {
    enableResetButton();
    document.querySelectorAll('input[type="radio"]').forEach((ele) => {
      ele.checked = false;
    });
    if (
      document.querySelector("#num-people").value === "" ||
      document.querySelector("#num-people").value === "0"
    ) {
      document.querySelector("#num-people").classList.add("input-error");
      document.querySelector(".error").style.display = "block";
    } else {
      document.querySelector("#num-people").classList.remove("input-error");
      document.querySelector(".error").style.display = "none";
    }
    const { value } = event.target;
    setPercentage(Number(value) / 100);
  };

  const resetCalculator = () => {
    const billAmount = document.querySelector("#bill");
    const numberPeople = document.querySelector("#num-people");
    const tipDisplay = document.querySelector("#tip-display");
    const totalDisplay = document.querySelector("#total-display");
    setPercentage("");
    setBillAmount("");
    setNumberPeople("");
    setTip("0.00");
    setTotal("0.00");
    setResetButtonClasses("disabled-button");
    setResetDisabled(true);
    document.querySelectorAll('input[type="radio"]').forEach((ele) => {
      ele.checked = false;
    });
    document.querySelector("#num-people").classList.remove("input-error");
    document.querySelector(".error").style.display = "none";
    billAmount.value = "";
    numberPeople.value = "";
    tipDisplay.innerHTML = tip.toFixed(2);
    totalDisplay.innerHTML = total.toFixed(2);
  };

  useEffect(() => {
    const tipAmount = (billAmount * percentage) / numberPeople;
    const totalAmount = (billAmount * percentage + billAmount) / numberPeople;
    if (!isFinite(tipAmount) || isNaN(tipAmount)) {
      setTip("0.00");
      setTotal("0.00");
    } else {
      setTip(tipAmount.toFixed(2));
      setTotal(totalAmount.toFixed(2));
    }
  }, [
    percentage,
    billAmount,
    numberPeople,
    tip,
    total,
    resetDisabled,
    resetButtonClasses,
  ]);

  return (
    <main>
      <div className="user-input">
        <section className="bill">
          <h2>Bill</h2>
          <Input
            icon="/assets/images/icon-dollar.svg"
            handleChange={inputChange}
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
              divClass="tip-button"
              btnID="five"
              handleChange={radioButtonChange}
            />
            <Button
              btnName="10%"
              btnValue="0.1"
              buttonClass="set-amount amount"
              divClass="tip-button"
              btnID="ten"
              handleChange={radioButtonChange}
            />
            <Button
              btnName="15%"
              btnValue="0.15"
              buttonClass="set-amount amount"
              divClass="tip-button"
              btnID="fifteen"
              handleChange={radioButtonChange}
            />
            <Button
              btnName="25%"
              btnValue="0.25"
              buttonClass="set-amount amount"
              divClass="tip-button"
              btnID="twenty-five"
              handleChange={radioButtonChange}
            />
            <Button
              btnName="50%"
              btnValue="0.5"
              buttonClass="set-amount amount"
              divClass="tip-button"
              btnID="fifty"
              handleChange={radioButtonChange}
            />
            <CustomInput
              inputValue="Custom"
              inputClass="custom-amount amount"
              divClass="tip-button"
              handleChange={customInputChange}
            />
          </div>
        </section>
        <section className="number-people">
          <div className="heading-error">
            <div>
              {" "}
              <h2>Number of People</h2>
            </div>
            <div>
              <p className="error">Can't be zero</p>
            </div>
          </div>
          <Input
            icon="/assets/images/icon-person.svg"
            handleChange={inputChange}
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
                $<span id="tip-display">{tip}</span>
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
              <p className="calculated-results">
                $<span id="total-display">{total}</span>
              </p>
            </div>
          </section>
        </div>
        <Reset
          buttonClass={resetButtonClasses}
          btnID="reset-button"
          btnName="Reset"
          clickFunction={resetCalculator}
          divClass="reset"
          buttonState={resetDisabled}
        />
      </div>
    </main>
  );
};

export default Calculator;
