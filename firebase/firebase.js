import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBAE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

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