export default function Section({ onClickHca, showArticle, choices }) {

  function handleClick(event) {
    const target = event.currentTarget.getAttribute("id");
    onClickHca(target);
  }

  return (
    <section>

{showArticle ? (
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
          <img src="./images/icon-scissors.svg" alt="" />
        </div>
      </article>
 ) : (
      <div id="feedback">
          <div id="you-picked">
            <div className="picked-div" id="you-icon"><img src={`./images/icon-${choices[0]}.svg`} alt="" /></div>
            <small>YOU PICKED</small>
          </div>
          <div id="robot-picked">
            <div className="picked-div" id="robot-icon"><img src={`./images/icon-${choices[1]}.svg`} alt="" /></div>
            <small>ROBOT PICKED</small>
          </div>
          <div id="result">
            <strong>YOU {choices[2]}</strong>
            <button onClick={onClickHca} type="button">PLAY AGAIN</button>
          </div>
        </div>
 )}
    </section>
  );
}

/*
div
*/
