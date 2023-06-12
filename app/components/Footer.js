export default function Footer({onClickToggle}) {
  return (
    <footer>
      <form>
        <h5>©2023 Designed by Trae Zeeofor</h5>
        <h6>
          <a
            href="https://github.com/traez/rock-paper-scissors-game"
            target="_blank"
          >
            (Rock Paper Scissors Game)
          </a>
        </h6>
      </form>
      <menu onClick={onClickToggle}>RULES</menu>
    </footer>
  );
}
