// Selecting elements
const stopwatchDisplay = document.getElementById("stopwatch");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

let timerInterval;
let elapsedTime = 0; // In milliseconds

// Format time to HH:MM:SS
function formatTime(ms) {
  const seconds = Math.floor(ms / 1000) % 60;
  const minutes = Math.floor(ms / (1000 * 60)) % 60;
  const hours = Math.floor(ms / (1000 * 60 * 60));

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Start the stopwatch
startButton.addEventListener("click", () => {
  if (!timerInterval) {
    const startTime = Date.now() - elapsedTime;

    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      stopwatchDisplay.textContent = formatTime(elapsedTime);
    }, 1000);
  }
});

// Stop the stopwatch
stopButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

// Reset the stopwatch
resetButton.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  stopwatchDisplay.textContent = "00:00:00";
});
