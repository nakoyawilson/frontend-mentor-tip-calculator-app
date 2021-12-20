import React from "react";
import Input from "./Input";
import Button from "./Button";

const Calculator = () => {
  return (
    <main>
      <div>
        <section className="bill">
          <h2>Bill</h2>
          <Input icon="/assets/images/icon-dollar.svg" />
        </section>
        <section>
          <h2>Select Tip %</h2>
          <div className="buttons">
            <Button btnValue="5%" />
            <Button btnValue="10%" />
            <Button btnValue="15%" />
            <Button btnValue="25%" />
            <Button btnValue="50%" />
            <Button btnValue="Custom" />
          </div>
        </section>
        <section>
          <h2>Number of People</h2>
          <Input icon="/assets/images/icon-person.svg" />
        </section>
      </div>
      <div>
        <section>
          <h2>
            Tip Amount <span className="per-person">/ person</span>
          </h2>
        </section>
        <section>
          <h2>
            Total <span className="per-person">/ person</span>
          </h2>
        </section>
        <Button btnValue="Reset" />
      </div>
    </main>
  );
};

export default Calculator;
