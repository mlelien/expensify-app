// console.log('destructinrg');

// const person = {
//   name: 'Andrew',
//   age: 26,
//   location: {
//     city: 'Philly',
//     temp: 92
//   }
// };

// const {name: firstName = 'Anonymous', age} = person;

// console.log(`${firstName} is ${age}`);


// const {city, temp: temperature} = person.location;
// if (city && typeof temperature === 'number') {
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(`${publisherName}`);



const address = [];
const [, , state = 'New York'] = address;

console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [coffee, , medCost] = item;

console.log(`A medium ${coffee} costs ${medCost}`);
