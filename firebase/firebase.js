import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDZ9Va0kik6z0Hk3zTs8P7kzvK1MOgWCYU",
  authDomain: "expensify-ed7b3.firebaseapp.com",
  databaseURL: "https://expensify-ed7b3.firebaseio.com",
  projectId: "expensify-ed7b3",
  storageBucket: "expensify-ed7b3.appspot.com",
  messagingSenderId: "941362566434"
};

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.val());
// })

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'swe',
//     company: 'google'
//   },
//   isSingle: true,
//   location: {
//     city: 'Philly',
//     country: 'USA'
//   }
// }).then(() => {
//   console.log('data saved');
// }).catch((error) => {
//   console.log(error);
// });

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('removed isSingle');
//   })
//   .catch((error) => {
//     console.log('could not remove isSingle: ' + error);
//   });
// //1:20

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'amazon',
//   'location/city': 'seattle'
// })
//   .then(() => { console.log('updated job successfully'); })
//   .catch((error) => { console.log('job update unsuccessful'); });