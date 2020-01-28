var words = [
  "ARSENAL",
  "LIVERPOOL",
  "CHELSEA",
  "INTER",
  "NAPOLI",
  "WIGAN",
  "MILAN",
  "TOTNEHAM",
  "ROMA",
  "PARMA",
  "UDINESE",
  "GENOA",
  "JUVENTUS",
  "CIGLARI",
  "WATFORD",
  "LEEDS",
  "LAZIO",
  "SOUTHAMPTON",
  "NEWCASTLE",
  "LEICESTER",
  "WOLVES",
  "BARNLEY",
  "NORWICH",
  "EVERTON",
  "SWENSEA"
];
var word = words[Math.floor(Math.random() * words.length)];
word = word.toUpperCase();
console.log(word);
var guessesLeft = 7;
var answerArray = [];

for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

var el = document.getElementById("answerword");
el.innerHTML = answerArray.join(" ");

$("button").click(function() {
  window.x = $(this).val();
  for (var i = 0; i < word.length; i++) {
    if (word[i].includes(window.x)) {
      answerArray[i] = x;
    }
  }
  newanswer = answerArray.join("");
  if (word === newanswer) {
    alert("YOU WON!");
  }

  var el = document.getElementById("answerword");
  el.innerHTML = answerArray.join(" ");

  if (word.includes(window.x)) {
  } else {
    guessesLeft--;
    document.getElementsByClassName("hangmanimg")[0].src =
      "./images/" + guessesLeft + ".png";
  }

  if (guessesLeft === 1) {
    alert("GAME OVER!");
  }
});

function hide(x) {
  document.getElementById(x).style.display = "none";
}

document.getElementById("close-window").addEventListener("click", function() {
  window.close();
});
