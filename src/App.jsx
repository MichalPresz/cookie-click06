import React from "react";
import { useState, useEffect } from "react";
import ArtCard from "./condition/ArtCard";

export default function App() {
  const [carrots, setCarrots] = useState(0);
  const [cps, setCps] = useState(0);

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCarrots((currentCarrots) => currentCarrots + cps);
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

  function addCarrot() {
    setCarrots((currentCarrots) => {
      return currentCarrots + 1;
    });
  }

  function resetBtn() {
    setCarrots(0);
    setCps(0);
  }

  return (
    <div>
      <h1>Carrot Rain</h1>
      <button id="bunny" onClick={addCarrot}>
        <p>You have {carrots} carrots</p>
        <img className="hoverglow" src="/Bugs_Bunny.webp" />
      </button>
      <ArtCard
        carrots={carrots}
        cps={cps}
        setCps={setCps}
        setCarrots={setCarrots}
      />

      <button id="knife" onClick={resetBtn}>
        <p> Chop the Carrots</p>
        <img className="hoverglow" src="/knife.png" />
      </button>
    </div>
  );
}
