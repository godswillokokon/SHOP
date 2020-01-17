// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDVwjvCyJlykCrhkQrQJ3KeLYCn0wUAPa4",
  authDomain: "shop-b283a.firebaseapp.com",
  databaseURL: "https://shop-b283a.firebaseio.com",
  projectId: "shop-b283a",
  storageBucket: "shop-b283a.appspot.com",
  messagingSenderId: "555551605583",
  appId: "1:555551605583:web:f88c3415c8229c37c07b3a",
  measurementId: "G-MKS3G37S3M"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();
