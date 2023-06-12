"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [showArticle, setShowArticle] = useState(true);
  const [flashHuman, setFlashHuman] = useState(false);
  const [flashRobot, setFlashRobot] = useState(false);
  const [gameHuman, setGameHuman] = useState(0);
  const [gameRobot, setGameRobot] = useState(0);
  const [roundsWonHuman, setRoundsWonHuman] = useState([]);
  const [roundsWonRobot, setRoundsWonRobot] = useState([]);
  const [choices, setChoices] = useState([]);
  const array = ["rock", "paper", "scissors"];

  console.log(choices);

  function toggleDialog() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  function lightRound([humanChoice, robotChoice]) {
    if (
      (humanChoice === "rock" && robotChoice === "paper") ||
      (humanChoice === "paper" && robotChoice === "scissors") ||
      (humanChoice === "scissors" && robotChoice === "rock")
    ) {
      setRoundsWonRobot((prevRoundsWonRobot) => [...prevRoundsWonRobot, "w"]);
      setChoices([ humanChoice, robotChoice, "LOSE" ]);
    } else if (
      (humanChoice === "rock" && robotChoice === "scissors") ||
      (humanChoice === "paper" && robotChoice === "rock") ||
      (humanChoice === "scissors" && robotChoice === "paper")
    ) {
      setRoundsWonHuman((prevRoundsWonHuman) => [...prevRoundsWonHuman, "w"]);
      setChoices([ humanChoice, robotChoice, "WIN" ]);
    } else if (humanChoice === robotChoice) {
      setChoices([ humanChoice, robotChoice, "DRAW" ]);
    }
  }

  function humanChoiceActions(target) {
    setShowArticle((prevArticle) => !prevArticle);

    if (roundsWonHuman.length === 5 || roundsWonRobot.length === 5) {
      setRoundsWonHuman((prevRoundsWonRobot) => []);
      setRoundsWonRobot((prevRoundsWonRobot) => []);
    }

    const random = Math.floor(Math.random() * array.length);
    const robotChoice = array[random];
    const humanChoice = target;
    lightRound([humanChoice, robotChoice]); // light round circle
  }

  useEffect(() => {
    console.log(roundsWonHuman, roundsWonRobot);
    if (roundsWonHuman.length === 5) {
      setGameHuman((prevGameHuman) => prevGameHuman + 1);
    } else if (roundsWonRobot.length === 5) {
      setGameRobot((prevGameRobot) => prevGameRobot + 1);
    }
  }, [roundsWonHuman, roundsWonRobot, showArticle, choices]);

  useEffect(() => {
    if (roundsWonHuman.length === 5) {
      setFlashHuman(true); 
      setTimeout(() => setFlashHuman(false), 10000);
    } else if (roundsWonRobot.length === 5) {
      setFlashRobot(true); 
      setTimeout(() => setFlashRobot(false), 10000);
    }
  }, [roundsWonHuman, roundsWonRobot, flashHuman, flashRobot]);

  return (
    <main>
      <Header
        roundsWonHumanLength={roundsWonHuman.length}
        roundsWonRobotLength={roundsWonRobot.length}
        gameHuman={gameHuman}
        gameRobot={gameRobot}
        flashHuman={flashHuman}
        flashRobot={flashRobot}
      />
      <Section
        onClickHca={humanChoiceActions}
        showArticle={showArticle}
        choices={choices}
      />
      <Footer onClickToggle={toggleDialog} />
      {isOpen && (
        <dialog open>
          <b>RULES</b>
          <img src="./images/image-rules.svg" id="rules" alt="" />
          <img
            src="./images/icon-close.svg"
            id="close"
            alt=""
            onClick={toggleDialog}
          />
        </dialog>
      )}
    </main>
  );
}
