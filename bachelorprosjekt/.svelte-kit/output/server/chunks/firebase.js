import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCaC7Ve9AzjcqYOt-Q8h3g_D2fek7wdy7k",
  authDomain: "bachelorprosjekt2023-9f51f.firebaseapp.com",
  projectId: "bachelorprosjekt2023-9f51f",
  storageBucket: "bachelorprosjekt2023-9f51f.appspot.com",
  messagingSenderId: "831956904877",
  appId: "1:831956904877:web:cecd5309b6fae011f00f24"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
export {
  auth as a
};
