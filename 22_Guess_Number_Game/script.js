// WAJSP to generate a random number and store it in a  variable. The program then takes an input from the user to tell them whether the guess number was correct, greater or lesser than the original number.
// 100 - (number of guesses) is the score of the user. The program is expected to terminate once the number is guessed. Number should be between 1-100.


// let randomNumber = Math.ceil(Math.random()*100);

// let turn = 0;
// let userNumber = prompt("Enter your number: ");

// if (turn == 0 && userNumber == randomNumber)
//   console.log(`Congratulations! You guessed the number in ${turn} turn.`);

// while (userNumber != randomNumber && turn < 100) {
//   if (userNumber < randomNumber) {
//     console.log(`guess number is lesser.`);
//   }
//   else {
//     console.log(`guess number is bigger.`);
//   }
  
//   userNumber = prompt("Enter your number:");
//   turn++;
// }

// if (turn <= 100 && userNumber == randomNumber)
//   console.log(`You guessed the number in ${100 - turn} turn.`);
// else
//   console.log(`GAME OVER`);



let randomNumber = Math.ceil(Math.random() * 100);
// randomNumber = Number.parseInt(randomNumber);

let userInput;

let turn = 100;

while (userInput != randomNumber) {
  turn -= 1;

  userInput = prompt(`Enter your number`);

  if (userInput == randomNumber) {
    console.log(`Congratulations! you guessed the correct number in ${100 - turn} turns.`);
  }
  else if (userInput > randomNumber && userInput < 100) {
    console.log(`Your number is greater than the actual number.`);
  }
  else if (userInput < randomNumber && userInput > 0) {
    console.log(`Your number is smaller than the actual number.`);
  }
  else {
    console.log(`enter the number between 1 to 100`);
  }
}