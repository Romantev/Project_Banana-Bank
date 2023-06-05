import "./MainSection.css";
import AccountBudgetSection from "../AccountBudgetSection/AccountBudgetSection";
import { useState } from "react";

const MainSection = () => {
  const [headerDis, setHeaderDis] = useState("flex");
  const [mainDis, setMainDis] = useState("none");
  const [name, setName] = useState("");
  const [startCap, setStartCap] = useState(0);

  function setDisplay() {
    setMainDis("flex");
    setHeaderDis("none");
  }

  return (
    <div className="wrapper">
      <h1>Nextlevel Bank</h1>
      <header style={{ display: headerDis }}>
        <h2>Willkommen auf deinem Nextlevel Konto!</h2>
        <input
          type="text"
          placeholder="Wie ist dein Name?"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Dein Startkapital?"
          onChange={(e) =>
            setStartCap(parseInt(parseFloat(e.target.value).toFixed(2)))
          }
        />
        <button onClick={setDisplay}>Starten!</button>
      </header>

      <main style={{ display: mainDis }}>
        <h2>
          Hallo, <span>{name}</span>. Dein Konto ist bereit!{" "}
        </h2>
        <AccountBudgetSection startCap={startCap} />
      </main>
    </div>
  );
};

export default MainSection;
