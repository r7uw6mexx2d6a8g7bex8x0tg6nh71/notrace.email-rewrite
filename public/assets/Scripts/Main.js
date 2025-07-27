// public/assets/Scripts/Main.js
(function () {
  const blockKeys = ["F12", "U", "I", "J", "C"];

  document.addEventListener("keydown", (e) => {
    if (
      e.key === "F12" ||
      (e.ctrlKey && blockKeys.includes(e.key.toUpperCase())) ||
      (e.ctrlKey && e.shiftKey && blockKeys.includes(e.key.toUpperCase()))
    ) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  });

  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("dragstart", (e) => e.preventDefault());
})();
