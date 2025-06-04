
import { initializeApp, getApps, getApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

// TODO: Move this configuration to environment variables for security.
// Example: process.env.NEXT_PUBLIC_FIREBASE_API_KEY
const firebaseConfig = {
  apiKey: "AIzaSyDK7bBQJLgyjAQrdouiXb98hKvuj7Ztz18",
  authDomain: "lweemee-bc86d.firebaseapp.com",
  projectId: "lweemee-bc86d",
  storageBucket: "lweemee-bc86d.appspot.com", // Ensures correct .appspot.com domain
  messagingSenderId: "144275657841",
  appId: "1:144275657841:web:e2dfca0a509459e85077d0",
  measurementId: "G-3P6T2LP1H4"
};

// Initialize Firebase
let app: FirebaseApp;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const auth: Auth = getAuth(app);

// If you plan to use Analytics:
// import { getAnalytics, type Analytics } from "firebase/analytics";
// const analytics: Analytics = getAnalytics(app);

export { app, auth };
// export { app, auth, analytics }; // if analytics is used
