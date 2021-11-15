// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js"
import { getDatabase, ref, set, get, push, child, onValue, update, remove, query, orderByChild, limitToLast } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js"

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
// *set() 新增資料 (會直接覆蓋)
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
// const student001 = ref(db, "student001")
// // js 調用值時用 val()
// onValue(student001, (snapshot) => {
//   const name = document.getElementById("name")
//   name.innerText = snapshot.val().username
//   console.log(snapshot.val())
// })
// * get()，讀取數據一次
// get(student001).then(snapshot => {
//   console.log(snapshot.val().country)

//   // *印出 db 資料
//   const preJson = document.getElementById("preJson")
//   // null 空格, 數字為空格數量
//   preJson.innerText = JSON.stringify(snapshot.val(), null, 3)
// }).catch(err => {
//   console.log(err)
// })

// *新增 push() 會使新增進去的父層增加一個 key
// push(student001, { "todos": "打掃" }).key

// *更新 update()，只會動到有更新的部分！也可以透過 null 刪除資料
// const student001Data = {
//   "username": "Alfred",
//   "age": 27,
//   "sex": "male",
//   "country": "Taiwan",
//   "-MoHvXY2xnPE38LHRAZ4": null
// }
// update(student001, student001Data)

// *刪除 remove()
// *child 可以指定路徑下的下一層特定位置
// remove(ref(db, "student001/-MoHrRNitgeqKo8uWdnp"))
// remove(child(student001, "-MoHw6JJMnb4g6V1cxas"))


// *排序 (順序查看文件 null->false->true->數值升序->字典升序->object)
// const class1 = {
//   "class1": {
//     "A": {
//       "num": 40,
//       "scoreRank": 3
//     },
//     "B": {
//       "num": 38,
//       "scoreRank": 4
//     },
//     "C": {
//       "num": 45,
//       "scoreRank": 1
//     },
//     "D": {
//       "num": 44,
//       "scoreRank": 5
//     },
//     "E": {
//       "num": 41,
//       "scoreRank": 2
//     },
//     "F": {
//       "num": 36,
//       "scoreRank": "未紀錄本次排名"
//     },
//     "G": {
//       "num": null,
//       "scoreRank": false
//     },
//   }
// }
// update(ref(db), class1)

// *order 資料排序
const class1Ref = ref(db, "class1")
// *設定可變化排序
const class1RefOrder = query(class1Ref, orderByChild("num"), limitToLast(7))
console.log(class1RefOrder)
// *onValue 讀寫搭配 firebase 的 forEach 自動排序
onValue(class1RefOrder, (snapshot) => {
  snapshot.forEach(item => {
    console.log(item.val())
    console.log(item.key)
  })
})