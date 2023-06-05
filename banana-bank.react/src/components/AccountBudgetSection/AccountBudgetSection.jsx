import { useState, useEffect } from "react";
import "./AccountBudgetSection.css";
import MoneyTransferSection from "../MoneyTransferSection/MoneyTransferSection";

const AccountBudgetSection = (props) => {
  const [budget, setBudget] = useState(props.startCap);

  useEffect(() => {
    setBudget(props.startCap);
  }, [props.startCap]);

  return (
    <section className="account-budget">
      <h3>{budget.toFixed(2)}€</h3>
      <MoneyTransferSection budget={setBudget} actualbudget={budget} />
    </section>
  );
};

export default AccountBudgetSection;
