const farmAnimals = 'cow horse sheep pig chicken';

// 1. Destructuring for sounds
const { cow, horse, sheep, pig, chicken } = {
  cow: 'moo',
  horse: 'neigh',
  sheep: 'baa',
  pig: 'oink',
  chicken: 'cluck'
};
// 2. Destructuring for animal names
const { cow: bessie, horse: dolly, sheep: babe, pig: little } = {
  horse: 'bolt',
  cow: 'bessie',
  sheep: 'babe',
  pig: 'little'
};
// 3. Destructuring for remaining animals
const { cow: blackAndWhite, sheep: black, pig: pink } = {
cow: 'Black and White' ,
sheep: 'black' ,
pig: 'pink' 
};
// Arrays
const [blackAndWhite, black, pink] = ['Black and White', 'Black', 'Pink'];
// 4. Using first letter of each color
const [b, w, p] = ['Black and White', 'Black', 'Pink'];


const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// 5. Only indigo as indg
const { i: indg } = { i: 'Indigo' };

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};
const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};
const { nestedName, nestedColor, album, nestedJob, nestedPartner } = nestedMuppet;



// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner
