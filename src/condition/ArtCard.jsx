import React from "react";
// import { useState } from "react";

export default function ArtCard({ carrots, cps, setCps, setCarrots }) {
  console.log(carrots + "ArtCard");
  function buyUpgrade() {
    if (carrots >= 10) {
      setCps(cps + 1);
      setCarrots(carrots - 10);
    }
  }
  return (
    <div>
      {carrots >= 10 && (
        <button id="carrot" onClick={buyUpgrade}>
          <p>You get {cps} carrots per second</p>
          <img className="hoverglow" src="/carrotnobg.png" />
        </button>
      )}
    </div>
  );
}
