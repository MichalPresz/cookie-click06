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
      <button onClick={addCarrot}>I am a carrot</button>
      <button onClick={buyUpgrade}>Carrot Rain</button>
      <p>I have {carrots} carrots</p>
      <p>I get {cps} carrots per second</p>
    </div>
  );
}

<body>
<div>
  <p>Carrots: <span id="cookiesSpan">0</span></p>
</div>
<div>
  <p>Carrots Per Second: <span id="cpsSpan">0</span></p>
</div>
<div>
  <button id="cookieBtn"><img src="./Bugs_Bunny.webp" /></button>
</div>
<div>
  <p><button id="upgradeBtn">Raining Carrots Upgrade</button></p>
</div>
<div>
  <p><button id="restartBtn">Restart</button></p>
</div>
</body>