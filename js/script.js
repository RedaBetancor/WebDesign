document.getElementById("burguer").addEventListener("click", () => {
  var cross = document.getElementById("cross");
  cross.classList.remove("hidden");
  var burguer = document.getElementById("burguer");
  burguer.classList.add("hidden");
});

document.getElementById("cross").addEventListener("click", () => {
  var cross = document.getElementById("cross");
  cross.classList.add("hidden");
  var burguer = document.getElementById("burguer");
  burguer.classList.remove("hidden");
});
