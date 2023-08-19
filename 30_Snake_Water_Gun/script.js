let userInput = prompt(`Enter S, W or G`);
let opposition = Math.floor(Math.random() * 3);

let arr = ['S', 'W', 'G'][opposition];

const match = (userInput, opposition)=> {
  if (userInput == opposition)
    return "tied";
  else if (userInput == 'S' && opposition == 'W')
    return 'user';
  else if (userInput == 'W' && opposition == 'S')
    return 'oppostion';
  else if (userInput == 'W' && opposition == 'G')
    return 'user';
  else if (userInput == 'G' && opposition == 'W')
    return 'opposition';
  else if (userInput == 'G' && opposition == 'S')
    return 'user';
  else if (userInput == 'S' && opposition == 'G')
    return 'opposition';
}

let output = match(userInput, arr);
alert(`user: ${userInput} and opposition: ${arr}. The winner is : ${output}`);