import * as firebase from 'firebase';
import 'firebase/auth';
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyACyiFXKVlvuUwgz9KcPROgGp0YRDZmq_o",
  authDomain: "selector-680f5.firebaseapp.com",
  databaseURL: "https://selector-680f5-default-rtdb.firebaseio.com",
  projectId: "selector-680f5",
  storageBucket: "selector-680f5.appspot.com",
  messagingSenderId: "822440709416",
  appId: "1:822440709416:web:b4923846c84c830513941d"
};

firebase.initializeApp(firebaseConfig);

export { firebase };
