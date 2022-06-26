import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDHKgdoQBgP-xjJMTUJIpe4hVdUr1UVw1M",
    authDomain: "miniblog-65961.firebaseapp.com",
    projectId: "miniblog-65961",
    storageBucket: "miniblog-65961.appspot.com",
    messagingSenderId: "767885796100",
    appId: "1:767885796100:web:260b5f87add069014a6651"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }