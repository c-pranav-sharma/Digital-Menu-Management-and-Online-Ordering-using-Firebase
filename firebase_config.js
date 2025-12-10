const firebaseConfig = {
    apiKey: "enter your fire base api key",
    authDomain: "PASTE_YOUR_AUTH_DOMAIN_HERE",
    projectId: "PASTE_YOUR_PROJECTID",
    storageBucket: "PASTE_YOUR_STOREAGEBUCKET",
    messagingSenderId: "YOUR_ID",
    appId: "APP_ID"
};

// Initialize Firebase App and Services (if not already initialized)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Export the initialized services
const auth = firebase.auth();
const db = firebase.firestore();