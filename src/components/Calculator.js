import React from "react";
import Input from "./Input";
import Button from "./Button";
import CustomInput from "./CustomInput";

const Calculator = () => {
  return (
    <main>
      <div className="user-input">
        <section className="bill">
          <h2>Bill</h2>
          <Input icon="/assets/images/icon-dollar.svg" />
        </section>
        <section className="tip-selection">
          <h2>Select Tip %</h2>
          <div className="buttons">
            <Button btnValue="5%" buttonClass="set-amount" />
            <Button btnValue="10%" buttonClass="set-amount" />
            <Button btnValue="15%" buttonClass="set-amount" />
            <Button btnValue="25%" buttonClass="set-amount" />
            <Button btnValue="50%" buttonClass="set-amount" />
            <CustomInput inputValue="Custom" inputClass="custom-amount" />
          </div>
        </section>
        <section className="number-people">
          <h2>Number of People</h2>
          <Input icon="/assets/images/icon-person.svg" />
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
              <p className="calculated-results">$0.00</p>
            </div>
          </section>
          <section className="total-amount">
            <div className="section-title">
              <h2 className="results-subtitle">
                Total <span className="per-person">/ person</span>
              </h2>
            </div>
            <div className="total">
              <p className="calculated-results">$0.00</p>
            </div>
          </section>
        </div>
        <div className="reset">
          <Button btnValue="Reset" buttonClass="disabled-button" />
        </div>
      </div>
    </main>
  );
};

export default Calculator;
