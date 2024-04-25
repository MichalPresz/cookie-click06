import { useState, useEffect } from "react";

export default function App() {
  // what if I want to do local storage? STRETCH GOAL
  const [carrots, setCarrots] = useState(0);
  const [cps, setCps] = useState(1); // CPS = Cookies Per Second

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
  }

  return (
    <div>
      <h1>Raining Carrots</h1>
      <button onClick={addCarrot}>
        <img src="src/assets/Bugs_Bunny.webp" />
      </button>
      <button onClick={buyUpgrade}>
        <img src="src/assets/carrotnobg.png" />
      </button>
      <p>I have {carrots} carrots</p>
      <p>I get {cps} carrots per second</p>
    </div>
  );
}
