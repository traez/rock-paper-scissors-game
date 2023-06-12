import Image from "next/image";

export default function Section({ onClickHca }) {

  function handleClick(event) {
    const target = event.target.id;
    onClickHca(target);
  }

  return (
    <section>
      <article>
        <div id="triangle-div">
          <img src="./images/bg-triangle.svg" id="triangle" alt="" />
        </div>
        <div
          className="rps-divs"
          id="rock"
          onClick={handleClick}
        >
          <img src="./images/icon-rock.svg" alt="" />
        </div>
        <div
          className="rps-divs"
          id="paper"
          onClick={handleClick}
        >
          <img src="./images/icon-paper.svg" alt="" />
        </div>
        <div
          className="rps-divs"
          id="scissors"
          onClick={handleClick}
        >
          <img src="./images/icon-scissors.svg" id="trae" alt="" />
        </div>
      </article>
    </section>
  );
}

/*
div
*/
"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
  const [round, setRound] = useState(0);
  const [gameHuman, setGameHuman] = useState(0);
  const [gameRobot, setGameRobot] = useState(0);
  const [roundsWonHuman, setRoundsWonHuman] = useState([]);
  const [roundsWonRobot, setRoundsWonRobot] = useState([]);
  const array = ['rock', 'paper', 'scissors'];

  function toggleDialog () {
    setIsOpen((prevOpen) => !prevOpen);
  };

  function humanChoiceActions(target){
    const random = Math.floor(Math.random() * array.length);
    const robotChoice = array[random];
    const humanChoice = target;
    console.log(robotChoice,humanChoice);
  }

  return (
    <main>
      <Header />
      <Section onClickHca={humanChoiceActions}/>
      <Footer onClickToggle={toggleDialog}/>
      {isOpen && (
      <dialog open>
        <b>RULES</b>
        <img src="./images/image-rules.svg" id="rules" alt="" />
        <img src="./images/icon-close.svg" id="close" alt="" onClick={toggleDialog}/>
      </dialog>
       )}
    </main>
  );
}
