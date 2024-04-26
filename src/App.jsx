import { useState, useEffect } from "react";

export default function App() {
  // what if I want to do local storage? STRETCH GOAL
  const [carrots, setCarrots] = useState(0);
  const [cps, setCps] = useState(0); // CPS = Cookies Per Second

  useEffect(() => {
    // maybe you want to do some maths here for the 1000/cps etc
    // a timer to be created when the page loads to increase cookies by cps every second
    const myInterval = setInterval(() => {
      ;
    }, 1000);

    // to clean up my timer when I rerun the useEffect to i don't end up with a billion timers
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  function addCarrot() {
    // because this runs in a timer, we need to be more explicit about the previous value of the state variable
    setCarrots((currentCarrots) => {
      // what if I want to do local storage? STRETCH GOAL
      return currentCarrots + 1;
    });
  }

  function buyUpgrade() {
    if (carrots >= 10) {
      setCps(cps + 1);
      setCarrots(carrots - 10);
    }
  }
  // we triedd several options with Manny
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
      <button id="carrot" onClick={buyUpgrade}>
        <p>You get {cps} carrots per second</p>
        <img className="hoverglow" src="/carrotnobg.png" />
      </button>
      <button id="knife" onClick={resetBtn}>
        <p> Chop the Carrots</p>
        <img className="hoverglow" src="/knife.png" />
      </button>
    </div>
  );
}
