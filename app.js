let submitBtn = document.getElementById("submitButton");

submitBtn.addEventListener("click", () => {
  document.getElementById("submitMsg").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("submitMsg").classList.add("hidden");
  }, 2000);
  console.log("submit buton" + submitBtn);
});
