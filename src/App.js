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

function coinImg() {
  return (<section class="icon-list is-centered"><i class="nes-icon coin is-medium center"></i></section>);
}

function heads() {
  return (<section class="icon-list is-centered"><i class="nes-icon trophy is-medium center"></i></section>);
}

function tails() {
  return (<section class="icon-list is-centered"><i class="nes-icon close is-medium center"></i></section>);
}

function diceImg() {
  return (<section class="icon-list is-centered"><i class="nes-pokeball"></i></section>)
}

  const [lifePointsOne, setLifePointsOne] = useState(20);
  const [lifePointsTwo, setLifePointsTwo] = useState(20);
  const [roll, setRoll] = useState(diceImg);
  const [coin, setCoin] = useState(coinImg);



  const coinSide = useMemo(() => [heads, tails], []);

  const coinFlip = () => {
    const flip = coinSide[Math.round(Math.random())];
    setCoin(flip);
  };

  const dieRoll = () => {
  setRoll(Math.floor(Math.random() * 20));
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
      <button id='resetBtn' class="nes-avatar is-rounded is-medium" onClick={() => {setLifePointsOne(20); setLifePointsTwo(20); setRoll(diceImg); setCoin(coinImg)}}>↺</button>
      </div>

   
      <div id='coin'>
       <button class="nes-avatar is-rounded is-large center" onClick={() => {coinFlip()}}>{coin}</button>
      </div>

      <div id='dice'>
      <button class="nes-avatar is-rounded is-large center" onClick={() => {dieRoll()}}>{roll}</button>
      </div>

      </div>
    </div>
  );
}

export default App;
