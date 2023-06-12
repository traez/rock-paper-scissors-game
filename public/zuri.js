(function () {
  const menu = document.querySelector("menu");
  const dialog = document.querySelector("dialog");
  const close = document.querySelector("#close");

  menu.addEventListener("click", function () {
    dialog.showModal();
  });

  close.addEventListener("click", function () {
    dialog.close();
  });
})();

/*
const filteredArr = arr.filter((word) => {
  // Convert the word to an array of words
  const words = word.split(" ");
*/
