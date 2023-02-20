import  * as firebase from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const app = firebase.initializeApp ({ 
  apiKey: "AIzaSyCZt_1Edjkhh-PvSdRC6TWqCUQDY3C22zs",
  authDomain: "codecampus-85a38.firebaseapp.com",
  projectId: "codecampus-85a38",
  storageBucket: "codecampus-85a38.appspot.com",
  messagingSenderId: "43971261580",
  appId: "1:43971261580:web:5277891cdf2aaec2cc37a9",
  measurementId: "G-2VBFZR8DN5"
});

export const db = getFirestore(app);

export const storage = getStorage(app);

export default app;