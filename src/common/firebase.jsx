import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBQobpo7wPHzrA7I2NBDYGL8X1y5jEkKw0",
  authDomain: "webtech-project-a5477.firebaseapp.com",
  projectId: "webtech-project-a5477",
  storageBucket: "webtech-project-a5477.firebasestorage.app",
  messagingSenderId: "673894056872",
  appId: "1:673894056872:web:ee04690ab0418869fa139d"
};

const app = initializeApp(firebaseConfig);

// google auth

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err)
    })

    return user;
}