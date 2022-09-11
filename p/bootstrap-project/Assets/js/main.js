// JavaScript File.
let popupClass = document.getElementById("pop-up");

let popup = () => {
  setTimeout(() => {
    popupClass.style.display = "flex";
  }, 2000);
};

let crossButton = document.getElementById("cross");

crossButton.addEventListener("click", () => {
  popupClass.style.display = "none";
});
