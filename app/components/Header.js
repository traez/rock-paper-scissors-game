export default function Header({
  roundsWonHumanLength,
  roundsWonRobotLength,
  gameHuman,
  gameRobot,
  flashHuman,
  flashRobot
}) {
  return (
    <header>
      <aside>
        <div id="logo-div">
          <img src="./images/logo.svg" id="logo" alt="" />
        </div>
        <nav>
          <div className={`score ${flashHuman ? " transition-background" : ""}`}>
            <h2>Human Score</h2>
            <h3>{gameHuman}</h3>
          </div>
          <div className={`score ${flashRobot ? " transition-background" : ""}`}>
            <h2>Robot Score</h2>
            <h3>{gameRobot}</h3>
          </div>
        </nav>
      </aside>
      <ul className="hr-rows" id="human-row">
        <div className="icon-div">
          <img src="./images/human.png" id="human" className="icon" alt="" />
        </div>
        <li className={roundsWonHumanLength >= 1 ? "highlight" : ""}>1</li>
        <li className={roundsWonHumanLength >= 2 ? "highlight" : ""}>2</li>
        <li className={roundsWonHumanLength >= 3 ? "highlight" : ""}>3</li>
        <li className={roundsWonHumanLength >= 4 ? "highlight" : ""}>4</li>
        <li className={roundsWonHumanLength >= 5 ? "highlight" : ""}>5</li>
      </ul>
      <ul className="hr-rows" id="robot-row">
        <div className="icon-div">
          <img src="./images/robot.png" id="robot" className="icon" alt="" />
        </div>
        <li className={roundsWonRobotLength >= 1 ? "highlight" : ""}>1</li>
        <li className={roundsWonRobotLength >= 2 ? "highlight" : ""}>2</li>
        <li className={roundsWonRobotLength >= 3 ? "highlight" : ""}>3</li>
        <li className={roundsWonRobotLength >= 4 ? "highlight" : ""}>4</li>
        <li className={roundsWonRobotLength >= 5 ? "highlight" : ""}>5</li>
      </ul>
    </header>
  );
}
