
import React from 'react';
import { useState} from "react";
import { useMemo } from "react";
import "nes.css/css/nes.min.css";

import './index.css';

function App() {

  const [lifePointsOne, setLifePointsOne] = useState(20);
  const [lifePointsTwo, setLifePointsTwo] = useState(20);
  const [roll, setRoll] = useState('🎲');
  const [coin, setCoin] = useState('🪙');

  const coinSide = useMemo(() => ["H", "T"], []);

  const coinFlip = () => {
    const flip = coinSide[Math.round(Math.random())];
    setCoin(flip);
  };

  const dieRoll = () => {
    setRoll(Math.floor(Math.random() * 20 + 1));
    };

  return (
<div class="nes-container with-title is-centered is-dark">
  <div class="row">
    <div class="col">
    <p class="title">Life Gauge</p>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-6">
      <div class='nes-container is-rounded is-dark'>
        <h2>Player One</h2>
        <button id='upBtn' onClick={() => setLifePointsOne(lifePointsOne + 1)}>▲</button>
        <h1 id='playerOneLife'>{lifePointsOne}</h1>
        <button id='downBtn' onClick={() => setLifePointsOne(lifePointsOne - 1)}>▼</button>
      </div>
    </div>
    <div class="col-sm-6">
    <div class='nes-container is-rounded is-dark'>
      <h2>Player Two</h2>
      <button id='upBtn' onClick={() => setLifePointsTwo(lifePointsTwo + 1)}>▲</button>
      <h1 id='playerTwoLife'>{lifePointsTwo}</h1>
      <button id='downBtn' onClick={() => setLifePointsTwo(lifePointsTwo - 1)}>▼</button>
    </div>
    </div>

    <div>
      <button class="nes-avatar is-rounded is-large" style={{margin: "auto"}} onClick={() => {coinFlip()}}>{coin}</button>
      <button id='resetBtn' class="nes-avatar is-rounded is-medium" onClick={() => {setLifePointsOne(20); setLifePointsTwo(20); setRoll('🎲'); setCoin('🪙')}}>↺</button>
      <button class="nes-avatar is-rounded is-large" style={{margin: "auto"}} onClick={() => {dieRoll()}}>{roll}</button>
    </div>

  </div>
</div>
  );
}

export default App;
