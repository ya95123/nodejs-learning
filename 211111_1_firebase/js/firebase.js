// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js"
import { getDatabase, ref, set, get, onValue } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js"

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
const db = getDatabase(app)

console.log(app)
console.log(analytics)
console.log(db)

// *ref() 尋找資料庫路徑
// *set() 新增資料
// *firebase 全部物件格式，不能陣列內容

// *寫入資料
// set(ref(db), {
//   "student001": {
//     "username": "Alfred",
//     "age": 26,
//     "sex": "male",
//     "country": "Taiwan"
//   },
//   "student002": {
//     "username": "Mark",
//     "age": 27,
//     "sex": "male",
//     "country": "USA"
//   }
// })

// set(ref(db, "student002/age"), 25)

// *讀取資料
// *onValue() 監聽數據變化
const student001 = ref(db, "student001")
// js 調用值時用 val()
onValue(student001, (snapshot) => {
  console.log(snapshot.val())
})
// * get()，讀取數據一次，詳情看文檔
get(student001).then(snapshot => {
  console.log(snapshot.val())
}).catch(err => {
  console.log(err)
})