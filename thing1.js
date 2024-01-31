/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.code === "BracketRight") {
      eval(prompt("Eval:"));
  }
})
