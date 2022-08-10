import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

const firebaseConfig = {
	apiKey: "AIzaSyDanTrx-vP0I0oWG5VJxfYuJJM-2N2na1s",
	authDomain: "blog-a4b6e.firebaseapp.com",
	projectId: "blog-a4b6e",
	storageBucket: "blog-a4b6e.appspot.com",
	messagingSenderId: "951224094896",
	appId: "1:951224094896:web:a2223a26bd6fc0f1212b75"
 };


 // Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

export { database, ref, push, set, onValue };
