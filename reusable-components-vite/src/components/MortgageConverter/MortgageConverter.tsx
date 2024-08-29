import React, { useState } from "react";

const MortgageConverter = () => {
  const [monthlyPayment, setMonthlyPayment] = useState<number>();
  const [totalPayment, setTotalPayment] = useState<number>();
  const [totalInterestPaid, setTotalInterestPaid] = useState<number>();

  const calculateInterest = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("first");
    const data = new FormData(event.currentTarget);
    console.log(data);

    const loanAmount = parseInt(data.get("loanAmount") as string) || 0;
    const loanTerm = parseInt(data.get("loanTerm") as string) * 12 || 0;
    const interestRate =
      parseFloat(data.get("interestRate") as string) / 100 / 12;

    const monthlyPayment =
      (loanAmount * interestRate) /
      (1 - 1 / Math.pow(1 + interestRate, loanTerm));

    const totalPayment = monthlyPayment * loanTerm;

    setMonthlyPayment(monthlyPayment);
    setTotalPayment(totalPayment);
    setTotalInterestPaid(totalPayment - loanAmount);
  };

  return (
    <>
      <div
        style={{
          textAlign: "left",
        }}
      >
        <form onSubmit={calculateInterest}>
          <div>
            <label htmlFor="loanAmount">Loan Amount: </label>
            <input
              type="number"
              id="loanAmount"
              name="loanAmount"
              min={10000}
              step={1000}
              defaultValue={10000}
            />
          </div>
          <div>
            <label htmlFor="">Loan Term: </label>
            <input
              type="number"
              id="loanTerm"
              name="loanTerm"
              min={1}
              step={1}
              defaultValue={30}
            />
          </div>
          <div>
            <label>Interest Rate: </label>
            <input
              type="number"
              id="interestRate"
              name="interestRate"
              min={1}
              step={0.01}
              defaultValue={5}
            />
          </div>
          <div>
            <button
              type="submit"
              style={{
                backgroundColor: "grey",
                padding: "0.5rem",
                borderRadius: "1rem",
              }}
            >
              Calculate
            </button>
          </div>
        </form>
      </div>
      <div
        style={{
          textAlign: "left",
          marginTop: "1rem",
        }}
      >
        <div>
          <b>Monthly Payment Amount: </b> {monthlyPayment}
        </div>
        <div>
          <b>Total Payment Amount: </b> {totalPayment}
        </div>
        <div>
          <b>Total Interest Paid: </b> {totalInterestPaid}
        </div>
      </div>
    </>
  );
};

export default MortgageConverter;
