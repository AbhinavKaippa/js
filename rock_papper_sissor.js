function repeat(string, repetation) {
  if (repetation === 0) {
    return "";
  }

  return string + repeat(string, repetation - 1);
}

function rockPapperSissor(repeat) {
  if (repeat > 2) {
    return Math.floor(Math.random() * 3);
  }

  if (confirm(emoji(repeat),)) {
    return repeat;
  }

  return rockPapperSissor(repeat + 1);
}

function emoji(input) {
  switch (input) {
    case 0:
      return "🪨";

    case 1:
      return "📄";

    case 2:
      return "✂️ ";
  }
}

function matchStatus(user, computer) {
  if (user === computer) {
    return "☰ ";
  }

  const won = (user - computer + 2) % 3 === 0// === 1 || user - computer === -2;

  return won ? "🏆" : "😢";
}

let yourScore = 0;
let computerScore = 0;

console.log("\n", repeat("_", 62));
console.log("|  you  |  computer  |  status  | Your Score  | Computer Score |")
console.log("", repeat("-", 62));

while (!(yourScore === 3 || computerScore === 3)) {
  const user = rockPapperSissor(0);
  const computer = Math.floor(Math.random() * 3);
  const game = matchStatus(user, computer);

  yourScore += game === "🏆" ? 1 : 0;
  computerScore += game === "😢" ? 1 : 0;

  console.log("|  ", emoji(user), " |    ", emoji(computer), "    |   ", game, "   |     ", yourScore, "     |      ", computerScore, "       |");
}
console.log("", repeat("-", 62));
console.log("\n", "\n", "                       ", yourScore === 3 ? "🎉🎉🎉 YOU WON 🎉🎉🎉" : "💩 YOU LOSS 💩", "\n");

