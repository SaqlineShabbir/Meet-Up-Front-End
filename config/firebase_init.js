import { initializeApp } from "firebase/app";

const initializeFirebase = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyByjWREpPUY0Snxs0pmO5pN0iUKqxCRE9A",
    authDomain: "meetup-b88c0.firebaseapp.com",
    projectId: "meetup-b88c0",
    storageBucket: "meetup-b88c0.appspot.com",
    messagingSenderId: "933167490249",
    appId: "1:933167490249:web:f3fc92d8ec16dd62459918"
  };


    initializeApp(firebaseConfig);
}

export default initializeFirebase;