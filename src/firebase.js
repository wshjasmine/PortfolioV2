import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCa-TsY7QnB8-jP3HJkO4737VcQfrDkr90",
  authDomain: "jasmine-wsh.firebaseapp.com",
  databaseURL: "https://jasmine-wsh-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jasmine-wsh",
  storageBucket: "jasmine-wsh.appspot.com",
  messagingSenderId: "1001698063666",
  appId: "1:1001698063666:web:ef6cd9fdd3f39a48b4532b",
  measurementId: "G-6YZKK62ZZQ"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;