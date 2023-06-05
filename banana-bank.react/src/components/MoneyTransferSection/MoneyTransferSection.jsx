import { useState } from "react";
import "./MoneyTransferSection.css";

const MoneyTransferSection = (props) => {
  const [inputVal, setInputVal] = useState(0);
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  function addMoney() {
    props.budget(props.actualbudget + parseFloat(inputVal));
    const addHistory = parseFloat(inputVal);
    document
      .querySelector("article")
      .insertAdjacentHTML(
        "afterbegin",
        addHistory != 0
          ? `<div class="history"><p class="win">+ ${addHistory.toFixed(
              2
            )} €</p><p class="time"> am ${date} um ${time}</p></div>`
          : ""
      );
  }

  function removeMoney() {
    props.budget(props.actualbudget - parseFloat(inputVal));
    const addHistory = parseFloat(inputVal);
    document
      .querySelector("article")
      .insertAdjacentHTML(
        "afterbegin",
        addHistory != 0
          ? `<div class="history"><p class="lose">- ${addHistory.toFixed(
              2
            )} €</p><p class="time"> am ${date} um ${time}</p></div>`
          : ""
      );
  }

  return (
    <section className="transfer">
      <input
        type="number"
        step="0.01"
        onChange={(e) => setInputVal(e.target.value).toFixed(2)}
      />
      <div>
        <button onClick={addMoney}>einzahlen</button>
        <button onClick={removeMoney}>auszahlen</button>
      </div>
      <div>
        <article></article>
      </div>
    </section>
  );
};

export default MoneyTransferSection;
