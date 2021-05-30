import firebase from "firebase/app"
import "firebase/auth"

const app=firebase.initializeApp({
    apiKey:proces.env.REACT_APP_FIREBASE_API_KEY ,
    authDomain: proces.env.REACT_APP_FIREBASE_AUTHDOMAIN,
    projectId: proces.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket:proces.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId:proces.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: proces.env.REACT_APP_FIREBASE_APP_ID
})

export const auth=app.auth();
export default app;