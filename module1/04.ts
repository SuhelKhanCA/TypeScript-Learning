const announcement = "Hello World!";

announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// We probably meant to write this
announcement.toLocaleLowerCase();

// uncalled functions
function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
}

// basic logic errors
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  console.log("if block");
} else if (value === "b") {
  // Oops, unreachable
  console.log("else block");
}
