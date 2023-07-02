// Import the functions you need from the SDKs you need
import { initializeApp,firebase } from 'firebase/app';

import { getAnalytics} from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtU_N5uFogY2J2OOSCTcDMWCnjLCtNrx4",
  authDomain: "ttthhhh-99210.firebaseapp.com",
  projectId: 'ttthhhh-99210',
  storageBucket: 'ttthhhh-99210.appspot.com',
  messagingSenderId: '830443437902',
  appId: '1:830443437902:web:dbe39c20363fd8c1b0e81f',
  measurementId: 'G-2JGMES8R85',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);
// Initialize Firebase

// Send data to Firebase
export async function sendDataToFirebase(data) {
  try {

    console.log('Data sent to Firebase successfully. Document ID: ');
  } catch (error) {
    console.error('Error sending data to Firebase: ', error);
  }
}
