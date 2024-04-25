import { useState, useEffect } from "react";

export default function App() {
  // what if I want to do local storage? STRETCH GOAL
  const [carrots, setCarrots] = useState(1);
  const [cps, setCps] = useState(0); // CPS = Cookies Per Second

  useEffect(() => {
    // maybe you want to do some maths here for the 1000/cps etc
    // a timer to be created when the page loads to increase cookies by cps every second
    const myInterval = setInterval(() => {
      addCarrot();
    }, 1000 / cps);

    // to clean up my timer when I rerun the useEffect to i don't end up with a billion timers
    return () => {
      clearInterval(myInterval);
    };
  }, [cps]);

  function addCarrot() {
    // because this runs in a timer, we need to be more explicit about the previous value of the state variable
    setCarrots((currentCarrots) => {
      // what if I want to do local storage? STRETCH GOAL
      return currentCarrots + 1;
    });
  }

  function buyUpgrade() {
    setCps(cps + 1);
    setCarrots(carrots - cps);
  }
  // we triedd several options with Manny
  function resetBtn() {
    setCarrots(0);
  }

  return (
    <div>
      <h1>Carrot Rain</h1>
      <button id="bunny" onClick={addCarrot}>
        <p>I have {carrots} carrots</p>
        <img className="hoverglow" src="src/assets/Bugs_Bunny.webp" />
      </button>
      <button id="carrot" onClick={buyUpgrade}>
        <p>I get {cps} carrots per second</p>
        <img className="hoverglow" src="src/assets/carrotnobg.png" />
      </button>
      <button id="knife" onClick={resetBtn}>
        <p> Chopp the Carrots</p>
        <img className="hoverglow" src="src/assets/knife.png" />
      </button>
    </div>
  );
}
