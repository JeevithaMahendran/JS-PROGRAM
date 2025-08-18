let target = Math.floor(Math.random() * 100);
let count = 0;

function playgame() {
  let guess = parseInt(document.getElementById("main").value);
  count++;

  if (guess < target) {
    document.getElementById("feedback").innerText = "to low";
  } else if (guess > target) {
    document.getElementById("feedback").innerText = "to high";
  } else {
    document.getElementById("feedback").innerText = "your guess is correct";
    document.getElementById("attempts").innerText =
      "number of attempts: " + count;
  }
}
