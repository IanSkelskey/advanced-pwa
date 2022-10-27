// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore, doc, setDoc, getDocs, collection } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyCTnAF1m-_eu_bJy1jd6QoCjvoz25q-3CA',
    authDomain: 'fielddayprototype.firebaseapp.com',
    projectId: 'fielddayprototype',
    storageBucket: 'fielddayprototype.appspot.com',
    messagingSenderId: '331372297103',
    appId: '1:331372297103:web:5ca890ebde7450e3fd29fa',
    measurementId: 'G-79RGQGCTJN',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

const testDoc = doc(db, 'testCollection/testDocument');

//write to the document
console.log('Writing to Firestore');
const docData = {
    testfield: 'testing',
};
setDoc(testDoc, docData);
console.log('Wrote to Firestore');

const querySnapshot = await getDocs(collection(db, 'users'));
querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
});
