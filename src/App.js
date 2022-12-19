import React from 'react';
import { useState} from "react";
import { useMemo } from "react";
import "nes.css/css/nes.min.css";
import './style.css';

function App() {

//  const provider = new ethers.providers.Web3Provider(window.ethereum)

//  const connect = async () => {
//    await provider.send("eth_requestAccounts", []);
//    setOpen(true);
//  }

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
    <div>
      <div style={{height: "98.5vh"}}
      class="nes-container with-title is-centered is-dark">
        
      <p class="title">Life Gauge</p>

      <button id='signIn' type="button" class="nes-btn is-primary">Log In</button>

      <div id='playerOne' class="nes-container is-rounded is-dark">
      <div id='playerOneCont'>
      <p>Player One</p>
      <button id='upBtn' onClick={() => setLifePointsOne(lifePointsOne + 1)}>▲</button>
      <h1 id='playerOneLife'>{lifePointsOne}</h1>
      <button id='downBtn' onClick={() => setLifePointsOne(lifePointsOne - 1)}>▼</button>
      </div>
      </div>
      <div id='playerTwo' class="nes-container is-rounded is-dark">
      <div id='playerTwoCont'>
      <p>Player Two</p>
      <button id='upBtn' onClick={() => setLifePointsTwo(lifePointsTwo + 1)}>▲</button>
      <h1 id='playerTwoLife'>{lifePointsTwo}</h1>
      <button id='downBtn' onClick={() => setLifePointsTwo(lifePointsTwo - 1)}>▼</button>
      </div>
      </div>

      <div id='reset'>
      <button id='resetBtn' class="nes-avatar is-rounded is-medium" onClick={() => {setLifePointsOne(20); setLifePointsTwo(20); setRoll('🎲'); setCoin('🪙')}}>↺</button>
      </div>

      <div id='coin'>
      <button class="nes-avatar is-rounded is-large" style={{margin: "auto"}} onClick={() => {coinFlip()}}>{coin}</button>
      </div>
      
      <div id='dice'>
      <button class="nes-avatar is-rounded is-large" style={{margin: "auto"}} onClick={() => {dieRoll()}}>{roll}</button>
      </div>

      </div>
    </div>
  );
}

export default App;
