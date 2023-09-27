let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#00c6ff ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;









// Pobierz elementy HTML
const notification = document.querySelector(".notification");
const overlay = document.querySelector(".overlay");
const showNotificationButton = document.getElementById("showNotification");
const closeIcon = document.querySelector(".close-icon");
const dontShowAgainButton = document.getElementById("dontShowAgain");

// Funkcja do pokazywania powiadomienia
function showNotification() {
    notification.style.display = "block";
    overlay.style.display = "block";
}

// Funkcja do ukrywania powiadomienia
function hideNotification() {
    notification.style.display = "none";
    overlay.style.display = "none";
}

// Obsługa kliknięcia przycisku "CFG"
showNotificationButton.addEventListener("click", showNotification);

// Obsługa kliknięcia ikonki X
closeIcon.addEventListener("click", hideNotification);

// Obsługa kliknięcia przycisku "Nie pokazuj ponownie"
dontShowAgainButton.addEventListener("click", () => {
    hideNotification();
    // Tutaj możesz dodać kod do zapisania informacji, żeby nie pokazywać powiadomienia ponownie
});
















