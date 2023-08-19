// element.innerHTML is used to populate a div with HTML. Search online about this method and create a website with a div tag containing a random joke given an array of jokes. Use math.random and fetch jokes from the internet(use any website to create the array). Your website should show a random joke on every reload. Min length of your jokes array should be 10.

const arr = ["What do you say to a rabbit on its birthday? Hoppy Birthday!", "What has ears but cannot hear? A cornfield!", "What do you call a fake noodle? An impasta.", "Why couldn't the bicycle stand up by itself? It was two-tired.", "What did the plumber tell the singer? Nice pipes.", "What type of tree fits in your hand? A palm tree.", "Why did the cookie go to the doctor? It felt crummy.", "What is brown and sticky? A stick!", "How many apples grow on a tree? All of them!", "How do you make a tissue dance? Put some boogie in it!", "Why can't you tell an egg a joke? It'll crack up.", "How do you talk to a giant? You use big words!", "What did the banana say to the boy? Nothing, bananas can't talk!", "How do you make an octopus laugh? With ten-tickles!", "What type of cheese is not yours? Nacho cheese!", "Why couldn't the pony sing? It was a little hoarse.", "What does an ocean do to say hi? It waves!", "What has four wheels and flies? A garbage truck.", "What did the sink tell the toilet? You look flushed!", "What key is used to open bananas? A mon-key.", "Where do vampires keep their money? The blood bank.", "What gets wetter the more it dries? A towel.", "Why was the broom late to class? It over-swept.", "Why can't your hand be 12 inches long? Then it would be a foot.", "Why are ghosts the worst liars? You can see right through them.", "Why are peppers such good archers? Because they habanero.", "Why do bees have sticky hair? They use honeycombs.", "What do you call a funny mountain? Hill-arious.", "What did the nose tell the finger? Stop picking on me!", "What do you call an alligator in a vest? An investigator.", "Do you want to hear a joke about paper? It's tear-able!", "How does the moon cut his hair? Eclipse it.", "What's a tornado's favorite game? Twister!", "What do you give a sick lemon? Lemond-aid.", "Why are fish so smart? They live in schools!", "Where do polar bears keep their money? At a snow bank.", "Where do math teachers go on vacation? Times Square!", "What do Santa's elves learn in school? The elf-abet.", "How do you fix a broken pumpkin? With a pumpkin patch.", "What do you call a fibbing cat? A lion.", "What state has the most streets? Rhode Island.", "Why did the picture go to prison? Because it was framed.", "What’s worse than finding a worm in your apple? Finding half a worm.", "What is a computer's favorite snack? Computer chips.", "What did one volcano say to the other? I lava you.", "How do you talk to a giant? Use big words.", "What falls in winter but never gets hurt? Snow.", "What's a sea monster's favorite meal? Fish and ships.", "Where do you learn about ice cream? Sundae school.", "How does a penguin build a house? Igloos it together.", "How does a hurricane see? With one eye.", "What do you call a sleeping bull? A bulldozer.", "Why was six afraid of seven? Because seven eight nine!", "How do you throw a party in outer space? You planet.", "Why did the orange lose the race? It ran out of juice."];

// console.log(arr.length);

let random = Math.floor(Math.random() * 55);

const joke = ()=>{
  document.getElementById('joke').innerHTML = arr[random];
  document.getElementById('search').style.background = "brown";
  document.getElementById('search').style.borderColor = "brown";
};