// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDytdSg7q4myZddf-FcSd7Z-ncVYdaSxGo",
  authDomain: "test-66a14.firebaseapp.com",
  databaseURL: "https://test-66a14-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "test-66a14",
  storageBucket: "test-66a14.appspot.com",
  messagingSenderId: "136322010322",
  appId: "1:136322010322:web:af6c156536f0422631f10b",
  measurementId: "G-YCJV473N8D"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const database = getDatabase(app)

console.log(app)
console.log(analytics)
console.log(database)