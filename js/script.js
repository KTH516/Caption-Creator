'use strict';

const QUOTES = {
  funny: ['Are you kitten me?', 'That was a cat–astrophe', 'Cat me if you can', 'Zero fluffs given', 'What kind of sports car does a cat drive? A Furrari', 'Take a look at what the cat dragged in'],
  flirty: ['Looking purr-fect', 'Do you like my cat-titude?', 'I think you’re really purr-ty', 'I love you meow and fur-ever', 'You had me at meow', 'Purr-haps we can cuddle later', 'I’m claw-fully lonely ;3'],
  cute: ['I’m so fur-tunate', 'Just chilling with my cat', 'You are claw-fully cute'],
  selfie: ['Feline good', 'Looking like a cat-astrophe', 'Cat fell asleep! Quick--take some photos!', 'Took a self paw-trait', 'Just chilling with my cat', 'Take a look at what the cat dragged in'],
  nature: ['So purr-oud of this photo!', 'This view was paw-esome!', 'Took my cat out to the park today!', 'Taking a relaxing stroll', 'Saw a beautiful meow-tain'],
  travel: ['My vacation was paw-esome!', 'Whisker me away', 'Best meow-ment ever', 'Purr-fect napping spot', 'Visited the cat cafe!', 'Home is where the cat is'],
  food: ['The meal was PURR-fect!', 'Avo-cat-o toast for the host', 'That was a meow-thful!', 'My cat always tries to steal my food!', 'Mice krispies', 'Mice cream', 'I make some pretty good as-purr-agus', 'Ordered a meow-tini'],
  pets: ['My cat is the best cat in the world', 'My cat is the evilest cat in the world', 'I wish I had a cat', 'My cat is a claw-full'],
  movies: ['Cats the Musical', 'Puss in Boots', 'Tom and Jerry', 'Garfield', 'The Cat in the Hat'],
  emojis: ['🐱🐈😸😹😺😻😼😽😾😿🙀🐭🐁🥛🍼', '🙀😻😼🐭🐁🥛🍼', '😸💤', '😻💕', '(^・ω・^ )', 'o((>ω< ))o', 'o(^=•ェ•=^)m', '(^◕.◕^)', '😼😼😼', '🙀', '🐈🐈🐈']
};


//Returns random statement from QUOTES
function randomizer(quotes) {
  console.log(quotes);
  let caption = document.querySelector('#caption');
  let generate = document.querySelector('#generate');
  if (quotes.length == 0) {
    caption.innerHTML = 'Meow, so empty';
    generate.style.color = 'rgb(173, 207, 207)';
  }
  else {
    
    generate.style.color = 'black';
    let x = Math.floor(Math.random() * quotes.length);
    while (caption.innerHTML === quotes[x]) {
      x = Math.floor(Math.random() * quotes.length);
    }
    caption.innerHTML = quotes[x];
  }
};

// Button clicking
let button = document.querySelector('#button');
button.addEventListener('click', function (event) {
  event.preventDefault();

  let quotes = [];
  let funny = document.querySelector('#funny');
  let flirty = document.querySelector('#flirty');
  if (funny.checked) {
    // add to array to randomize
    quotes = quotes.concat(QUOTES.funny);
  }
  if (flirty.checked) {
    quotes = quotes.concat(QUOTES.flirty);
  }
  if (cute.checked) {
    quotes = quotes.concat(QUOTES.cute);
  }
  if (selfie.checked) {
    quotes = quotes.concat(QUOTES.selfie);
  }
  if (nature.checked) {
    quotes = quotes.concat(QUOTES.nature);
  }
  if (travel.checked) {
    quotes = quotes.concat(QUOTES.travel);
  }
  if (food.checked) {
    quotes = quotes.concat(QUOTES.food);
  }
  if (pets.checked) {
    quotes = quotes.concat(QUOTES.pets);
  }
  if (movies.checked) {
    quotes = quotes.concat(QUOTES.movies);
  }
  if (emojis.checked) {
    quotes = quotes.concat(QUOTES.emojis);
  }
  
  randomizer(quotes);
});

