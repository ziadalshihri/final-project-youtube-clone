import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig={
//insert here the firebase api key
    apiKey: "",
  authDomain: "cpit405-clone.firebaseapp.com",
  projectId: "cpit405-clone",
  storageBucket: "cpit405-clone.appspot.com",
  messagingSenderId: "409565979006",
  appId: "1:409565979006:web:aaf2310648278e3df4532f"
};
const app= initializeApp(firebaseConfig);
const auth= getAuth(app);
export{app,auth};
