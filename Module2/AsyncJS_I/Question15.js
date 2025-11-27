const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter number of seconds for countdown: ", (input) => {
  let time = Number(input);

  if (isNaN(time) || time <= 0) {
    console.log("Please enter a valid positive number!");
    rl.close();
    return;
  }

  console.log(`Countdown started for ${time} seconds...`);
  console.log('Press "s" to stop early.\n');
  process.stdin.setRawMode(true);
  process.stdin.resume();

  const timer = setInterval(() => {
    console.log(`Time left: ${time} seconds`);
    time--;

    if (time < 0) {
      clearInterval(timer);
      console.log("Countdown Complete!");
      rl.close();
      process.exit();
    }
  }, 1000);

  const checkKey = () => {
    setTimeout(() => {
      process.stdin.once("data", (key) => {
        if (key.toString().trim() === "s") {
          clearInterval(timer);
          console.log("Countdown Stopped by User!");
          rl.close();
          process.exit();
        }
      });
      checkKey();
    }, 100);
  };
  checkKey();
});
