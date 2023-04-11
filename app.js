document.getElementById("submit").addEventListener("click", () => {
  document.getElementById("submitMsg").classList.remove("hidden");
  setTimeout(() => {
    document.getElementById("submitMsg").classList.add("hidden");
  }, 2000);
});
